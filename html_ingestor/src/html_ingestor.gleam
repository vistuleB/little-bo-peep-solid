import desugarers/fold_tags_into_text.{fold_tags_into_text}
import desugarers/concatenate_text_nodes.{concatenate_text_nodes}
import desugarers/unwrap_tags_if_attributes_match.{unwrap_tags_if_attributes_match}
import desugarers/unwrap_tag_when_parent_of_tag.{unwrap_tag_when_parent_of_tag}
import desugarers/merge_parent_attributes_into_child.{merge_parent_attributes_into_child}
import desugarers/rename_when_child_of.{rename_when_child_of}
import desugarers/keep_only_subtrees_and_ancestors_of_nodes_matching_a_key_value_pair.{keep_only_subtrees_and_ancestors_of_nodes_matching_a_key_value_pair}
import desugarers/surround_elements_by.{surround_elements_by}
import desugarers/replace_in_attribute_values.{replace_in_attribute_values}
import desugarers/unwrap_tags.{unwrap_tags}
import desugarers/concatenate_tags.{concatenate_tags}
import simplifile
import argv
import gleam/result
import gleam/pair
import gleam/list
import gleam/option.{Some}
import gleam/io
import vxml_parser.{type VXML, V} as vp
import vxml_renderer as vr
import writerly_parser as wp
import blamedlines as bl
import gleam/string.{inspect as ins}
import infrastructure as infra

import desugarers/remove_empty_lines.{remove_empty_lines}
import desugarers/insert_bookend_text.{insert_bookend_text}
import desugarers/extract_starting_and_ending_spaces.{extract_starting_and_ending_spaces}

fn get_extension(path: String) -> #(String, String) {
  let assert Ok(#(reversed_extension, reversed_prefix)) =
    path
    |> string.reverse
    |> string.split_once(".")
  #(
    reversed_prefix |> string.reverse,
    reversed_extension |> string.reverse,
  )
}

fn replace_extension(path: String, expected_extensions: List(String), replacement: String) -> String {
  let #(path, ext) = get_extension(path)
  let assert True = list.contains(expected_extensions, ext)
  path <> replacement
}

fn quickprint_string(content: String) -> String {
  string.split(content, "\n")
  |> list.each(io.println)
  content
}

fn quickprint_vxml(vxml: VXML) -> VXML {
  vp.debug_print_vxml("quickprint", vxml)
  vxml
}

pub fn make_linter_shut_up() {
  quickprint_string("")
  quickprint_vxml(V(bl.empty_blame(), "", [], []))
}

pub fn main() {
  use amendments <- infra.on_error_on_ok(
    vr.process_command_line_arguments(argv.load().arguments, []),
    fn (error) {
      io.println("")
      io.println("command line error: " <> ins(error))
      io.println("")
      vr.cli_usage()
    }
  )

  let selectors = 
    amendments.assemble_blamed_lines_selector_args
    |> list.map(pair.second)
    |> list.flatten

  let renderer = vr.Renderer(
    assembler: fn (path) {
      case simplifile.read(path) {
        Error(error) -> {
          io.println("couldn't read file at " <> path)
          Error(error)
        }
        Ok(content) -> {
          bl.string_to_blamed_lines(content, path)
          |> Ok
        }
      }
    },
    source_parser: fn(lines) {
      let path = bl.first_blame_filename(lines) |> result.unwrap("")
      bl.blamed_lines_to_string(lines)
      |> vp.xmlm_based_html_parser(path)
    },
    parsed_source_converter: fn(vxml) {
      [vxml]
    },
    pipeline: [
      // 1.
      keep_only_subtrees_and_ancestors_of_nodes_matching_a_key_value_pair(selectors),
      // 2.
      remove_empty_lines(),
      // 3.
      replace_in_attribute_values([#("ch5figs", "images")]),
      // 4.
      surround_elements_by(#(["p"], "WriterlyBlankLine", "WriterlyBlankLine")),
      // 5.
      rename_when_child_of([#("img", "Image", "center")]),
      // 6.
      merge_parent_attributes_into_child([#("center", "Image")]),
      // 7.
      unwrap_tag_when_parent_of_tag([#("center", "Image")]),
      // 8.
      unwrap_tags(["p"]),
      // 9.
      concatenate_tags(["WriterlyBlankLine"]),
      // 10.
      extract_starting_and_ending_spaces(["i", "b", "strong", "em"]),
      // 11.
      insert_bookend_text([
        #("i", "_", "_"),
        #("b", "*", "*"),
      ]),
      // 12.
      surround_elements_by(#(["i", "b"], "go23_xU", "go23_xU")),
      // 13.
      unwrap_tags(["i", "b"]),
      // 14.
      fold_tags_into_text([#("go23_xU", "")]),
      // 15.
      unwrap_tags_if_attributes_match([#("span", [#("class", "nobreak")])]),
      // 16.
      concatenate_text_nodes(),
    ],
    splitter: fn(vxml) {
      let input = io.debug(infra.get_blame(vxml).filename)
      let output = io.debug(replace_extension(input, ["html", "xml"], ".emu"))
      Ok([#(output, vxml, Nil)])
    },
    emitter: fn(triple) { 
      let #(path, vxml, _) = triple
      Ok(#(
        path,
        wp.vxmls_to_writerlys([vxml])
        |> wp.writerlys_to_blamed_lines,
        Nil
      ))
    },
    prettifier: fn(_, _, _) { Ok("nuthin") },
  )

  let parameters = vr.RendererParameters(
    input_dir: "test/ch5_ex.xml",
    output_dir: Some("."),
    prettifying_option: False,
  )
    |> vr.amend_renderer_paramaters_by_command_line_amendment(amendments)

  let debug_options = vr.empty_renderer_debug_options("renderer_artifacts")
    |> vr.amend_renderer_debug_options_by_command_line_amendment(amendments, renderer.pipeline)

  case vr.run_renderer(
    renderer,
    parameters,
    debug_options,
  ) {
    Ok(Nil) -> Nil
    Error(error) -> io.println("\nrenderer error: " <> ins(error) <> "\n")
  }
}
