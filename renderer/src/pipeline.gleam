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
import gleam/option.{None, Some}
import infrastructure.{type Pipe} as infra

pub fn lbp_pipeline() -> List(Pipe) {
  let double_dollar_indexed_regex =
    infra.unescaped_suffix_indexed_regex("\\$\\$")

  let single_dollar_indexed_regex = infra.unescaped_suffix_indexed_regex("\\$")

  // __ __
  let opening_double_underscore_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[\\s]|^", "__", "[^\\s]|$")

  let opening_or_closing_double_underscore_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[^\\s]|^", "__", "[^\\s]|$")

  let closing_double_underscore_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[^\\s]|^", "__", "[\\s]|$")

  // _| |_
  let opening_central_quote_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[\\s]|^", "_\\|", "[^\\s]|$")

  let closing_central_quote_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[^\\s]|^", "\\|_", "[\\s]|$")

  // _ _
  let opening_single_underscore_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[\\s({\\[]|^", "_", "[^\\s)}\\]_]|$")

  let opening_or_closing_single_underscore_indexed_regex_without_asterisks =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[\\*_]|^", "_", "[^\\s)}\\]\\*_]|$")

  let opening_or_closing_single_underscore_indexed_regex_with_asterisks =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[_]|^", "_", "[^\\s)}\\]_]|$")

  let closing_single_underscore_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[_]|^", "_", "[\\s)}\\]]|$")

  // * *
  let opening_single_asterisk_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[\\s({\\[]|^", "\\*", "[^\\s)}\\]\\*]|$")

  let opening_or_closing_single_asterisk_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[\\*]|^", "\\*", "[^\\s)}\\]\\*]|$")

  let closing_single_asterisk_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[\\*]|^", "\\*", "[\\s)}\\]]|$")

  [
    convert_int_attributes_to_float([#("", "line"), #("", "padding_left")]),
    // ************************
    // $$ *********************
    // ************************
    // 3.
    split_by_indexed_regexes(
      #([#(double_dollar_indexed_regex, "DoubleDollar")], []),
    ),
    pair_bookends(#(["DoubleDollar"], ["DoubleDollar"], "MathBlock")),
    fold_tags_into_text([#("DoubleDollar", "$$")]),
    // ************************
    // $ **********************
    // ************************
    split_by_indexed_regexes(
      #([#(single_dollar_indexed_regex, "SingleDollar")], ["MathBlock"]),
    ),
    pair_bookends(#(["SingleDollar"], ["SingleDollar"], "Math")),
    fold_tags_into_text([#("SingleDollar", "$")]),
    insert_bookend_tags([
      #("Math", "OpeningSingleDollar", "ClosingSingleDollar"),
      #("MathBlock", "OpeningDoubleDollar", "ClosingDoubleDollar"),
    ]),
    fold_tags_into_text([
      #("OpeningSingleDollar", "$"),
      #("ClosingSingleDollar", "$"),
      #("OpeningDoubleDollar", "$$"),
      #("ClosingDoubleDollar", "$$"),
    ]),
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
    // 7.

    generate_handles_attributes(#("Chapter", "Exercise")),
    generate_handles_attributes(#("Bootcamp", "Exercise")),

    add_title_counters_and_titles_with_handle_assignments([
      #("Chapter", "ExampleCounter", "Example", "*Example ", ".*", "*Example.*"),
      #(
        "Bootcamp",
        "ExampleCounter",
        "Example",
        "*Example ",
        ".*",
        "*Example.*",
      ),
      #("Chapter", "NoteCounter", "Note", "_Note ", "._", "_Note._"),
      #("Bootcamp", "NoteCounter", "Note", "_Note ", "._", "_Note._"),
      #(
        "Exercises",
        "ExerciseCounter",
        "Exercise",
        "*Exercise ",
        ".*",
        "*Exercise.*",
      ),
      #(
        "Solution",
        "SolutionNoteCounter",
        "SolutionNote",
        "_Note ",
        "._",
        "_Note._",
      ),
    ]),
    // ************************
    // VerticalChunk **********
    // ************************
    // 8.
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
    rename_when_child_of([
      #("VerticalChunk", "Item", "List"),
      #("VerticalChunk", "Item", "Grid"),
    ]),
    unwrap_tags(["WriterlyBlankLine"]),
    remove_empty_text_nodes(),
    // ************************
    // __ *********************
    // ************************
    split_by_indexed_regexes(
      #(
        [
          #(
            opening_or_closing_double_underscore_indexed_regex,
            "OpeningOrClosingDoubleUnderscore",
          ),
          #(opening_double_underscore_indexed_regex, "OpeningDoubleUnderscore"),
          #(closing_double_underscore_indexed_regex, "ClosingDoubleUnderscore"),
        ],
        ["MathBlock", "Math"],
      ),
    ),
    pair_bookends(#(
      ["OpeningDoubleUnderscore", "OpeningOrClosingDoubleUnderscore"],
      ["ClosingDoubleUnderscore", "OpeningOrClosingDoubleUnderscore"],
      "CentralDisplayItalic",
    )),
    fold_tags_into_text([
      #("OpeningDoubleUnderscore", "__"),
      #("ClosingDoubleUnderscore", "__"),
      #("OpeningOrClosingDoubleUnderscore", "__"),
    ]),
    // ************************
    // _| |_ ******************
    // ************************
    split_by_indexed_regexes(
      #(
        [
          #(opening_central_quote_indexed_regex, "OpeningCenterQuote"),
          #(closing_central_quote_indexed_regex, "ClosingCenterQuote"),
        ],
        ["MathBlock"],
      ),
    ),
    pair_bookends(#(
      ["OpeningCenterQuote"],
      ["ClosingCenterQuote"],
      "CentralDisplay",
    )),
    fold_tags_into_text([
      #("OpeningCenterQuote", "_|"),
      #("ClosingCenterQuote", "|_"),
    ]),
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
    // ************************
    // _ & * ******************
    // ************************
    split_by_indexed_regexes(
      #(
        [
          #(
            opening_or_closing_single_underscore_indexed_regex_without_asterisks,
            "OpeningOrClosingUnderscore",
          ),
          #(opening_single_underscore_indexed_regex, "OpeningUnderscore"),
          #(closing_single_underscore_indexed_regex, "ClosingUnderscore"),
          #(
            opening_or_closing_single_asterisk_indexed_regex,
            "OpeningOrClosingAsterisk",
          ),
          #(opening_single_asterisk_indexed_regex, "OpeningAsterisk"),
          #(closing_single_asterisk_indexed_regex, "ClosingAsterisk"),
          #(
            opening_or_closing_single_underscore_indexed_regex_with_asterisks,
            "OpeningOrClosingUnderscore",
          ),
          #(opening_single_underscore_indexed_regex, "OpeningUnderscore"),
          #(closing_single_underscore_indexed_regex, "ClosingUnderscore"),
        ],
        ["MathBlock", "Math"],
      ),
    ),
    pair_bookends(#(
      ["OpeningUnderscore", "OpeningOrClosingUnderscore"],
      ["ClosingUnderscore", "OpeningOrClosingUnderscore"],
      "i",
    )),
    pair_bookends(#(
      ["OpeningAsterisk", "OpeningOrClosingAsterisk"],
      ["ClosingAsterisk", "OpeningOrClosingAsterisk"],
      "b",
    )),
    fold_tags_into_text([
      #("OpeningOrClosingUnderscore", "_"),
      #("OpeningUnderscore", "_"),
      #("ClosingUnderscore", "_"),
      #("OpeningOrClosingAsterisk", "*"),
      #("OpeningAsterisk", "*"),
      #("ClosingAsterisk", "*"),
    ]),
    find_replace(
      #([#("&ensp;", " "), #("\\*", "*"), #("\\_", "_")], ["MathBlock", "Math"]),
    ),
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
}
