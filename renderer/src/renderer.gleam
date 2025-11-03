import argv
import blame.{type Blame, Src}
import desugaring as ds
import emitter_imports as ei
import gleam/io
import gleam/list
import gleam/string.{inspect as ins}
import gleam/dict.{type Dict}
import infrastructure as infra
import io_lines.{type OutputLine, OutputLine}
import on
import pipeline.{our_pipeline}
import shellout
import vxml.{type VXML, V}

type LBPFragmentClassifer {
  Article(String)
  TOC
  HamburgerPanelAuthorSuppliedContents
}

type LBPFragment(z) = ds.OutputFragment(LBPFragmentClassifer, z)
type BL = List(OutputLine)

type LBPSplitterError {
  NoTOC
  MoreThanOneTOC
  NoHamburgerPanelAuthorSuppliedContents
  MoreThanOneHamburgerPanelAuthorSuppliedContents
}

type LBPEmitterError {
  UnknownComponentError(
    component: String,
    classifier: String,
  )
}

fn blame_us(message: String) -> Blame {
  Src([], message, -1, -1, False)
}

fn our_splitter(
  root: VXML,
) -> Result(List(LBPFragment(VXML)), LBPSplitterError) {
  let articles = infra.v_children_with_tags(root, ["Chapter", "Bootcamp"])
  use toc_vxml <- on.error_ok(
    infra.v_unique_child_with_singleton_error(root, "TOC"),
    on_error: fn(error) {
      case error {
        infra.LessThanOne -> Error(NoTOC)
        infra.MoreThanOne -> Error(MoreThanOneTOC)
      }
    },
  )

  use panel_vxml <- on.error_ok(
    infra.v_unique_child_with_singleton_error(root, "HamburgerPanelAuthorSuppliedContents"),
    on_error: fn(error) {
      case error {
        infra.LessThanOne -> Error(NoHamburgerPanelAuthorSuppliedContents)
        infra.MoreThanOne -> Error(MoreThanOneHamburgerPanelAuthorSuppliedContents)
      }
    },
  )

  Ok(
    list.flatten([
      [
        ds.OutputFragment(TOC, "routes/index.tsx", toc_vxml),
        ds.OutputFragment(HamburgerPanelAuthorSuppliedContents, "components/HamburgerPanelAuthorSuppliedContents.tsx", panel_vxml),
      ],
      list.map(
        articles,
        fn(c) {
          let #(c, vxml.Attr(_,_,path)) = infra.v_assert_pop_attr(c, "path")
          let #(c, vxml.Attr(_, _, number)) = infra.v_assert_pop_attr(c, "number")
          let #(c, vxml.Attr(_,_,category)) = infra.v_assert_pop_attr(c, "category")
          let c = infra.v_set_tag(c, "Article")
          ds.OutputFragment(Article("__" <> category <> number <> "__"), "routes" <> path <> ".tsx", c)
        }
      ),
    ]),
  )
}

fn is_section(vxml: VXML) -> Bool {
  infra.is_v_and_tag_equals(vxml, "Section")
}

fn up_to_and_including_first_section(
  previous: List(VXML),
  upcoming: List(VXML)
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

fn split_vxml_to_first_section_and_rest(vxml: VXML) -> #(VXML, List(VXML)) {
  let assert V(b, t, a, children) = vxml
  let #(before_rest, rest) = up_to_and_including_first_section([], children)
  let rest_tag = V(blame_us("rest tag"), "Rest", [], [])
  #(V(b, t, a, [rest_tag, ..before_rest] |> list.reverse), rest)
}

