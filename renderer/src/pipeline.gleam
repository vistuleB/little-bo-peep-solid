import desugarers/generate_handles_attributes.{generate_handles_attributes}
import desugarers/absorb_next_sibling_while.{absorb_next_sibling_while}
import desugarers/add_attribute_to_if_child_of_but_no_overwrites.{
  add_attribute_to_if_child_of_but_no_overwrites,
}
import desugarers/handles_generate_ids.{
  handles_generate_ids,
}
import desugarers/handles_generate_dictionary.{
  handles_generate_dictionary,
}
import desugarers/define_article_output_path.{
  define_article_output_path,
}
import desugarers/add_before_tags_but_not_first_child_tags.{
  add_before_tags_but_not_first_child_tags,
}
import desugarers/add_between_tag_and_text_node.{add_between_tag_and_text_node}
import desugarers/add_between_tags.{add_between_tags}
import desugarers/add_counter_attributes.{add_counter_attributes}
import desugarers/add_title_counters_and_titles_with_handle_assignments.{
  add_title_counters_and_titles_with_handle_assignments,
}
import desugarers/change_attribute_value.{change_attribute_value}
import desugarers/concatenate_text_nodes.{concatenate_text_nodes}
import desugarers/convert_int_attributes_to_float.{
  convert_int_attributes_to_float,
}
import desugarers/counters_substitute_and_assign_handles.{
  counters_substitute_and_assign_handles,
}
import desugarers/find_replace.{find_replace}
import desugarers/fold_tags_into_text.{fold_tags_into_text}
import desugarers/free_children.{free_children}
import desugarers/generate_lbp_links.{generate_lbp_links}
import desugarers/generate_lbp_table_of_contents.{generate_lbp_table_of_contents}
import desugarers/group_consecutive_children_avoiding.{
  group_consecutive_children_avoiding,
}
import desugarers/handles_substitute.{handles_substitute}
import desugarers/identity.{identity}
import desugarers/insert_bookend_tags.{insert_bookend_tags}
import desugarers/insert_indent.{insert_indent}
import desugarers/pair_bookends.{pair_bookends}
import desugarers/remove_attributes.{remove_attributes}
import desugarers/remove_empty_chunks.{remove_empty_chunks}
import desugarers/remove_empty_text_nodes.{remove_empty_text_nodes}
import desugarers/remove_starting_and_ending_empty_lines.{
  remove_starting_and_ending_empty_lines,
}
import desugarers/remove_starting_and_ending_spaces.{
  remove_starting_and_ending_spaces,
}
import desugarers/remove_vertical_chunks_with_no_text_child.{
  remove_vertical_chunks_with_no_text_child,
}
import desugarers/rename_when_child_of.{rename_when_child_of}
import desugarers/split_by_indexed_regexes.{split_by_indexed_regexes}
import desugarers/unwrap_tags.{unwrap_tags}
import desugarers/unwrap_tags_if_descendants_of.{unwrap_tags_if_descendants_of}
import desugarers/unwrap_tags_if_single_child.{unwrap_tags_if_single_child}
import desugarers/wrap_math_with_no_break.{wrap_math_with_no_break}
import gleam/list
import gleam/option.{None, Some}
import infrastructure.{type Pipe}
import prefabricated_pipelines as pp

