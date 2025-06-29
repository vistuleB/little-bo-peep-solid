import simplifile
import shellout
import argv
import blamedlines.{type Blame, type BlamedLine, Blame, BlamedLine}
import gleam/io
import gleam/list
import gleam/option.{Some}
import gleam/string
import gleam/dict
import infrastructure as infra
import pipeline
import vxml.{type VXML, BlamedAttribute, V}
import vxml_renderer as vr
import writerly as wp
import gleam/otp/actor.{stop}

const ins = string.inspect

type FragmentType {
  Article(String)
  TOC
  HamburgerPanelAuthorSuppliedContents
}

type LBPSplitterError {
  NoTOC
  MoreThanOneTOC
  NoHamburgerPanelAuthorSuppliedContents
  MoreThanOneHamburgerPanelAuthorSuppliedContents
}

type LBPEmitterError {
  NumberAttributeAlreadyExists(FragmentType, Int)
}

fn blame_us(message: String) -> Blame {
  Blame(message, -1, -1, [])
}

fn our_splitter(
  root: VXML,
) -> Result(List(#(String, VXML, FragmentType)), LBPSplitterError) {
  let articles = infra.children_with_tags(root, ["Chapter", "Bootcamp"])
  use toc_vxml <- infra.on_error_on_ok(
    infra.unique_child_with_tag(root, "TOC"),
    with_on_error: fn(error) {
      case error {
        infra.LessThanOne -> Error(NoTOC)
        infra.MoreThanOne -> Error(MoreThanOneTOC)
      }
    },
  )

  use panel_vxml <- infra.on_error_on_ok(
    infra.unique_child_with_tag(root, "HamburgerPanelAuthorSuppliedContents"),
    with_on_error: fn(error) {
      case error {
        infra.LessThanOne -> Error(NoHamburgerPanelAuthorSuppliedContents)
        infra.MoreThanOne -> Error(MoreThanOneHamburgerPanelAuthorSuppliedContents)
      }
    },
  )

  Ok(
    list.flatten([
      [
        #("routes/index.tsx", toc_vxml, TOC),
        #("components/HamburgerPanelAuthorSuppliedContents.tsx", panel_vxml, HamburgerPanelAuthorSuppliedContents),
      ],
      list.map(
        articles,
        fn(c) {
          let #(c, path) = infra.assert_pop_attribute_value(c, "path")
          let #(c, number) = infra.assert_pop_attribute_value(c, "number")
          let #(c, category) = infra.assert_pop_attribute_value(c, "category")
          let c = infra.set_tag(c, "Article")
          #("routes" <> path <> ".tsx", c, Article("__" <> category <> number <> "__"))
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

// splitting chapter vxmls for performance
fn split_vxmls_to_first_section_and_rest(vxml: VXML) -> #(VXML, List(VXML)) {
  let assert V(b, t, a, children) = vxml
  let #(before_rest, rest) = up_to_and_including_first_section([], children)
  let rest_tag = V(blame_us("rest tag"), "Rest", [], [])
  #(V(b, t, a, [rest_tag, ..before_rest] |> list.reverse), rest)
}

fn article_emitter(
  path: String,
  fragment: VXML,
  fragment_type: FragmentType,
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {

  let #(first_split, rest) = split_vxmls_to_first_section_and_rest(fragment)
  let assert Article(payload) = fragment_type

  let lines =
    list.flatten([
      [
        BlamedLine(blame_us("article_emitter"), 0, "import Article from \"~/components/Article\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import { Section, Note, SolutionNote, Example, NoBreak, Pause } from \"~/components/Wrappers\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import { CentralDisplay, CentralDisplayItalic } from \"~/components/Delimiters\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import TextParent from \"~/components/TextParent\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import { Math, MathBlock } from \"~/components/Math\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import { ImageRight, ImageLeft } from \"~/components/SideImage\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import Image from \"~/components/Image\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import InlineImage from \"~/components/InlineImage\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import { Exercise, Exercises, ExerciseStatement } from \"~/components/Exercises\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import InChapterLink from \"~/components/InChapterLink\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import Solution from \"~/components/Solution\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import Table from \"~/components/Table\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import Grid from \"~/components/Grid\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import { List, Item } from \"~/components/List\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import { SectionDivider } from \"~/components/SectionDivider\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import { StarDivider } from \"~/components/StarDivider\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import VerticalChunk from \"~/components/VerticalChunk\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import SectionsBreadcrumbs, { BreadcrumbItem } from \"~/components/SectionsBreadcrumbs\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import useShowMore from \"~/hooks/useShowMore\";"),
        BlamedLine(blame_us("article_emitter"), 0, "import ArticleTitle from \"~/components/ArticleTitle\";"),

        BlamedLine(blame_us("article_emitter"), 0, ""),
        BlamedLine(
          blame_us("article_emitter"),
          0,
          "export default function " <> payload <> "() {",
        ),
        BlamedLine(blame_us("article_emitter"), 2, "return <>"),
      ],
      vxml.vxml_to_jsx_blamed_lines(first_split, 4),
      // first section loads immediatly
      [
        BlamedLine(blame_us("article_emitter"), 2, "</>"),
        BlamedLine(blame_us("article_emitter"), 0, "}"),
        BlamedLine(blame_us("article_emitter"), 0, ""),
        BlamedLine(blame_us("article_emitter"), 0, "const Rest = () => {"),
        BlamedLine(blame_us("article_emitter"), 2, "const showMore = useShowMore();"),
        BlamedLine(blame_us("article_emitter"), 2, "return(<>"),
        BlamedLine(blame_us("article_emitter"), 4, "{ showMore() && <>"),
      ],
      vxml.vxmls_to_jsx_blamed_lines(rest, 6),
      // first section loads immediatly
      [
        BlamedLine(blame_us("article_emitter"), 0, "</> }"),
        BlamedLine(blame_us("article_emitter"), 0, "</>);"),
        BlamedLine(blame_us("article_emitter"), 0, "};"),
        BlamedLine(blame_us("article_emitter"), 0, ""),
      ],
    ])

  Ok(#(path, lines, fragment_type))
}

fn toc_emitter(
  path: String,
  fragment: VXML,
  fragment_type: FragmentType,
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let lines =
    list.flatten([
      [
        BlamedLine(blame_us("toc_emitter"), 0, "import TOC from \"~/components/TOC\";"),
        BlamedLine(blame_us("toc_emitter"), 0, "import TOCTitle from \"~/components/TOCTitle\";"),
        BlamedLine(blame_us("toc_emitter"), 0, "import TOCItem from \"~/components/TOCItem\";"),
        BlamedLine(blame_us("toc_emitter"), 0, "import { Spacer } from \"~/components/Spacer\";"),
        BlamedLine(blame_us("toc_emitter"), 0, ""),
        BlamedLine(blame_us("toc_emitter"), 0, "export default function __Home__() {"),
        BlamedLine(blame_us("toc_emitter"), 2, "return ("),
      ],
      vxml.vxml_to_jsx_blamed_lines(fragment , 4),
      [
        BlamedLine(blame_us("toc_emitter"), 2, ");"),
        BlamedLine(blame_us("toc_emitter"), 0, "};"),
        BlamedLine(blame_us("toc_emitter"), 0, ""),
      ],
    ])

  Ok(#(path, lines, fragment_type))
}

fn hpausc_emitter(
  path: String,
  fragment: VXML,
  fragment_type: FragmentType,
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let lines =
    list.flatten([
      [
        BlamedLine(blame_us("hpausc_emitter"), 0, "import HamburgerPanelTitle from \"./HamburgerPanelTitle\";"),
        BlamedLine(blame_us("hpausc_emitter"), 0, "import HamburgerPanelItem from \"./HamburgerPanelItem\";"),
        BlamedLine(blame_us("hpausc_emitter"), 0, ""),
        BlamedLine(blame_us("hpausc_emitter"), 0, "const HamburgerPanelAuthorSuppliedContents = () => {"),
        BlamedLine(blame_us("hpausc_emitter"), 2, "return ("),
        BlamedLine(blame_us("hpausc_emitter"), 4, "<>"),
      ],
      vxml.vxmls_to_jsx_blamed_lines(fragment |> infra.get_children, 6),
      [
        BlamedLine(blame_us("hpausc_emitter"), 4, "</>"),
        BlamedLine(blame_us("hpausc_emitter"), 2, ");"),
        BlamedLine(blame_us("hpausc_emitter"), 0, "};"),
        BlamedLine(blame_us("hpausc_emitter"), 0, ""),
        BlamedLine(blame_us("hpausc_emitter"), 0, "export default HamburgerPanelAuthorSuppliedContents;"),
      ],
    ])

  Ok(#(path, lines, fragment_type))
}

fn our_emitter(
  fragment: #(String, VXML, FragmentType),
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let #(path, vxml, fragment_type) = fragment
  case fragment_type {
    Article(_) ->
      article_emitter(path, vxml, fragment_type)
    TOC -> toc_emitter(path, vxml, fragment_type)
    HamburgerPanelAuthorSuppliedContents -> hpausc_emitter(path, vxml, fragment_type)
  }
}

fn cli_usage_supplementary() {
  io.println("      --prettier")
  io.println("         -> run npm prettier on emitted content")
}

const input_dir = "../src/content"
const output_dir = "../src"

fn rename_files(from_ext: String, to_ext: String, dir: String) -> Nil {
  use dir_children <- infra.on_error_on_ok(simplifile.read_directory(dir), fn(error) {
    io.println("error reading directory" <> ins(error))
    Nil
  })

  dir_children
  |> list.each(fn(child) {
    let child = dir <> "/" <> child
    case simplifile.is_file(child) {
      Ok(True) -> {
        let _ = shellout.command(
          run: "git",
          in: ".",
          with: ["mv", child, child |> string.replace(from_ext, to_ext)],
          opt: [],
        )
        io.println("Renamed " <> child <> " to " <> child |> string.replace(from_ext, to_ext))
      }
      Ok(False) -> rename_files(from_ext, to_ext, child)
      Error(_) -> Nil
    }
  })
}

fn delete_files(ext: String,  dir: String) -> Nil {
  use dir_children <- infra.on_error_on_ok(simplifile.read_directory(dir), fn(error) {
    io.println("error reading directory" <> ins(error))
    Nil
  })

  dir_children
  |> list.each(fn(child) {
    let child = dir <> "/" <> child

    case simplifile.is_file(child), string.ends_with(child, ext) {
      Ok(True), True -> {
        let _ = shellout.command(
          run: "git",
          in: ".",
          with: ["rm", "-f", "--cached", child],
          opt: [],
        )
        let _ = shellout.command(
          run: "rm",
          in: ".",
          with: [child],
          opt: [],
        )
        io.println("Deleted " <> child)
      }
      Ok(False), _ -> delete_files(ext, child)
      _, _ -> Nil
    }
  })
}

pub fn main() {
  use amendments <- infra.on_error_on_ok(
    vr.process_command_line_arguments(argv.load().arguments, ["--prettier", "--emu-to-wly", "--wly-to-emu", "--delete-wly", "--delete-emu"]),
    fn(error) {
      io.println("")
      io.println("command line error: " <> ins(error))
      io.println("")
      vr.cli_usage()
      cli_usage_supplementary()
    },
  )

  use _ <- infra.on_error_on_ok(
    dict.get(amendments.user_args, "--emu-to-wly"),
    with_on_ok: fn(_) {
      rename_files(".emu", ".wly", input_dir)
      let _ = stop()
      Nil
    },
  )

  use _ <- infra.on_error_on_ok(
    dict.get(amendments.user_args, "--wly-to-emu"),
    with_on_ok: fn(_) {
      rename_files(".wly", ".emu", input_dir)
      let _ = stop()
      Nil
    },
  )

    use _ <- infra.on_error_on_ok(
    dict.get(amendments.user_args, "--delete-wly"),
    with_on_ok: fn(_) {
      delete_files(".wly", input_dir)
      let _ = stop()
      Nil
    },
  )

  use _ <- infra.on_error_on_ok(
    dict.get(amendments.user_args, "--delete-emu"),
    with_on_ok: fn(_) {
      delete_files(".emu", input_dir)
      let _ = stop()
      Nil
    },
  )

  let renderer =
    vr.Renderer(
      assembler: wp.assemble_blamed_lines_advanced_mode(
        _,
        amendments.spotlight_args_files,
      ),
      source_parser: vr.default_writerly_source_parser(
        _,
        amendments.spotlight_args,
      ),
      pipeline: pipeline.lbp_pipeline(),
      splitter: our_splitter,
      emitter: our_emitter,
      prettifier: vr.guarded_prettier_prettifier(amendments.user_args),
    )

  let parameters =
    vr.RendererParameters(
      input_dir: input_dir,
      output_dir: Some(output_dir),
    )
    |> vr.amend_renderer_paramaters_by_command_line_amendment(amendments)

  let debug_options =
    vr.empty_renderer_debug_options("../renderer_artifacts")
    |> vr.amend_renderer_debug_options_by_command_line_amendment(
      amendments,
      renderer.pipeline,
    )

  let _ = shellout.command(
    run: "rm",
    in: ".",
    with: [
      output_dir <> "/article/*",
      output_dir <> "/components/index.tsx",
      output_dir <> "/components/HamburgerPanelAuthorSuppliedContents.tsx"
    ],
    opt: [],
  )

  case vr.run_renderer(renderer, parameters, debug_options) {
    Ok(Nil) -> Nil
    Error(error) -> io.println("\nrenderer error: " <> ins(error) <> "\n")
  }
}