fn article_emitter(
  fr: LBPFragment(VXML),
  imports_lookup: Dict(String, ei.ImportSource),
) -> Result(LBPFragment(BL), LBPEmitterError) {

  let #(first_split, rest) = split_vxml_to_first_section_and_rest(fr.payload)
  let assert Article(funcname) = fr.classifier

  use component_imports <- on.error_ok(
    fr.payload
    |> ei.uppercase_tags
    |> ei.imports_output_lines_for_symbols(imports_lookup),
    on_error: fn(s) {Error(UnknownComponentError(s, ins(fr.classifier)))},
  )

  let lines =
    list.flatten([
      component_imports,
      [
        OutputLine(blame_us("article_emitter"), 0, "import useShowMore from \"~/hooks/useShowMore\";"),
        OutputLine(blame_us("article_emitter"), 0, ""),
        OutputLine(blame_us("article_emitter"), 0, "export default function " <> funcname <> "() {"),
        OutputLine(blame_us("article_emitter"), 2, "return ("),
      ],
      vxml.vxml_to_jsx_output_lines(first_split, 4, 2),
      [
        OutputLine(blame_us("article_emitter"), 2, ");"),
        OutputLine(blame_us("article_emitter"), 0, "}"),
        OutputLine(blame_us("article_emitter"), 0, ""),
        OutputLine(blame_us("article_emitter"), 0, "const Rest = () => {"),
        OutputLine(blame_us("article_emitter"), 2, "const showMore = useShowMore();"),
        OutputLine(blame_us("article_emitter"), 2, "return <>"),
        OutputLine(blame_us("article_emitter"), 4, "{showMore() && <>"),
      ],
      vxml.vxmls_to_jsx_output_lines(rest, 6, 2),
      [
        OutputLine(blame_us("article_emitter"), 4, "</>}"),
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
    on_error: fn(s) {Error(UnknownComponentError(s, ins(fr.classifier)))},
  )

  let lines =
    list.flatten([
      component_imports,
      [
        OutputLine(blame_us("toc_emitter"), 0, ""),
        OutputLine(blame_us("toc_emitter"), 0, "export default function __Home__() {"),
        OutputLine(blame_us("toc_emitter"), 2, "return ("),
      ],
      vxml.vxml_to_jsx_output_lines(fr.payload , 4, 2),
      [
        OutputLine(blame_us("toc_emitter"), 2, ");"),
        OutputLine(blame_us("toc_emitter"), 0, "};"),
        OutputLine(blame_us("toc_emitter"), 0, ""),
      ],
    ])

  Ok(ds.OutputFragment(..fr, payload: lines))
}

fn hpausc_emitter(
  fr: LBPFragment(VXML),
  imports_lookup: Dict(String, ei.ImportSource),
) -> Result(LBPFragment(BL), LBPEmitterError) {
  use component_imports <- on.error_ok(
    fr.payload
    |> ei.uppercase_tags_in_children
    |> ei.imports_output_lines_for_symbols(imports_lookup),
    on_error: fn(s) {Error(UnknownComponentError(s, ins(fr.classifier)))},
  )

  let lines =
    list.flatten([
      component_imports,
      [
        OutputLine(blame_us("hpausc_emitter"), 0, ""),
        OutputLine(blame_us("hpausc_emitter"), 0, "const HamburgerPanelAuthorSuppliedContents = () => {"),
        OutputLine(blame_us("hpausc_emitter"), 2, "return <>"),
      ],
      vxml.vxmls_to_jsx_output_lines(fr.payload |> infra.v_get_children, 4, 2),
      [
        OutputLine(blame_us("hpausc_emitter"), 2, "</>;"),
        OutputLine(blame_us("hpausc_emitter"), 0, "};"),
        OutputLine(blame_us("hpausc_emitter"), 0, ""),
        OutputLine(blame_us("hpausc_emitter"), 0, "export default HamburgerPanelAuthorSuppliedContents;"),
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
    HamburgerPanelAuthorSuppliedContents -> hpausc_emitter(fragment, imports_lookup)
  }
}

fn cli_usage_supplementary() {
  Nil
}

pub fn main() {
  use amendments <- on.error_ok(
    ds.process_command_line_arguments(argv.load().arguments, []),
    fn(error) {
      io.println("")
      io.println("command line error: " <> ins(error))
      ds.basic_cli_usage("\nCommand line options (basic):")
      cli_usage_supplementary()
    },
  )

  use <- on.lazy_true_false(
    amendments.help,
    fn() { io.println("(exiting on '--help' option)") },
  )

  let exports_dict = ei.lbp_exports_dictionary()
  let imports_lookup = ei.imports_lookup_dictionary_from_exports(exports_dict)

  let renderer =
    ds.Renderer(
      assembler: ds.default_assembler(amendments.only_paths),
      parser: ds.default_writerly_parser(amendments.only_key_values),
      pipeline: our_pipeline(),
      splitter: our_splitter,
      emitter: our_emitter(_, imports_lookup),
      writer: ds.default_writer,
      prettifier: ds.default_prettier_prettifier,
    )
    |> ds.amend_renderer_by_command_line_amendments(amendments)

  let output_dir = "../src"

  let parameters =
    ds.RendererParameters(
      input_dir: "../src/content",
      output_dir: output_dir,
      prettifier_behavior: ds.PrettifierOff,
      table: False,
      verbose: True,
      warnings: True,
    )
    |> ds.amend_renderer_paramaters_by_command_line_amendments(amendments)

  let debug_options =
    ds.default_renderer_debug_options()
    |> ds.amend_renderer_debug_options_by_command_line_amendments(amendments)

  let _ = shellout.command(
    run: "rm",
    in: ".",
    with: [
      output_dir <> "/article/*",
      output_dir <> "/components/index.tsx",
      output_dir <> "/components/HamburgerPanelAuthorSuppliedContents.tsx",
    ],
    opt: [],
  )

  let _ = ds.run_renderer(renderer, parameters, debug_options)

  Nil
}