pub fn lbp_pipeline() -> List(Pipe) {
  [
    pp.create_mathblock_and_math_elements(
      [ pp.DoubleDollar ],
      [ pp.SingleDollar ],
      #("$$", "$$"),
      #("$", "$"),
    ),
    [
      find_replace(#([#("\\$", "$")], ["Math", "MathBlock"])),
      // *******************************
      // Attributes with numbers *******
      // *******************************
      add_counter_attributes([
        #("Solution", "Exercises", "solution_number", 1),
        #("Exercise", "Exercises", "exercise_number", 1),
      ]),
      // ************************
      // AddTitleCounters *******
      // ************************
      generate_handles_attributes(#("Chapter", "Exercise")),
      generate_handles_attributes(#("Bootcamp", "Exercise")),
      add_title_counters_and_titles_with_handle_assignments([
        #("Chapter", "ExampleCounter", "Example", "*Example ", ".*", "*Example.*"),
        #("Bootcamp", "ExampleCounter", "Example", "*Example ", ".*", "*Example.*"),
        #("Chapter", "NoteCounter", "Note", "_Note ", "._", "_Note._"),
        #("Bootcamp", "NoteCounter", "Note", "_Note ", "._", "_Note._"),
        #("Exercises", "ExerciseCounter", "Exercise", "*Exercise ", ".*", "*Exercise.*"),
        #("Solution", "SolutionNoteCounter", "SolutionNote", "_Note ", "._", "_Note._"),
      ]),
      // ************************
      // VerticalChunk **********
      // ************************
      group_consecutive_children_avoiding(
        #(
          "VerticalChunk",
          [
            "Bootcamp", "CentralDisplay", "CentralDisplayItalic", "Chapter",
            "Example", "Exercise", "Exercises", "Grid", "Image", "ImageLeft",
            "ImageRight", "List", "MathBlock", "Note", "Pause", "Section",
            "Solution", "SolutionNote", "StarDivider", "Table", "TextParent",
            "WriterlyBlankLine", "center", "li", "ul", "ol", "table", "colgroup",
            "thead", "tbody", "tr", "td", "section",
          ],
          ["MathBlock", "VerticalChunk"],
        ),
      ),
      unwrap_tags(["WriterlyBlankLine"]),
      remove_empty_text_nodes(),
      rename_when_child_of([
        #("VerticalChunk", "Item", "List"),
        #("VerticalChunk", "Item", "Grid"),
      ]),
    ],
    // ************************
    // __ *********************
    // ************************
    pp.symmetric_delim_splitting("__", "__", "CentralDisplayItalic", ["Mathblock", "Math"]),
    // ************************
    // _| |_ ******************
    // ************************
    pp.asymmetric_delim_splitting("_\\|", "\\|_", "_|", "|_", "CentralDisplay", ["Mathblock", "Math"]),
    [
      // ************************
      // break CentralDisplay &
      // CentralDisplayItalic out
      // of VerticalChunk
      // ************************
      free_children([
        #("CentralDisplay", "VerticalChunk"),
        #("CentralDisplayItalic", "VerticalChunk"),
      ]),
      remove_vertical_chunks_with_no_text_child(),
    ],
    // ************************
    // _ & * ******************
    // ************************
    pp.symmetric_delim_splitting("_", "_", "i", ["Mathblock", "Math"]),
    pp.symmetric_delim_splitting("\\*", "*", "b", ["Mathblock", "Math"]),
    [
      find_replace(#([#("\\*", "*"), #("\\_", "_")], ["MathBlock", "Math"])),
      // ************************
      // misc *******************
      // ************************
      wrap_math_with_no_break(),
      unwrap_tags_if_single_child(["NoBreak"]),
      counters_substitute_and_assign_handles(),
      handles_generate_ids(),
      define_article_output_path(
        #("Chapter", "/article/chapter", "path"),
      ),
      define_article_output_path(
        #("Bootcamp", "/article/bootcamp", "path"),
      ),
      handles_generate_dictionary([#("Chapter", "path"), #("Bootcamp", "path")]),
      handles_substitute([#("class", "exercise-link")]),
      unwrap_tags(["GrandWrapper"]),

      concatenate_text_nodes(),
      // ************************
      // VerticalChunk cleanup
      // ************************
      remove_starting_and_ending_spaces(["VerticalChunk"]),
      remove_starting_and_ending_empty_lines(["VerticalChunk"]),
      unwrap_tags_if_descendants_of([#("VerticalChunk", ["td", "li"])]),
      remove_empty_chunks(),
      // ************************
      // ImageLeft, ImageRight parent-finding
      // ************************
      absorb_next_sibling_while([
        #("VerticalChunk", "ImageRight"),
        #("VerticalChunk", "ImageLeft"),
        #("MathBlock", "ImageRight"),
        #("MathBlock", "ImageLeft"),
        #("CentralDisplayItalic", "ImageRight"),
        #("CentralDisplayItalic", "ImageLeft"),
        #("CentralDisplay", "ImageRight"),
        #("CentralDisplay", "ImageLeft"),
        #("Image", "ImageRight"),
        #("Image", "ImageLeft"),
        #("ul", "ImageRight"),
        #("ul", "ImageLeft"),
      ]),
      add_attribute_to_if_child_of_but_no_overwrites([
        #(
          "ImageRight",
          "MathBlock",
          "compensate_offset_x_for_large_text_columns",
          "true",
        ),
        #(
          "ImageLeft",
          "MathBlock",
          "compensate_offset_x_for_large_text_columns",
          "true",
        ),
      ]),
      // ************************
      // VerticalChunk indents
      // ************************
      insert_indent(),
      // ************************
      // Add spacers
      // ************************
      add_between_tags([
        #(#("MathBlock", "VerticalChunk"), "Pause", []),
        #(#("Example", "VerticalChunk"), "Pause", []),
        #(#("Note", "VerticalChunk"), "Pause", []),
        #(#("SolutionNote", "VerticalChunk"), "Pause", []),
        #(#("Image", "VerticalChunk"), "Pause", []),
        #(#("Table", "VerticalChunk"), "Pause", []),
        #(#("table", "VerticalChunk"), "Pause", []),
        #(#("Grid", "VerticalChunk"), "Pause", []),
        #(#("CentralDisplayItalic", "VerticalChunk"), "Pause", []),
        #(#("CentralDisplay", "VerticalChunk"), "Pause", []),
        #(#("List", "VerticalChunk"), "Pause", []),
        #(#("StarDivider", "VerticalChunk"), "Pause", []),
      ]),
      identity(),
      // (I forgot... why would raw text directly follow a MathBlock?)
      add_between_tag_and_text_node([#("MathBlock", "Pause", [])]),
      add_before_tags_but_not_first_child_tags([
        #("Exercises", "Pause", []),
        #("Example", "Pause", []),
        #("Note", "Pause", []),
        #("SolutionNote", "Pause", []),
        #("Section", "Pause", []),
        #("MathBlock", "Pause", []),
        #("CentralDisplayItalic", "Pause", []),
        #("CentralDisplay", "Pause", []),
        #("Image", "Pause", []),
        #("Table", "Pause", []),
        #("table", "Pause", []),
        #("Grid", "Pause", []),
        #("Grid", "Pause", []),
        #("Solution", "Pause", []),
        #("List", "Pause", []),
        #("StarDivider", "Pause", []),
      ]),
      // ************************
      // attribute cleanup
      // ************************
      change_attribute_value([#("src", "/()")]),
      remove_attributes(["counter", "handle", "type", "t", "path"]),
      // ************************
      // contents
      // ************************
      generate_lbp_table_of_contents(#(
        "PanelAuthorSuppliedContent",
        "PanelTitle",
        "PanelItem",
        None,
      )),
      generate_lbp_table_of_contents(#(
        "TOCAuthorSuppliedContent",
        "TOCTitle",
        "TOCItem",
        Some("Spacer"),
      )),
      generate_lbp_links(),
    ]
  ]
  |> list.flatten
}
