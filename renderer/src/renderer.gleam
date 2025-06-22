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
  Chapter(Int)
  Bootcamp(Int)
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

fn lbp_splitter(
  root: VXML,
) -> Result(List(#(String, VXML, FragmentType)), LBPSplitterError) {
  let chapter_vxmls = infra.children_with_tag(root, "Chapter")
  let bootcamp_vxmls = infra.children_with_tag(root, "Bootcamp")
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
      list.index_map(chapter_vxmls, fn(c, index) {
        #("routes/article/chapter" <> ins(index + 1) <> ".tsx", c, Chapter(index + 1))
      }),
      list.index_map(bootcamp_vxmls, fn(c, index) {
        #("routes/article/bootcamp" <> ins(index + 1) <> ".tsx", c, Bootcamp(index + 1))
      }),
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

fn lbp_chapter_bootcamp_common_emitter(
  path: String,
  fragment: VXML,
  fragment_type: FragmentType,
  number: Int,
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let number_attribute =
    BlamedAttribute(blame_us("lbp_fragment_emitterL65"), "number", ins(number))

  use fragment <- infra.on_error_on_ok(
    over: infra.prepend_unique_key_attribute(fragment, number_attribute),
    with_on_error: fn(_) {
      Error(NumberAttributeAlreadyExists(fragment_type, number))
    },
  )

  let #(first_split, rest) = split_vxmls_to_first_section_and_rest(fragment)

  let lines =
    list.flatten([
      [
        case fragment_type {
          Chapter(_) ->
            BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Chapter from \"~/components/Chapter\";")
          Bootcamp(_) ->
            BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Bootcamp from \"~/components/Bootcamp\";")
          _ -> panic as "bad fragment_type"
        },
      ],
      [
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { Section, Note, SolutionNote, Example, NoBreak, Pause, WriterlyBlankLine } from \"~/components/Wrappers\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { CentralDisplay, CentralDisplayItalic } from \"~/components/Delimiters\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import TextParent from \"~/components/TextParent\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { Math, MathBlock } from \"~/components/Math\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { ImageRight, ImageLeft } from \"~/components/SideImage\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Image from \"~/components/Image\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import InlineImage from \"~/components/InlineImage\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { Exercise, Exercises, ExerciseStatement } from \"~/components/Exercises\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import InChapterLink from \"~/components/InChapterLink\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Solution from \"~/components/Solution\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Table from \"~/components/Table\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import Grid from \"~/components/Grid\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { List, Item } from \"~/components/List\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { SectionDivider } from \"~/components/SectionDivider\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import { StarDivider } from \"~/components/StarDivider\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import VerticalChunk from \"~/components/VerticalChunk\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import SectionsBreadcrumbs, { BreadcrumbItem } from \"~/components/SectionsBreadcrumbs\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import useSetRoute from \"~/hooks/useSetRoute\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import useShowMore from \"~/hooks/useShowMore\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "import useBreadcrumbs from \"~/hooks/useBreadcrumbs\";"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, ""),
        BlamedLine(
          blame_us("lbp_fragment_emitter"),
          0,
          "const Article = () => {",
        ),
        BlamedLine(blame_us("lbp_fragment_emitter"), 2, "useSetRoute();"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 2, "useBreadcrumbs();"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 2, "return (<>"),
      ],
      vxml.vxml_to_jsx_blamed_lines(first_split, 4),
      // first section loads immediatly
      [
        BlamedLine(blame_us("lbp_fragment_emitter"), 2, "</>);"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "};"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, ""),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "const Rest = () => {"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 2, "const showMore = useShowMore();"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 2, "return(<>"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 4, "{ showMore() && <>"),
      ],
      vxml.vxmls_to_jsx_blamed_lines(rest, 6),
      // first section loads immediatly
      [
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "</> }"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "</>);"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "};"),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, ""),
        BlamedLine(blame_us("lbp_fragment_emitter"), 0, "export default Article;"),
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
        BlamedLine(blame_us("toc_emitter"), 0, "export default function Home() {"),
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

fn panel_emitter(
  path: String,
  fragment: VXML,
  fragment_type: FragmentType,
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let lines =
    list.flatten([
      [
        BlamedLine(blame_us("panel_emitter"), 0, "import HamburgerPanelTitle from \"./HamburgerPanelTitle\";"),
        BlamedLine(blame_us("panel_emitter"), 0, "import HamburgerPanelItem from \"./HamburgerPanelItem\";"),
        BlamedLine(blame_us("panel_emitter"), 0, ""),
        BlamedLine(blame_us("panel_emitter"), 0, "const HamburgerPanelAuthorSuppliedContents = () => {"),
        BlamedLine(blame_us("panel_emitter"), 2, "return ("),
        BlamedLine(blame_us("panel_emitter"), 4, "<>"),
      ],
      vxml.vxmls_to_jsx_blamed_lines(fragment |> infra.get_children, 6),
      [
        BlamedLine(blame_us("panel_emitter"), 4, "</>"),
        BlamedLine(blame_us("panel_emitter"), 2, ");"),
        BlamedLine(blame_us("panel_emitter"), 0, "};"),
        BlamedLine(blame_us("panel_emitter"), 0, ""),
        BlamedLine(blame_us("panel_emitter"), 0, "export default HamburgerPanelAuthorSuppliedContents;"),
      ],
    ])

  Ok(#(path, lines, fragment_type))
}

fn lbp_emitter(
  fragment: #(String, VXML, FragmentType),
) -> Result(#(String, List(BlamedLine), FragmentType), LBPEmitterError) {
  let #(path, vxml, fragment_type) = fragment
  case fragment_type {
    Chapter(n) ->
      lbp_chapter_bootcamp_common_emitter(path, vxml, fragment_type, n)
    Bootcamp(n) ->
      lbp_chapter_bootcamp_common_emitter(path, vxml, fragment_type, n)
    TOC -> toc_emitter(path, vxml, fragment_type)
    HamburgerPanelAuthorSuppliedContents -> panel_emitter(path, vxml, fragment_type)
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
      splitter: lbp_splitter,
      emitter: lbp_emitter,
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
