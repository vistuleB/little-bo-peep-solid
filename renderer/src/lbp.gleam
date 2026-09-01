import argv
import desugaring as ds
import gleam/io
import gleam/string
import local_desugarers
import on
import renderer

fn cli_usage_supplementary() -> String {
  let margin = string.repeat(" ", ds.help_message_margin)
  [
    margin <> renderer.author_mode_option,
    margin <> "  -> generate author-facing version with source-linking tooltips",
    "",
    margin <> renderer.clean_option,
    margin <> "  -> remove unused images from image-map and build-img directory",
    "",
    margin <> "--renumber",
    margin <> "  -> renumber local desugarer blame references",
    "",
    margin <> "--generate / --regenerate",
    margin <> "  -> regenerate src/local_desugarers.gleam",
    "",
    margin <> "--desugarers",
    margin <> "  -> renumber blames, regenerate the local library, and run",
    margin <> "     all local desugarer tests",
    "",
    margin <> "--desugarer-tests / --test-desugarers [<name> ...]",
    margin <> "  -> test all local desugarers, or only those named",
    "",
  ]
  |> string.join("\n")
}

pub fn main() {
  io.println("")

  let args = argv.load().arguments

  use args <- on.error_ok(ds.read_from_dot_last_command(args), handle_cli_error)

  use arguments <- on.error_ok(
    ds.process_command_line_arguments(args, [
      renderer.clean_option,
      renderer.author_mode_option,
      renderer.echo_args_option,
    ]),
    handle_cli_error,
  )

  use help_requested <- on.error_ok(
    ds.handle_help_requests(arguments, cli_usage_supplementary),
    handle_cli_error,
  )

  use maintenance_requested <- on.error_ok(
    ds.handle_maintenance_requests(arguments, local_desugarers.assertive_tests),
    handle_cli_error,
  )

  use _ <- on.stay(case maintenance_requested || help_requested {
    True -> on.Return(Nil)
    False -> on.Stay(Nil)
  })

  use _ <- on.error_ok(ds.write_to_dot_last_command(args), handle_cli_error)

  renderer.render(arguments, args)
}

fn handle_cli_error(error: ds.CLIError) -> Nil {
  io.println("command line error: " <> ds.cli_error_message(error))
  io.println("")
}
