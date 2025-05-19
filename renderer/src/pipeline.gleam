import gleam/list
import gleam/option.{None, Some}
import infrastructure.{type Pipe}
import prefabricated_pipelines as pp
import desugarer_names as dn

pub fn lbp_pipeline() -> List(Pipe) {
  [
    // ****
    // create Math, MathBlock, then replace
    // escaped dollar signs with ordinary dollars
    // ****
    pp.create_mathblock_and_math_elements(
      #([ pp.DoubleDollar ], pp.DoubleDollar),
      #([ pp.SingleDollar ], pp.SingleDollar),
    ),
    [
      dn.find_replace(#([#("\\$", "$")], ["Math", "MathBlock"])),
    ],
    // ****
    // setting up counters and 
    // counter-related titles
    // ****
    [
      dn.add_attributes([
        #("Book", "counter", "ChapterCounter"),
        #("Book", "counter", "BootcampCounter"),
        #("Chapter", "counter", "ExampleCounter"),
        #("Chapter", "counter", "NoteCounter"),
        #("Bootcamp", "counter", "ExampleCounter"),
        #("Exercises", "counter", "ExerciseCounter"),
        #("Solution", "counter", "SolutionNoteCounter"),
        #("Chapter", "path", "/article/chapter::øøChapterCounter"),
        #("Bootcamp", "path", "/article/bootcamp::øøBootcampCounter"),
        #("Exercise", "exercise_number", "::øøExerciseCounter"),
        #("Solution", "solution_number", "::øøExerciseCounter"),
      ]),
      dn.associate_counter_by_prepending_incrementing_attribute([
        #("Chapter", "ChapterCounter"),
        #("Bootcamp", "BootcampCounter"),
        #("Example", "ExampleCounter"),
        #("Exercise", "ExerciseCounter"),
        #("SolutionNote", "SolutionNoteCounter"),
        #("Note", "NoteCounter"),
      ]),
      dn.prepend_text([
        #("Example", "*Example ::øøExampleCounter.*"),
        #("Exercise", "*Exercise ::øøExerciseCounter.*"),
        #("SolutionNote", "_Note ::øøSolutionNoteCounter._"),
        #("Note", "_Note ::øøNoteCounter._"),
      ]),
      dn.counters_substitute_and_assign_handles(),
      dn.handles_generate_ids(),
      dn.handles_generate_dictionary([#("Chapter", "path"), #("Bootcamp", "path")]),
      dn.handles_substitute([]),
      dn.unwrap(["GrandWrapper"]),
    ],
    // ****
    // get rid of 'WriterlyBlankLine',
    // replace with parenting notion of
    // VerticalChunk (paragraph abstraction) instead
    // ****
    [
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
          ["MathBlock", "VerticalChunk", "CentralDisplay", "CentralDisplayItalic"],
        ),
      ),
      dn.unwrap(["WriterlyBlankLine"]),
    ],
    // ****
    // parse '__', '_|' delimiters, break
    // new elements out of parent VerticalChunk
    // ****
    pp.symmetric_delim_splitting("__", "__", "CentralDisplayItalic", ["Mathblock", "Math"]),
    pp.asymmetric_delim_splitting("_\\|", "\\|_", "_|", "|_", "CentralDisplay", ["Mathblock", "Math"]),
    [
      dn.free_children([
        #("CentralDisplay", "VerticalChunk"),
        #("CentralDisplayItalic", "VerticalChunk"),
      ]),
    ],
    // ****
    // parse _, * delims
    // ****
    pp.symmetric_delim_splitting("_", "_", "i", ["MathBlock", "Math"]),
    pp.symmetric_delim_splitting("\\*", "*", "b", ["MathBlock", "Math"]),
    [
      dn.find_replace(#([#("\\*", "*"), #("\\_", "_")], ["MathBlock", "Math"])),
    ],
    // ****
    // misc + not-so misc...
    // ****
    [
      dn.wrap_math_with_no_break(),
      dn.unwrap_when_single_child(["NoBreak"]),
      dn.wrap_children_before_in(#("Exercise", "Solution", "ExerciseStatement")),
      dn.concatenate_text_nodes(),
      dn.cut_paste_attribute_from_self_to_child(
        #("Exercise", "ExerciseStatement", "id"),
      ),

      // ************************
      // VerticalChunk cleanup
      // ************************
      dn.remove_starting_and_ending_spaces(["VerticalChunk"]),
      dn.remove_starting_and_ending_empty_lines(["VerticalChunk"]),
      dn.remove_empty_text_nodes(),
      dn.unwrap_vertical_chunks_with_no_text_child(),
      dn.unwrap_when_descendant_of([#("VerticalChunk", ["td", "li"])]),
      dn.rename_when_child_of([
        #("VerticalChunk", "Item", "List"),
        #("VerticalChunk", "Item", "Grid"),
      ]),
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
      dn.add_attribute_when_child_of([
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
        #("List", "Pause", []),
        #("StarDivider", "Pause", []),
      ]),
      // ************************
      // attribute cleanup
      // ************************
      dn.change_attribute_value([#("src", "/()")]),
      dn.remove_attributes(["counter", "handle", "type", "t", "path", "."]),
      // dn.rearrange_links([
      //   #("Exercise <a href=\"1\">_1_</a>.<a href=\"2\">_2_</a>", "<a href=\"2\">Exercise _1_._2_</a>")
      // ]),
      dn.rearrange_links([
        #("Chapter <a href='1'>_1_</a>, Exercise <a href='2'>_2_</a>", "<a class='e-link' href='2'>Chapter _1_, Exercise _2_</a>"),
        #("Chapter <a href='1'>_1_</a>", "<a class='c-link' href='1'>Chapter _1_</a>"),
        #("Exercise <a href='1'>_1_</a>.<a href=2>_2_</a>", "<a class='e-link' href='2'>Exercise _1_._2_</a>"),
        #("Exercise <a href='1'>_1_</a>", "<a class='e-link' href='1'>Exercise _1_</a>"),
        #("Note <a href='1'>_1_</a>", "<a class='n-link' href='1'>Note _1_</a>"),
        #("Exercises <a href=1>_1_</a> and <a href=2>_2_</a>", "Exercises <a href=1 class=e-link>_1_</a> and <a href=2 class=e-link>_2_</a>"),
      ]),
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
      dn.reassign_text_node_blame_to_blame_of_first_nonempty_line_in_text_node(),
    ]
  ]
  |> list.flatten
}
