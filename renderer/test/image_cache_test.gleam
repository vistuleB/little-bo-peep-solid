import desugarers/lbp_img_build
import gleam/result
import gleeunit/should
import image_cache
import image_filename
import simplifile
import vxml.{Attr, V}
import vxml/blame

fn setup(name: String) -> String {
  let root = "build/image-cache-tests/" <> name
  let _ = simplifile.delete(root)
  let assert Ok(_) = simplifile.create_directory_all(root)
  root
}

pub fn content_validation_test() {
  let root = setup("contents")
  let source = root <> "/source.svg"
  let assert Ok(_) = simplifile.write(source, "one")
  let assert Ok(key) = image_cache.key(source, "source.svg", "cp", "recipe")
  let assert Ok(_) = image_cache.save(root <> "/cache", key, source)
  image_cache.restore(root <> "/cache", key, root <> "/out.svg")
  |> should.equal(Ok(True))
  simplifile.read(root <> "/out.svg") |> should.equal(Ok("one"))
  image_cache.key(source, "source.svg", "svgo", "recipe")
  |> should.not_equal(Ok(key))
  image_cache.key(source, "source.svg", "cp", "new recipe")
  |> should.not_equal(Ok(key))
  let assert Ok(_) = simplifile.write(source, "two")
  image_cache.key(source, "source.svg", "cp", "recipe")
  |> should.not_equal(Ok(key))
  // Even a same-size corrupted cache entry is rejected.
  let assert Ok(_) = simplifile.write(root <> "/cache/" <> key, "bad")
  image_cache.restore(root <> "/cache", key, root <> "/out.svg")
  |> should.equal(Ok(False))
  image_cache.restore(root <> "/cache", "missing", root <> "/out.svg")
  |> should.equal(Ok(False))
}

fn render(root: String) {
  let renderer =
    lbp_img_build.constructor(#(
      root,
      root <> "/public",
      "images",
      "build-img",
      root <> "/image-map.json",
      False,
      False,
      False,
    ))
  renderer.transform(
    V(
      blame.no_blame,
      "Image",
      [
        Attr(blame.no_blame, "src", "images/test.svg"),
        Attr(blame.no_blame, "svgo", "false"),
      ],
      [],
    ),
  )
  |> result.is_ok
  |> should.be_true
}

pub fn renderer_rebuild_and_restore_test() {
  let root = setup("renderer")
  let assert Ok(_) = simplifile.create_directory_all(root <> "/images")
  let source = root <> "/images/test.svg"
  let first =
    "<svg width=\"10\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"/>"
  let second =
    "<svg width=\"30\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"/>"
  let assert Ok(_) = simplifile.write(source, first)
  render(root)
  let output =
    root
    <> "/public/build-img/svg/"
    <> image_filename.allocate("test.svg", [])
    <> ".svg"
  simplifile.read(output) |> should.equal(Ok(first))
  // Immediate edits (same timestamp granularity) must invalidate the output.
  let assert Ok(_) = simplifile.write(source, second)
  render(root)
  simplifile.read(output) |> should.equal(Ok(second))
  // A corrupt local output must be repaired even with an otherwise matching map.
  let assert Ok(_) = simplifile.write(output, "corrupt")
  render(root)
  simplifile.read(output) |> should.equal(Ok(second))
  // Simulate a new checkout without generated files or image-map metadata.
  let assert Ok(_) = simplifile.delete(output)
  let assert Ok(_) = simplifile.delete(root <> "/image-map.json")
  render(root)
  simplifile.read(output) |> should.equal(Ok(second))
}
