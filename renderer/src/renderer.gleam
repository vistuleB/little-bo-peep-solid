import argv
import desugaring as ds
import desugaring/core
import desugaring/writerly_defaults as wd
import emitter_imports as ei
import gleam/dict.{type Dict}
import gleam/int
import gleam/io
import gleam/list
import gleam/option.{type Option, None, Some}
import gleam/string.{inspect as ins}
import local_desugarers
import on
import pipeline.{our_pipeline}
import simplifile
import vxml.{type VXML, V}
import vxml/blame.{type Blame, Ext}
import vxml/io_lines.{type OutputLine, OutputLine}

type LBPFragmentClassifer {
  Article(String)
  TOC
  HamburgerPanelAuthorSuppliedContents
  HeaderBlob
}

type LBPFragment(z) =
  ds.OutputFragment(LBPFragmentClassifer, z)

type BL =
  List(OutputLine)

type LBPSplitterError {
  NoTOC
  MoreThanOneTOC
  MoreThanOneHeaderBlob
  NoHamburgerPanelAuthorSuppliedContents
  MoreThanOneHamburgerPanelAuthorSuppliedContents
}

type LBPEmitterError {
  UnknownComponentError(component: String, classifier: String)
}

fn blame_us(loc: String) -> Blame {
  Ext([], "renderer:" <> loc)
}

fn our_splitter(
  root: VXML,
) -> Result(List(LBPFragment(VXML)), LBPSplitterError) {
  let articles =
    core.v_children_with_tags(root, ["Chapter", "Bootcamp", "Appendix"])
  use toc_vxml <- on.error_ok(
    core.v_unique_child_with_singleton_error(root, "TOC"),
    on_error: fn(error) {
      case error {
        core.LessThanOne -> Error(NoTOC)
        core.MoreThanOne -> Error(MoreThanOneTOC)
      }
    },
  )

  use panel_vxml <- on.error_ok(
    core.v_unique_child_with_singleton_error(
      root,
      "HamburgerPanelAuthorSuppliedContents",
    ),
    on_error: fn(error) {
      case error {
        core.LessThanOne -> Error(NoHamburgerPanelAuthorSuppliedContents)
        core.MoreThanOne ->
          Error(MoreThanOneHamburgerPanelAuthorSuppliedContents)
      }
    },
  )

  let header_blob_vxml = case
    core.v_unique_child_with_singleton_error(root, "HeaderBlob")
  {
    Ok(value) -> Ok(value)
    Error(core.LessThanOne) ->
      Ok(V(blame_us("default_header_blob"), "HeaderBlob", [], []))
    Error(core.MoreThanOne) -> Error(MoreThanOneHeaderBlob)
  }

  use header_blob_vxml <- on.ok(header_blob_vxml)

  Ok(
    list.flatten([
      [
        ds.OutputFragment(TOC, "routes/index.tsx", toc_vxml),
        ds.OutputFragment(
          HamburgerPanelAuthorSuppliedContents,
          "components/HamburgerPanelAuthorSuppliedContents.tsx",
          panel_vxml,
        ),
        ds.OutputFragment(
          HeaderBlob,
          "components/HeaderBlob.tsx",
          header_blob_vxml,
        ),
      ],
      list.map(articles, fn(c) {
        let #(c, vxml.Attr(_, _, path)) = core.v_assert_pop_attr(c, "path")
        let #(c, vxml.Attr(_, _, number)) = core.v_assert_pop_attr(c, "number")
        let #(c, vxml.Attr(_, _, category)) =
          core.v_assert_pop_attr(c, "category")
        let c = core.v_set_tag(c, "Article")
        let c = core.v_set_attr(c, blame_us("list.map(articles)"), "path", path)
        ds.OutputFragment(
          Article("__" <> category <> number <> "__"),
          "routes" <> path <> ".tsx",
          c,
        )
      }),
    ]),
  )
}

