import gleam/bit_array
import gleam/crypto
import gleam/list
import gleam/result
import gleam/string

/// Short names, extending by four characters only when another image owns one.
pub fn allocate(source: String, owners: List(#(String, String))) -> String {
  let occupied =
    owners
    |> list.filter(fn(entry) { entry.0 != source })
    |> list.map(fn(entry) { entry.1 })
  let digest =
    source
    |> bit_array.from_string
    |> crypto.hash(crypto.Md5, _)
    |> bit_array.base64_url_encode(False)
  choose(digest, 4, occupied)
}

fn choose(digest: String, length: Int, occupied: List(String)) -> String {
  let candidate = string.slice(digest, 0, length)
  let used =
    list.any(occupied, fn(path) {
      path
      |> string.split("/")
      |> list.last
      |> result.map(string.starts_with(_, candidate <> "."))
      |> result.unwrap(False)
    })
  case used {
    False -> candidate
    True if length < 22 -> choose(digest, length + 4, occupied)
    True -> panic as "Image filename hash collision"
  }
}
