import shellout
import argv
import blame.{type Blame, Src}
import io_lines.{type OutputLine, OutputLine}
import gleam/io
import gleam/list
import gleam/string.{inspect as ins}
import gleam/dict.{type Dict}
import infrastructure as infra
import pipeline.{our_pipeline}
import vxml.{type VXML, V}
import vxml_renderer as vr
import emitter_imports as ei
import on

type LBPFragmentClassifer {
  Article(String)
  TOC
  HamburgerPanelAuthorSuppliedContents
}

type LBPFragment(z) = vr.OutputFragment(LBPFragmentClassifer, z)
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
  Src([], message, -1, -1)
}

fn our_splitter(
  root: VXML,
) -> Result(List(LBPFragment(VXML)), LBPSplitterError) {
  let articles = infra.children_with_tags(root, ["Chapter", "Bootcamp"])
  use toc_vxml <- on.error_ok(
    infra.unique_child_with_tag(root, "TOC"),
    on_error: fn(error) {
      case error {
        infra.LessThanOne -> Error(NoTOC)
        infra.MoreThanOne -> Error(MoreThanOneTOC)
      }
    },
  )

  use panel_vxml <- on.error_ok(
    infra.unique_child_with_tag(root, "HamburgerPanelAuthorSuppliedContents"),
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
        vr.OutputFragment(TOC, "routes/index.tsx", toc_vxml),
        vr.OutputFragment(HamburgerPanelAuthorSuppliedContents, "components/HamburgerPanelAuthorSuppliedContents.tsx", panel_vxml),
      ],
      list.map(
        articles,
        fn(c) {
          let #(c, path) = infra.assert_pop_attribute_value(c, "path")
          let #(c, number) = infra.assert_pop_attribute_value(c, "number")
          let #(c, category) = infra.assert_pop_attribute_value(c, "category")
          let c = infra.set_tag(c, "Article")
          vr.OutputFragment(Article("__" <> category <> number <> "__"), "routes" <> path <> ".tsx", c)
        }
      ),
    ]),
  )
}

fn is_section(vxml: VXML) -> Bool {
  infra.is_tag(vxml, "Section")
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
      vxml.vxml_to_jsx_output_lines(first_split, 4),
      [
        OutputLine(blame_us("article_emitter"), 2, ");"),
        OutputLine(blame_us("article_emitter"), 0, "}"),
        OutputLine(blame_us("article_emitter"), 0, ""),
        OutputLine(blame_us("article_emitter"), 0, "const Rest = () => {"),
        OutputLine(blame_us("article_emitter"), 2, "const showMore = useShowMore();"),
        OutputLine(blame_us("article_emitter"), 2, "return <>"),
        OutputLine(blame_us("article_emitter"), 4, "{showMore() && <>"),
      ],
      vxml.vxmls_to_jsx_output_lines(rest, 6),
      [
        OutputLine(blame_us("article_emitter"), 4, "</>}"),
        OutputLine(blame_us("article_emitter"), 2, "</>;"),
        OutputLine(blame_us("article_emitter"), 0, "};"),
      ],
    ])

  Ok(vr.OutputFragment(..fr, payload: lines))
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
      vxml.vxml_to_jsx_output_lines(fr.payload , 4),
      [
        OutputLine(blame_us("toc_emitter"), 2, ");"),
        OutputLine(blame_us("toc_emitter"), 0, "};"),
        OutputLine(blame_us("toc_emitter"), 0, ""),
      ],
    ])

  Ok(vr.OutputFragment(..fr, payload: lines))
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
      vxml.vxmls_to_jsx_output_lines(fr.payload |> infra.get_children, 4),
      [
        OutputLine(blame_us("hpausc_emitter"), 2, "</>;"),
        OutputLine(blame_us("hpausc_emitter"), 0, "};"),
        OutputLine(blame_us("hpausc_emitter"), 0, ""),
        OutputLine(blame_us("hpausc_emitter"), 0, "export default HamburgerPanelAuthorSuppliedContents;"),
      ],
    ])

  Ok(vr.OutputFragment(..fr, payload: lines))
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

const input_dir = "../src/content"
const output_dir = "../src"

pub fn main() {
  use amendments <- on.error_ok(
    vr.process_command_line_arguments(argv.load().arguments, []),
    fn(error) {
      io.println("")
      io.println("command line error: " <> ins(error))
      vr.cli_usage()
      cli_usage_supplementary()
    },
  )

  use <- on.lazy_true_false(
    amendments.help,
    fn() {
      io.println("(exiting on '--help' option)")
    }
  )

  let exports_dict = ei.lbp_exports_dictionary()
  let imports_lookup = ei.imports_lookup_dictionary_from_exports(exports_dict)

  let renderer =
    vr.Renderer(
      assembler: vr.default_assembler(amendments.spotlight_paths),
      parser: vr.default_writerly_parser(amendments.spotlight_key_values),
      pipeline: our_pipeline(),
      splitter: our_splitter,
      emitter: our_emitter(_, imports_lookup),
      prettifier: vr.default_prettier_prettifier,
    )
    |> vr.amend_renderer_by_command_line_amendments(amendments)

  let parameters =
    vr.RendererParameters(
      table: False,
      input_dir: input_dir,
      output_dir: output_dir,
      prettifier_behavior: vr.PrettifierOff,
    )
    |> vr.amend_renderer_paramaters_by_command_line_amendments(amendments)

  let debug_options =
    vr.default_renderer_debug_options()
    |> vr.amend_renderer_debug_options_by_command_line_amendments(amendments)

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

  let _ = vr.run_renderer(renderer, parameters, debug_options)

  Nil
}