fn is_section(vxml: VXML) -> Bool {
  core.is_v_and_tag_equals(vxml, "Section")
}

fn is_rest_split_attr(attr: vxml.Attr) -> Bool {
  attr.key == "split_here" && attr.val == "Rest"
}

fn is_rest_split_section(vxml: VXML) -> Bool {
  case vxml {
    V(_, "Section", attrs, _) -> list.any(attrs, is_rest_split_attr)
    _ -> False
  }
}

fn remove_rest_split_attr(vxml: VXML) -> VXML {
  case vxml {
    V(_, "Section", attrs, _) ->
      V(
        ..vxml,
        attrs: list.filter(attrs, fn(attr) { !is_rest_split_attr(attr) }),
      )
    _ -> vxml
  }
}

fn up_to_and_including_first_section(
  previous: List(VXML),
  upcoming: List(VXML),
) -> #(List(VXML), List(VXML)) {
  case upcoming {
    [] -> #(previous, [])
    [first, ..rest] -> {
      case is_section(first) {
        True -> #([first, ..previous], rest)
        False -> up_to_and_including_first_section([first, ..previous], rest)
      }
    }
  }
}

fn up_to_rest_split_section(
  previous: List(VXML),
  upcoming: List(VXML),
) -> Option(#(List(VXML), List(VXML))) {
  case upcoming {
    [] -> None
    [first, ..rest] -> {
      case is_rest_split_section(first) {
        True -> Some(#(previous, [remove_rest_split_attr(first), ..rest]))
        False -> up_to_rest_split_section([first, ..previous], rest)
      }
    }
  }
}

fn split_vxml_to_first_section_and_rest(vxml: VXML) -> #(VXML, List(VXML)) {
  let assert V(b, t, a, children) = vxml
  let #(before_rest, rest) = case up_to_rest_split_section([], children) {
    Some(split) -> split
    None -> up_to_and_including_first_section([], children)
  }
  let rest_tag = V(blame_us("to_first_section_and_rest"), "Rest", [], [])
  #(V(b, t, a, [rest_tag, ..before_rest] |> list.reverse), rest)
}

fn rest_section_batches(vxmls: List(VXML)) -> List(List(VXML)) {
  rest_section_batches_loop(vxmls, [], [])
}

fn rest_section_batches_loop(
  upcoming: List(VXML),
  current: List(VXML),
  previous_batches: List(List(VXML)),
) -> List(List(VXML)) {
  case upcoming {
    [] -> {
      case current {
        [] -> list.reverse(previous_batches)
        _ -> list.reverse([list.reverse(current), ..previous_batches])
      }
    }
    [first, ..rest] -> {
      let current = [first, ..current]
      case is_section(first) {
        True ->
          rest_section_batches_loop(rest, [], [
            list.reverse(current),
            ..previous_batches
          ])
        False -> rest_section_batches_loop(rest, current, previous_batches)
      }
    }
  }
}

fn rest_batch_output_lines(
  batches: List(List(VXML)),
  index: Int,
) -> List(OutputLine) {
  case batches {
    [] -> []
    [batch, ..rest] ->
      list.flatten([
        [
          OutputLine(
            blame_us("rest_batch_a"),
            4,
            "{visibleRestSections() > " <> int.to_string(index) <> " && <>",
          ),
        ],
        vxml.vxmls_to_jsx_output_lines(batch, 6, 2),
        [
          OutputLine(blame_us("rest_batch_b"), 4, "</>}"),
        ],
        rest_batch_output_lines(rest, index + 1),
      ])
  }
}

