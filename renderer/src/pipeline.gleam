import gleam/list
import gleam/option.{None, Some}
import infrastructure.{type Pipe} as infra
import prefabricated_pipelines as pp
import desugarer_names as dn

pub fn our_pipeline() -> List(Pipe) {
  [
    [
      dn.auto_generate_child_if_missing_from_attribute(#("Bootcamp", "ArticleTitle", "title")),
      dn.auto_generate_child_if_missing_from_attribute(#("Chapter", "ArticleTitle", "title")),
    ],
    // ****
    // create Math, MathBlock, then replace
    // escaped dollar signs with ordinary dollars
    // ****
    pp.create_mathblock_and_math_elements(
      #([ infra.DoubleDollar ], infra.DoubleDollar),
      #([ infra.SingleDollar ], infra.SingleDollar),
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
        #("Chapter", "counter", "SectionCounter"),
        #("Bootcamp", "counter", "ExampleCounter"),
        #("Bootcamp", "counter", "SectionCounter"),
        #("Exercises", "counter", "ExerciseCounter"),
        #("Solution", "counter", "SolutionNoteCounter"),
        #("Chapter", "path", "/article/chapter::øøChapterCounter"),
        #("Bootcamp", "path", "/article/bootcamp::øøBootcampCounter"),
        #("Chapter", "banner", "Chapter ::øøChapterCounter:"),
        #("Bootcamp", "banner", "Bootcamp ::øøBootcampCounter:"),
        #("Chapter", "number", "::øøChapterCounter"),
        #("Bootcamp", "number", "::øøBootcampCounter"),
        #("Chapter", "category", "Chapter"),
        #("Bootcamp", "category", "Bootcamp"),
        #("Exercise", "number", "::øøExerciseCounter"),
        #("Section", "id", "section-::++SectionCounter"),
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
      dn.cut_paste_attribute_from_self_to_child(#("Bootcamp", "ArticleTitle", "banner")),
      dn.cut_paste_attribute_from_self_to_child(#("Chapter", "ArticleTitle", "banner")),
    ],
    // ****
    // get rid of 'WriterlyBlankLine',
    // replace with parenting notion of
    // OuterP (paragraph abstraction) instead
    // ****
    [
      dn.group_consecutive_children_avoiding(
        #(
          "p",
          [
            "ArticleTitle",
            "Bootcamp", "CentralDisplay", "CentralDisplayItalic", "Chapter",
            "Example", "Exercise", "Exercises", "Grid", "Image", "ImageLeft",
            "ImageRight", "List", "MathBlock", "Note", "Pause", "Section",
            "Solution", "SolutionNote", "StarDivider", "Table", "TextParent",
            "WriterlyBlankLine",
            "center", "col", "div", "p", "li", "ul", "ol", "table", "colgroup",
            "thead", "tbody", "tr", "td", "section",
            "DebugScope",
          ],
          ["MathBlock", "p", "CentralDisplay", "CentralDisplayItalic", "ArticleTitle"],
        ),
      ),
      dn.unwrap(["WriterlyBlankLine"]),
      dn.concatenate_text_nodes(),
      dn.remove_text_nodes_with_singleton_empty_line(),
      dn.remove_starting_and_ending_spaces(["p"]),
      dn.remove_starting_and_ending_empty_lines(["p"]),
      dn.remove_empty_tags(["p"]),
    ],
    // ****
    // parse '__', '_|' delimiters, break
    // new elements out of parent p
    // (why don't we do this before creating the p,
    // and spare ourselves the free_children call?)
    // ****
    pp.symmetric_delim_splitting("__", "__", "CentralDisplayItalic", ["Mathblock", "Math"]),
    pp.asymmetric_delim_splitting("_\\|", "\\|_", "_|", "|_", "CentralDisplay", ["Mathblock", "Math"]),
    [
      dn.free_children([
        #("CentralDisplay", "p"),
        #("CentralDisplayItalic", "p"),
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
      dn.unwrap_when_zero_or_one_children(["NoBreak"]),
      // ************************
      // OuterP cleanup (some cleanups all over again, after delim splitting)
      // ************************
      dn.concatenate_text_nodes(),
      dn.remove_text_nodes_with_singleton_empty_line(),
      dn.remove_starting_and_ending_spaces(["p"]),
      dn.remove_starting_and_ending_empty_lines(["p"]),
      dn.remove_empty_tags(["p"]),
      dn.unwrap_tags_when_no_child_meets_condition(#(
        ["p"],
        infra.is_text_or_is_one_of(_, ["b", "i", "a", "span", "InChapterLink"])
      )),
      dn.unwrap_when_descendant_of([#("p", ["td", "li"])]),
      dn.rename_when_child_of([
        #("p", "Item", "List"),
        #("p", "Item", "Grid"),
      ]),
      dn.rename_when_child_of([
        #("p", "OuterP", "Section"),
        #("p", "OuterP", "Exercise"),
        #("p", "OuterP", "Solution"),
        #("p", "OuterP", "Example"),
        #("p", "OuterP", "Chapter"),
        #("p", "OuterP", "Bootcamp"),
      ]),
      dn.wrap_children_before_in(#("Exercise", "Solution", "ExerciseStatement")),
      dn.cut_paste_attribute_from_self_to_child(#("Exercise", "ExerciseStatement", "id")),
      // ************************
      // ImageLeft, ImageRight parent-finding
      // ************************
      dn.absorb_next_sibling_while([
        #("OuterP", "ImageRight"),
        #("OuterP", "ImageLeft"),
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
      // OuterP indents
      // ************************
      dn.add_attribute_to_second_of_kind(#("OuterP", "class", "indent-10")),
      // ************************
      // Add spacers
      // ************************
      dn.add_between_tags([
        #(#("MathBlock", "OuterP"), "Pause", []),
        #(#("Example", "OuterP"), "Pause", []),
        #(#("Note", "OuterP"), "Pause", []),
        #(#("SolutionNote", "OuterP"), "Pause", []),
        #(#("Image", "OuterP"), "Pause", []),
        #(#("Table", "OuterP"), "Pause", []),
        #(#("table", "OuterP"), "Pause", []),
        #(#("Grid", "OuterP"), "Pause", []),
        #(#("CentralDisplayItalic", "OuterP"), "Pause", []),
        #(#("CentralDisplay", "OuterP"), "Pause", []),
        #(#("List", "OuterP"), "Pause", []),
        #(#("StarDivider", "OuterP"), "Pause", []),
      ]),
      // (I forgot... why would raw text directly follow a MathBlock?)
      dn.add_between_tag_and_text_node([#("MathBlock", "Pause", [])]),
      dn.add_before_tags_but_not_first_child_tags([
        #("Exercises", "Pause", []),
        #("Example", "Pause", []),
        #("Note", "Pause", []),
        #("SolutionNote", "Pause", []),
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
      dn.add_before_tags_but_not_before_first_of_kind([#("Section", "Pause", [])]),
      dn.rearrange_links([
        #("Note <a href=0>_0_</a> of Exercise <a href=1>_1_</a> of Chapter <a href=2>_2_</a>", "<a href=0>Note _0_ of Exercise _1_ of Chapter _2_</a>"),
        #("Note <a href=0>_0_</a> of Exercise <a href=1>_1_</a>", "<a href=0>Note _0_ of Exercise _1_</a>"),
        #("Exercise <a href=1>_1_</a> of Chapter <a href=2>_2_</a>", "<a href=1>Exercise _1_ of Chapter _2_</a>"),
        #("Chapter <a href=1>_1_</a>", "<a href=1>Chapter _1_</a>"),
        #("Exercise <a href=1>_1_</a>", "<a href=1>Exercise _1_</a>"),
        #("Note <a href='1'>_1_</a>", "<a href='1'>Note _1_</a>"),
      ]),
      // ************************
      // contents
      // ************************
      dn.generate_lbp_table_of_contents(#(
        "HamburgerPanelAuthorSuppliedContents",
        "HamburgerPanelTitle",
        "HamburgerPanelItem",
        None,
      )),
      dn.generate_lbp_table_of_contents(#(
        "TOC",
        "TOCTitle",
        "TOCItem",
        Some("Spacer"),
      )),
      dn.generate_lbp_prev_next_attributes(),
      dn.auto_generate_child_if_missing_from_first_descendant_of_type(#("Section", "BreadcrumbTitle", "b")),
      dn.generate_lbp_breadcrumbs(),
      dn.unwrap(["BreadcrumbTitle"]),
      // dn.reassign_text_node_blame_to_blame_of_first_nonempty_line_in_text_node(),
      dn.unwrap(["DebugScope"]),
      // ************************
      // attribute cleanup
      // ************************
      dn.change_attribute_value([#("src", "/()")]),
      dn.remove_attributes(["counter", "handle", "type", "t", ".", "title", "test"]),
      dn.rename_attributes_by_function(infra.kabob_case_to_camel_case),
    ]
  ]
  |> list.flatten
}
