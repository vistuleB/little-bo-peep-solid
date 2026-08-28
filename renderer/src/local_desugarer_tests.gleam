import argv
import desugaring/testing
import gleam/io
import gleam/list
import gleam/option.{None, Some}
import gleam/string
import local_desugarers

pub fn main() {
  let requested = case argv.load().arguments {
    [] -> None
    [name] -> Some(without_gleam_extension(name))
    _ -> panic as "Expected zero arguments or one local desugarer name."
  }

  let collections =
    local_desugarers.assertive_tests
    |> list.map(fn(collection) { collection() })

  let selected = case requested {
    None -> collections
    Some(name) ->
      collections
      |> list.filter(fn(collection) { collection.desugarer_name == name })
  }

  let selected = case requested, selected {
    Some(name), [] -> panic as { "No local desugarer named '" <> name <> "'." }
    _, selected -> selected
  }

  let results =
    selected
    |> testing.run

  case testing.all_passed(results) {
    True ->
      case requested {
        None -> io.println("All local desugarer tests passed.")
        Some(name) -> io.println("Local desugarer tests passed: " <> name)
      }
    False -> panic as "Local desugarer tests failed."
  }
}

fn without_gleam_extension(name: String) -> String {
  case string.ends_with(name, ".gleam") {
    True -> string.drop_end(name, 6)
    False -> name
  }
}
