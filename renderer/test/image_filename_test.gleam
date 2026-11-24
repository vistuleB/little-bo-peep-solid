import gleam/string
import gleeunit/should
import image_filename

pub fn collision_lengths_test() {
  let short = image_filename.allocate("example.svg", [])
  string.length(short) |> should.equal(4)
  let medium =
    image_filename.allocate("example.svg", [
      #("other.svg", "svgo-svg/" <> short <> ".svg"),
    ])
  string.length(medium) |> should.equal(8)
  let long =
    image_filename.allocate("example.svg", [
      #("other.svg", short <> ".svg"),
      #("third.svg", medium <> ".svg"),
    ])
  string.length(long) |> should.equal(12)
  image_filename.allocate("example.svg", [#("other.svg", medium <> ".svg")])
  |> should.equal(short)
}

pub fn rebuild_does_not_collide_with_itself_test() {
  let short = image_filename.allocate("example.svg", [])
  image_filename.allocate("example.svg", [
    #("example.svg", "svgo-svg/" <> short <> ".svg"),
  ])
  |> should.equal(short)
  image_filename.allocate("example.svg", [
    #("example.svg", "svgo-svg/" <> short <> "longerhash.svg"),
  ])
  |> should.equal(short)
}
