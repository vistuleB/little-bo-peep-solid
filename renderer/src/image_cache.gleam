import gleam/bit_array
import gleam/crypto
import gleam/list
import gleam/result
import gleam/string
import shellout
import simplifile

@external(erlang, "editor_environment", "image_cache_directory")
fn configured_directory() -> String

pub fn directory() -> String {
  case configured_directory() {
    "" -> "build/image-cache"
    value -> value
  }
}

pub fn digest(bytes: BitArray) -> String {
  bytes |> crypto.hash(crypto.Sha256, _) |> bit_array.base64_url_encode(False)
}

pub fn file_digest(file: String) -> Result(String, simplifile.FileError) {
  simplifile.read_bits(file) |> result.map(digest)
}

// All validation lives here, for both desktop and server builds. Include the
// renderer implementation, resolved dependencies and SVGO configuration.
pub fn recipe() -> String {
  let files =
    list.append(simplifile.get_files("src") |> result.unwrap([]), [
      "gleam.toml",
      "manifest.toml",
      "../package.json",
      "../package-lock.json",
      "svgo.config.js",
      "svgo.config.mjs",
      "svgo.config.cjs",
      "../svgo.config.js",
      "../svgo.config.mjs",
      "../svgo.config.cjs",
    ])
    |> list.sort(string.compare)
  let inputs =
    list.map(files, fn(file) {
      file <> ":" <> result.unwrap(file_digest(file), "missing")
    })
  let versions =
    list.map(["node", "svgo"], fn(command) {
      shellout.command(run: command, with: ["--version"], in: ".", opt: [])
      |> string.inspect
    })
  string.join(list.append(["image-cache-v1", ..inputs], versions), "\n")
  |> bit_array.from_string
  |> digest
}

pub fn key(
  source: String,
  relative_name: String,
  method: String,
  recipe: String,
) -> Result(String, simplifile.FileError) {
  use source_hash <- result.try(file_digest(source))
  Ok(
    string.join([relative_name, source_hash, method, recipe], "\n")
    |> bit_array.from_string
    |> digest,
  )
}

pub fn valid(file: String, expected: String) -> Bool {
  expected != "" && file_digest(file) == Ok(expected)
}

pub fn restore(
  directory: String,
  key: String,
  target: String,
) -> Result(Bool, simplifile.FileError) {
  let cached = directory <> "/" <> key
  case simplifile.read(cached <> ".sha256") {
    Ok(expected) ->
      case valid(cached, expected) {
        True ->
          simplifile.copy_file(cached, target) |> result.map(fn(_) { True })
        False -> Ok(False)
      }
    Error(_) -> Ok(False)
  }
}

pub fn save(
  directory: String,
  key: String,
  source: String,
) -> Result(Nil, simplifile.FileError) {
  use _ <- result.try(simplifile.create_directory_all(directory))
  use hash <- result.try(file_digest(source))
  let target = directory <> "/" <> key
  use _ <- result.try(simplifile.copy_file(source, target))
  // Written last; interrupted or corrupt entries are cache misses.
  simplifile.write(target <> ".sha256", hash)
}