fn article_emitter(
  fr: LBPFragment(VXML),
  imports_lookup: Dict(String, ei.ImportSource),
) -> Result(LBPFragment(BL), LBPEmitterError) {
  let #(first_split, rest) = split_vxml_to_first_section_and_rest(fr.payload)
  let rest_batches = rest_section_batches(rest)
  let assert Article(funcname) = fr.classifier

  use component_imports <- on.error_ok(
    fr.payload
      |> ei.uppercase_tags
      |> ei.imports_output_lines_for_symbols(imports_lookup),
    on_error: fn(s) {
      Error(UnknownComponentError(s, ins(fr.classifier) <> "pp"))
    },
  )

  let lines =
    list.flatten([
      component_imports,
      [
        OutputLine(
          blame_us("article_emitter"),
          0,
          "import useShowMore from \"~/hooks/useShowMore\";",
        ),
        OutputLine(blame_us("article_emitter"), 0, ""),
        OutputLine(
          blame_us("article_emitter"),
          0,
          "export default function " <> funcname <> "() {",
        ),
        OutputLine(blame_us("article_emitter"), 2, "return ("),
      ],
      vxml.vxml_to_jsx_output_lines(first_split, 4, 2),
      [
        OutputLine(blame_us("article_emitter"), 2, ");"),
        OutputLine(blame_us("article_emitter"), 0, "}"),
        OutputLine(blame_us("article_emitter"), 0, ""),
        OutputLine(blame_us("article_emitter"), 0, "const Rest = () => {"),
        OutputLine(
          blame_us("article_emitter"),
          2,
          "const visibleRestSections = useShowMore("
            <> int.to_string(list.length(rest_batches))
            <> ");",
        ),
        OutputLine(blame_us("article_emitter"), 2, "return <>"),
      ],
      rest_batch_output_lines(rest_batches, 0),
      [
        OutputLine(blame_us("article_emitter"), 2, "</>;"),
        OutputLine(blame_us("article_emitter"), 0, "};"),
      ],
    ])

  Ok(ds.OutputFragment(..fr, payload: lines))
}

fn toc_emitter(
  fr: LBPFragment(VXML),
  imports_lookup: Dict(String, ei.ImportSource),
) -> Result(LBPFragment(BL), LBPEmitterError) {
  use component_imports <- on.error_ok(
    fr.payload
      |> ei.uppercase_tags
      |> ei.imports_output_lines_for_symbols(imports_lookup),
    on_error: fn(s) { Error(UnknownComponentError(s, ins(fr.classifier))) },
  )

  let lines =
    list.flatten([
      component_imports,
      [
        OutputLine(
          blame_us("toc_emitter"),
          0,
          "import useNoScrollRestoration from \"~/hooks/useNoScrollRestoration\";",
        ),
        OutputLine(blame_us("toc_emitter"), 0, ""),
        OutputLine(
          blame_us("toc_emitter"),
          0,
          "export default function __Home__() {",
        ),
        OutputLine(blame_us("toc_emitter"), 2, "useNoScrollRestoration();"),
        OutputLine(blame_us("toc_emitter"), 2, "return ("),
      ],
      vxml.vxml_to_jsx_output_lines(fr.payload, 4, 2),
      [
        OutputLine(blame_us("toc_emitter"), 2, ");"),
        OutputLine(blame_us("toc_emitter"), 0, "};"),
        OutputLine(blame_us("toc_emitter"), 0, ""),
      ],
    ])

  Ok(ds.OutputFragment(..fr, payload: lines))
}

fn standard_component_emitter(
  fr: LBPFragment(VXML),
  imports_lookup: Dict(String, ei.ImportSource),
  component_name: String,
) -> Result(LBPFragment(BL), LBPEmitterError) {
  use component_imports <- on.error_ok(
    fr.payload
      |> ei.uppercase_tags_in_children
      |> ei.imports_output_lines_for_symbols(imports_lookup),
    on_error: fn(s) { Error(UnknownComponentError(s, ins(fr.classifier))) },
  )

  let lines =
    list.flatten([
      component_imports,
      [
        OutputLine(blame_us("standard_component_emitter"), 0, ""),
        OutputLine(
          blame_us("standard_component_emitter"),
          0,
          "const " <> component_name <> " = () => {",
        ),
        OutputLine(blame_us("standard_component_emitter"), 2, "return <>"),
      ],
      vxml.vxmls_to_jsx_output_lines(fr.payload |> core.v_get_children, 4, 2),
      [
        OutputLine(blame_us("standard_component_emitter"), 2, "</>;"),
        OutputLine(blame_us("standard_component_emitter"), 0, "};"),
        OutputLine(blame_us("standard_component_emitter"), 0, ""),
        OutputLine(
          blame_us("standard_component_emitter"),
          0,
          "export default " <> component_name <> ";",
        ),
      ],
    ])

  Ok(ds.OutputFragment(..fr, payload: lines))
}

