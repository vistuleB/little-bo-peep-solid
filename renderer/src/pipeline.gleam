import gleam/list
import gleam/option.{None, Some}
import infrastructure.{type Pipe}
import prefabricated_pipelines as pp
import desugarer_names as dn

pub fn lbp_pipeline() -> List(Pipe) {
  [
    pp.create_mathblock_and_math_elements(
      [ pp.DoubleDollar ],
      [ pp.SingleDollar ],
      pp.DoubleDollar,
      pp.SingleDollar,
    ),
    [
      dn.find_replace(#([#("\\$", "$")], ["Math", "MathBlock"])),
      // *******************************
      // Attributes with numbers *******
      // *******************************
      dn.add_counter_attributes([
        #("Solution", "Exercises", "solution_number", 1),
        #("Exercise", "Exercises", "exercise_number", 1),
      ]),
      // ************************
      // AddTitleCounters *******
      // ************************
      dn.generate_handles_attributes(#("Chapter", "Exercise")),
      dn.generate_handles_attributes(#("Bootcamp", "Exercise")),
      dn.add_title_counters_and_titles_with_handle_assignments([
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
      dn.group_consecutive_children_avoiding(
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
      dn.unwrap_tags(["WriterlyBlankLine"]),
      dn.remove_empty_text_nodes(),
      dn.rename_when_child_of([
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
      dn.free_children([
        #("CentralDisplay", "VerticalChunk"),
        #("CentralDisplayItalic", "VerticalChunk"),
      ]),
      dn.remove_vertical_chunks_with_no_text_child(),
    ],
    // ************************
    // _ & * ******************
    // ************************
    pp.symmetric_delim_splitting("_", "_", "i", ["MathBlock", "Math"]),
    pp.symmetric_delim_splitting("\\*", "*", "b", ["MathBlock", "Math"]),
    [
      dn.find_replace(#([#("\\*", "*"), #("\\_", "_")], ["MathBlock", "Math"])),
      // ************************
      // misc *******************
      // ************************
      dn.wrap_math_with_no_break(),
      dn.unwrap_tags_if_single_child(["NoBreak"]),
      dn.counters_substitute_and_assign_handles(),
      dn.handles_generate_ids(),
      dn.define_article_output_path(#("Chapter", "/article/chapter", "path")),
      dn.define_article_output_path(#("Bootcamp", "/article/bootcamp", "path")),
      dn.handles_generate_dictionary([#("Chapter", "path"), #("Bootcamp", "path")]),
      dn.handles_substitute([#("class", "exercise-link")]),
      dn.unwrap_tags(["GrandWrapper"]),

      dn.concatenate_text_nodes(),
      // ************************
      // VerticalChunk cleanup
      // ************************
      dn.remove_starting_and_ending_spaces(["VerticalChunk"]),
      dn.remove_starting_and_ending_empty_lines(["VerticalChunk"]),
      dn.unwrap_tags_if_descendants_of([#("VerticalChunk", ["td", "li"])]),
      dn.remove_empty_chunks(),
      // ************************
      // ImageLeft, ImageRight parent-finding
      // ************************
      dn.absorb_next_sibling_while([
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
      dn.add_attribute_to_if_child_of_but_no_overwrites([
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
      dn.insert_indent(),
      // ************************
      // Add spacers
      // ************************
      dn.add_between_tags([
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
      dn.identity(),
      // (I forgot... why would raw text directly follow a MathBlock?)
      dn.add_between_tag_and_text_node([#("MathBlock", "Pause", [])]),
      dn.add_before_tags_but_not_first_child_tags([
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
      dn.change_attribute_value([#("src", "/()")]),
      dn.remove_attributes(["counter", "handle", "type", "t", "path"]),
      // ************************
      // contents
      // ************************
      dn.generate_lbp_table_of_contents(#(
        "PanelAuthorSuppliedContent",
        "PanelTitle",
        "PanelItem",
        None,
      )),
      dn.generate_lbp_table_of_contents(#(
        "TOCAuthorSuppliedContent",
        "TOCTitle",
        "TOCItem",
        Some("Spacer"),
      )),
      dn.generate_lbp_links(),
    ]
  ]
  |> list.flatten
}