fn our_emitter(
  fragment: LBPFragment(VXML),
  imports_lookup: Dict(String, ei.ImportSource),
) -> Result(LBPFragment(BL), LBPEmitterError) {
  case fragment.classifier {
    Article(_) -> article_emitter(fragment, imports_lookup)
    TOC -> toc_emitter(fragment, imports_lookup)
    HamburgerPanelAuthorSuppliedContents ->
      standard_component_emitter(
        fragment,
        imports_lookup,
        "HamburgerPanelAuthorSuppliedContents",
      )
    HeaderBlob ->
      standard_component_emitter(fragment, imports_lookup, "HeaderBlob")
  }
}

const remove_unused_build_img_option = "--clean"

const author_mode = "--local"

fn cli_usage_supplementary() -> String {
  let margin = string.repeat(" ", ds.help_message_margin)
  [
    margin <> author_mode,
    margin <> "  -> generate author-facing version with source-linking tooltips",
    "",
    margin <> remove_unused_build_img_option,
    margin <> "  -> remove unused images from image-map and build-img directory",
    "",
    margin <> "--last-command",
    margin <> "  -> run the same arguments as the previous command (from local",
    margin <> "     .last-command file)",
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

  let #(args, use_last_command) = case list.contains(args, "--last-command") {
    True -> {
      let args = list.filter(args, fn(s) { s != "--last-command" })
      #(args, True)
    }
    False -> #(args, False)
  }

  assert !list.contains(args, "--last-command")

  let args = case use_last_command {
    True ->
      case simplifile.read(".last-command") {
        Ok(contents) -> {
          string.split(contents, " ")
          |> list.map(string.trim)
          |> list.filter(fn(s) { !string.is_empty(s) })
          |> list.append(args)
        }
        Error(_) -> {
          panic as "unable to find '.last-command'"
        }
      }
    False -> args
  }

  let args_string = string.join(args, " ")

  let #(args, echo_args) = case list.contains(args, "--echo-args") {
    True -> {
      let args = list.filter(args, fn(s) { s != "--echo-args" })
      #(args, True)
    }
    False -> #(args, False)
  }

  let #(args, help_requested) =
    ds.handle_help_requests(args, cli_usage_supplementary)
  use _ <- on.stay(case help_requested {
    True -> on.Return(Nil)
    False -> on.Stay(Nil)
  })

  use #(args, maintenance_requested) <- on.error_ok(
    ds.handle_maintenance_requests(args, local_desugarers.assertive_tests),
    fn(error) {
      io.println("maintenance error: " <> error)
      io.println("")
    },
  )
  use _ <- on.stay(case maintenance_requested {
    True -> on.Return(Nil)
    False -> on.Stay(Nil)
  })

  use amendments <- on.error_ok(
    ds.process_command_line_arguments(args, [
      remove_unused_build_img_option,
      author_mode,
    ]),
    fn(error) {
      io.println("command line error: " <> ins(error))
      io.println("")
      ds.basic_cli_usage("'gleam run' command line options (basic):")
      cli_usage_supplementary() |> io.print
      io.println("")
    },
  )

  let exports_dict = ei.lbp_exports_dictionary()
  let imports_lookup = ei.imports_lookup_dictionary_from_exports(exports_dict)
  let only = amendments.only_key_vals != [] || amendments.only_paths != []
  let output_dir = "../src"

  let _ = Some(1)
  let _ = None

  let parameters =
    ds.RendererParameters(
      input_dir: "../src/content",
      output_dir: output_dir,
      prettifier_behavior: ds.PrettifierOff,
    )
    |> ds.amend_renderer_parameters_by_command_line_amendments(amendments)

  let options =
    ds.RendererOptions(
      ..ds.vanilla_options(),
      verbose: False,
      artifacts: True,
      profiling_table: None,
      output_lines_table_default_blame_columns: 50,
      output_lines_table_default_comment_columns: 0,
    )
    |> ds.amend_renderer_options_by_command_line_amendments(amendments)

  let renderer =
    ds.Renderer(
      assembler: wd.default_writerly_assembler(_, options),
      parser: wd.default_writerly_parser,
      filterer: ds.default_filterer(_, options, [
        "In",
        "HeaderBlob",
        "ChapterSelection",
      ]),
      pipeline: our_pipeline(
        only,
        dict.has_key(amendments.user_args, remove_unused_build_img_option),
        dict.has_key(amendments.user_args, author_mode),
      ),
      splitter: our_splitter,
      emitter: our_emitter(_, imports_lookup),
      writer: ds.default_writer,
      prettifier: ds.default_prettier_prettifier,
    )
    |> ds.amend_renderer_by_command_line_amendments(amendments)

  // computation of 'existing_artifacts'
  let article_dir = output_dir <> "/routes/article"
  let article_paths = case simplifile.read_directory(article_dir) {
    Ok(files) -> list.map(files, fn(f) { article_dir <> "/" <> f })
    _ -> panic
  }
  let constant_paths =
    [
      output_dir <> "/routes/index.tsx",
      output_dir <> "/components/HamburgerPanelAuthorSuppliedContents.tsx",
      output_dir <> "/components/HeaderBlob.tsx",
    ]
    |> list.filter(fn(f) {
      case simplifile.is_file(f) {
        Ok(value) -> value
        Error(_) -> panic
      }
    })
  let previously_existing_artifacts =
    article_paths |> list.append(constant_paths)

  // actual running of renderer
  use artifacts_printed_this_run <- on.error_ok(
    ds.run_renderer(renderer, parameters, options),
    fn(_) {
      io.println("")
      io.println(
        "[error running <" <> "gleam run -- " <> string.join(args, " ") <> ">]",
      )
      io.println("")
    },
  )

  let artifacts_printed_this_run =
    list.map(artifacts_printed_this_run, fn(p) { output_dir <> "/" <> p })

  // compute defunct_artifacts, newbie_artifacts
  let defunct_artifacts =
    previously_existing_artifacts
    |> list.filter(fn(z) { !list.contains(artifacts_printed_this_run, z) })

  let newbie_artifacts =
    artifacts_printed_this_run
    |> list.filter(fn(z) { !list.contains(previously_existing_artifacts, z) })

  // delete defunct artifacts & announce deletion
  case defunct_artifacts {
    [] -> Nil
    _ -> io.println("")
  }
  list.each(defunct_artifacts, fn(path) {
    case simplifile.delete(path) {
      Ok(_) -> io.println("deleted " <> path)
      Error(_) -> panic
    }
  })

  // announce creation of newly created artifacts
  case newbie_artifacts {
    [] -> Nil
    _ -> io.println("")
  }
  list.each(newbie_artifacts, fn(path) { io.println("created " <> path) })

  // echo cli args, if was requested:
  case echo_args {
    False -> Nil
    True -> {
      io.println("")
      io.print("end <gleam run -- " <> args_string <> ">")
      io.println("")
    }
  }

  case simplifile.write(".last-command", args_string) {
    Ok(_) -> Nil
    _ -> io.println("Warning: unable to write args_string to .last-command")
  }
  io.println("")
}
