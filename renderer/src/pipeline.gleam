import gleam/list
import gleam/option.{None, Some}
import local_desugarers as local_dl
import vxml.{type VXML, V}
import vxml/blame.{Ext}
import vxml_pipeline/core.{type Pipeline}
import vxml_pipeline/delimited_syntax as syntax
import vxml_pipeline/desugarers as dl
import writerly

const p_cannot_contain = [
  "Appendix", "ArticleTitle", "Bootcamp", "BoxedText", "CentralDisplay",
  "CentralDisplayItalic", "Chapter", "Example", "Exercise", "Exercises", "Grid",
  "Image", "ImageLeft", "ImageRight", "List", "MathBlock", "Note", "Pause",
  "Scope", "Section", "Solution", "SolutionNote", "StarDivider", "TildeDivider",
  "Table", "TextParent", "WriterlyBlankLine", "center", "col", "colgroup", "div",
  "p", "li", "ol", "table", "thead", "tbody", "tr", "td", "section", "ul",
]

const cannot_contain_p = ["ArticleTitle", "MathBlock", "Math", "p"]

const our_blame = Ext([], "pipeline.gleam")

// dual | switcher-only | list-only
const end_of_chapter_exercises_switcher_type = "dual"

const exercise_graveyard_switcher_type = "list-only"

const span_like_elements = [
  "b",
  "i",
  "a",
  "span",
  "InChapterLink",
  "InlineImage",
  "Math",
]

fn first_vxml_is(vxmls: List(VXML), expected: String) -> Bool {
  case vxmls {
    [V(_, actual, _, _), ..] -> actual == expected
    _ -> False
  }
}

fn vxmls_contain(vxmls: List(VXML), expected: String) -> Bool {
  list.any(vxmls, core.is_v_and_tag_equals(_, expected))
}

pub fn our_pipeline(
  only: Bool,
  remove_unused: Bool,
  author_mode: Bool,
) -> Pipeline {
  [
    [
      dl.identity(),
      dl.delete("WriterlyComment"),
      dl.concatenate_text_nodes(),
      dl.delete_attribute_if(fn(key, _) {
        writerly.is_commented_attribute_key(key)
      }),
      dl.wrap_if_not_child_of(#("Exercise", "Exercises", ["Exercises"])),
      local_dl.lbp_exercise_graveyard_generate_grand_wrapper_to_be_moved_attributes(),
      local_dl.lbp_move_to_be_moved_to_grand_wrapper(),
      local_dl.lbp_move_to_be_moved_from_grand_wrapper_to_exercise_graveyard(),
      local_dl.lbp_select_content(),
      dl.delete_first_child_occurrences_of_and_recurse("WriterlyBlankLine"),
      dl.auto_generate_child_if_missing_from_attribute__outside(
        #("Bootcamp", "ArticleTitle", "title"),
        ["Chapter"],
      ),
      dl.auto_generate_child_if_missing_from_attribute__outside(
        #("Chapter", "ArticleTitle", "title"),
        ["Bootcamp"],
      ),
      dl.auto_generate_child_if_missing_from_attribute__outside(
        #("Appendix", "ArticleTitle", "title"),
        ["Chapter", "Bootcamp"],
      ),
    ],
    [
      dl.table_section_header("syntax.create_mathblock_elements"),
      ..syntax.create_mathblock_elements(
        [core.DoubleDollar],
        core.DoubleDollar,
        [
          "WriterlyBlankLine",
        ],
      )
    ],
    [
      dl.table_section_header("syntax.create_math_elements"),
      ..syntax.create_math_elements(
        [core.SingleDollar],
        core.SingleDollar,
        core.BackslashParenthesis,
        ["WriterlyBlankLine"],
      )
    ],
    [
      dl.table_section_header("syntax.markdown_link_pipeline"),
      ..syntax.markdown_link_pipeline(["WriterlyBlankLine"], [
        "MathBlock",
        "Math",
      ])
    ],
    [
      dl.find_replace__outside(#("\\$", "$"), ["Math", "MathBlock"]),
      dl.append_attribute(#("Book", "counter", "ChapterCounter", core.GoBack)),
      dl.append_attribute(#("Book", "counter", "BootcampCounter", core.GoBack)),
      dl.append_attribute(#(
        "Book",
        "counter-uppercase",
        "AppendixCounter",
        core.GoBack,
      )),
      dl.append_attribute__batch([
        #("Chapter", "counter", "ExampleCounter"),
        #("Chapter", "counter", "NoteCounter"),
        #("Chapter", "counter", "SectionCounter"),
        #("Chapter", "path", "/article/chapter::øøChapterCounter"),
        #("Chapter", "banner", "Chapter ::øøChapterCounter:"),
        #("Chapter", "category", "Chapter"),
        #("Chapter", "number", "::øøChapterCounter"),
        #("Bootcamp", "counter", "ExampleCounter"),
        #("Bootcamp", "counter", "SectionCounter"),
        #("Bootcamp", "path", "/article/bootcamp::øøBootcampCounter"),
        #("Bootcamp", "banner", "Bootcamp ::øøBootcampCounter:"),
        #("Bootcamp", "number", "::øøBootcampCounter"),
        #("Bootcamp", "category", "Bootcamp"),
        #("Appendix", "counter", "ExampleCounter"),
        #("Appendix", "counter", "NoteCounter"),
        #("Appendix", "counter", "SectionCounter"),
        #("Appendix", "path", "/article/appendix::øøAppendixCounter"),
        #("Appendix", "banner", "Appendix ::øøAppendixCounter:"),
        #("Appendix", "category", "Appendix"),
        #("Appendix", "number", "::øøAppendixCounter"),
        #("Exercises", "counter", "ExerciseCounter"),
        #("Solution", "counter", "SolutionNoteCounter"),
      ]),
      dl.sigil_counters_prepend_incrementing_attribute__batch([
        #("Chapter", "ChapterCounter"),
        #("Bootcamp", "BootcampCounter"),
        #("Appendix", "AppendixCounter"),
        #("Example", "ExampleCounter"),
        #("SolutionNote", "SolutionNoteCounter"),
        #("Note", "NoteCounter"),
        #("Section", "SectionCounter"),
      ]),
      dl.sigil_counters_prepend_incrementing_attribute_if_fancy(#(
        "Exercise",
        "ExerciseCounter",
        fn(_, ancestors, _, _, _) { first_vxml_is(ancestors, "Exercises") },
        core.GoBack,
      )),
      dl.append_attribute_if(#(
        "Section",
        fn(section) { !core.v_has_attr_with_key(section, "id") },
        "id",
        "section-::øøSectionCounter",
        core.Continue,
      )),
      dl.append_attribute_if_fancy(#(
        "Exercises",
        fn(_, _, _, _, following_siblings) { list.is_empty(following_siblings) },
        "at_end_of_page",
        "true",
        core.GoBack,
      )),
      dl.append_attribute_if_fancy(#(
        "Exercises",
        fn(exercises, ancestors, _, _, following_siblings) {
          list.is_empty(following_siblings)
          && !vxmls_contain(ancestors, "Appendix")
          && !core.v_has_attr_with_key(exercises, "mode")
        },
        "mode",
        end_of_chapter_exercises_switcher_type,
        core.GoBack,
      )),
      dl.append_attribute_if_fancy(#(
        "Exercise",
        fn(_, ancestors, _, _, _) { first_vxml_is(ancestors, "Exercises") },
        "number",
        "::øøExerciseCounter",
        core.GoBack,
      )),
      dl.append_attribute_if_fancy(#(
        "Exercises",
        fn(_, ancestors, _, _, following_siblings) {
          list.is_empty(following_siblings)
          && !vxmls_contain(ancestors, "Appendix")
        },
        "show_curlicue",
        "true",
        core.GoBack,
      )),
      dl.append_attribute_if_fancy(#(
        "Exercises",
        fn(exercises, ancestors, _, _, _) {
          vxmls_contain(ancestors, "Appendix")
          && !core.v_has_attr_with_key(exercises, "mode")
        },
        "mode",
        exercise_graveyard_switcher_type,
        core.GoBack,
      )),
      dl.writerly_handles_set_value__outside(
        #("Chapter", "::øøChapterCounter", core.GoBack),
        ["Bootcamp"],
      ),
      dl.writerly_handles_set_value__outside(
        #("Bootcamp", "::øøBootcampCounter", core.GoBack),
        ["Chapter"],
      ),
      dl.writerly_handles_set_value__outside(
        #("Appendix", "::øøAppendixCounter", core.GoBack),
        ["Chapter", "Bootcamp"],
      ),
      dl.writerly_handles_set_value__batch([
        #("Example", "::øøExampleCounter"),
        #("Exercise", "::øøExerciseCounter"),
        #("Note", "::øøNoteCounter"),
        #("SolutionNote", "::øøSolutionNoteCounter"),
        #("Section", "::øøSectionCounter"),
      ]),
      dl.prepend_text_node(#("Example", "*Example ::øøExampleCounter.*")),
      dl.prepend_text_node(#("SolutionNote", "_Note ::øøSolutionNoteCounter._")),
      dl.prepend_text_node(#("Note", "_Note ::øøNoteCounter._")),
      dl.prepend_text_node_if_fancy(
        #(
          "Exercise",
          "*Exercise ::øøExerciseCounter.*",
          fn(_, ancestors, _, _, _) { first_vxml_is(ancestors, "Exercises") },
        ),
      ),
      dl.prepend_text_node_if_fancy(
        #("Exercise", "*Exercise*", fn(_, ancestors, _, _, _) {
          !first_vxml_is(ancestors, "Exercises")
        }),
      ),
      dl.sigil_counters_substitute__outside(["pre"]),
      dl.writerly_handles_generate_v_definitions_from_t_definitions(),
      dl.writerly_handles_add_ids(),
      dl.writerly_handles_grand_wrapper_generate_dictionary("path"),
      dl.writerly_handles_grand_wrapper_substitute(
        #(
          "path",
          "InChapterLink",
          "OutChapterLink",
          [#("class", "in-chapter-link")],
          [#("class", "out-chapter-link")],
          ["a"],
          ["Math", "MathBlock"],
        ),
      ),
      dl.writerly_handles_grand_wrapper_unwrap(),
      dl.cut_paste_attribute_from_self_to_child__outside(
        #("Bootcamp", "ArticleTitle", "banner"),
        ["Chapter"],
      ),
      dl.cut_paste_attribute_from_self_to_child__outside(
        #("Chapter", "ArticleTitle", "banner"),
        ["Bootcamp"],
      ),
      dl.cut_paste_attribute_from_self_to_child__outside(
        #("Appendix", "ArticleTitle", "banner"),
        ["Chapter", "Bootcamp"],
      ),
      dl.group_consecutive_children__outside(
        #("p", p_cannot_contain),
        cannot_contain_p,
      ),
      dl.wrap_children_avoiding(#(
        "List",
        "Item",
        "WriterlyBlankLine",
        core.GoBack,
      )),
      dl.unwrap("WriterlyBlankLine"),
      // cleaning 'p' first time around:
      dl.concatenate_text_nodes(),
      dl.delete_text_nodes_with_singleton_empty_line(),
      dl.trim("p"),
      dl.delete_if_empty("p"),
      // (end cleaning)
    ],
    [
      dl.table_section_header(
        "syntax.permissive_symmetric_delimiter_pipeline __",
      ),
      ..syntax.permissive_symmetric_delimiter_pipeline(
        "__",
        "__",
        "CentralDisplayItalic",
        ["WriterlyBlankLine"],
        ["Mathblock", "Math"],
      )
    ],
    [
      dl.table_section_header("syntax.asymmetric_delimiter_pipeline"),
      dl.table_marker(),
      ..syntax.asymmetric_delimiter_pipeline(
        "_\\|",
        "\\|_",
        "_|",
        "|_",
        "CentralDisplay",
        ["WriterlyBlankLine"],
        ["Mathblock", "Math"],
      )
    ],
    [
      dl.free_children(#("CentralDisplay", "p")),
      dl.free_children(#("CentralDisplayItalic", "p")),
    ],
    [
      dl.table_section_header(
        "syntax.permissive_symmetric_delimiter_pipeline _",
      ),
      ..syntax.permissive_symmetric_delimiter_pipeline(
        "_",
        "_",
        "i",
        ["WriterlyBlankLine"],
        ["MathBlock", "Math", "InTextWarning"],
      )
    ],
    [
      dl.table_section_header(
        "syntax.permissive_symmetric_delimiter_pipeline *",
      ),
      ..syntax.permissive_symmetric_delimiter_pipeline(
        "\\*",
        "*",
        "b",
        ["WriterlyBlankLine"],
        ["MathBlock", "Math"],
      )
    ],
    [
      dl.unescape_delimiters__outside(["_", "*"], ["MathBlock", "Math"]),
      // dl.insert_word_joiner_into_adjacent_text_nodes(["Math", "i", "b"]),
      dl.wrap_adjacent_non_whitespace_text_with(#(["Math"], "NoBreak")),
      // cleaning 'p' second time around (not sure all the steps are necessary this time):
      dl.concatenate_text_nodes(),
      dl.delete_empty_lines_before_after(p_cannot_contain),
      dl.delete_text_nodes_with_singleton_empty_line(),
      dl.trim("p"),
      dl.delete_if_empty("p"),
      // (end cleaning)
      dl.unwrap_if_no_child_meets_condition(
        #("p", core.is_t_or_is_one_of(_, span_like_elements)),
      ),
      dl.unwrap_if_descendant_of(#("p", ["td", "li"])),
      dl.rename_if_child_of(#("p", "Item", "Grid")),
      dl.wrap_children_up_to(#(
        "Exercise",
        "Solution",
        "ExerciseStatement",
        core.GoBack,
      )),
      dl.cut_paste_attribute_from_self_to_child(#(
        "Exercise",
        "ExerciseStatement",
        "id",
      )),
      dl.absorb_into_previous_sibling(["ImageRight", "ImageLeft"]),
      dl.append_attribute_if_child_of(#(
        "ImageRight",
        "MathBlock",
        "at-least-as-wide",
        "true",
      )),
      dl.append_attribute_if_child_of(#(
        "ImageLeft",
        "MathBlock",
        "at-least-as-wide",
        "true",
      )),
      dl.append_attribute_if_preceded_by_same__outside(
        #("p", "class", "indent-10"),
        ["CentralDisplay", "CentralDisplayItalic"],
      ),
      dl.add_between_all_pairs_2(#(
        [
          "MathBlock", "Example", "Note", "SolutionNote", "Image", "table",
          "Table", "Grid", "CentralDisplayItalic", "CentralDisplay", "List",
          "StarDivider", "TildeDivider",
        ],
        ["p"],
        "Pause",
      )),
      dl.rename_if_child_of_any(
        #("p", "OuterP", [
          "Section",
          "ExerciseStatement",
          "Solution",
          "Example",
          "Chapter",
          "Bootcamp",
          "Appendix",
          "SolutionNote",
        ]),
      ),
      // dl.add_between_tag_and_text_node(#("MathBlock", "Pause")),
      dl.add_before_but_not_before_first_child__batch([
        #("Exercises", "Pause"),
        #("Example", "Pause"),
        #("Grid", "Pause"),
        #("List", "Pause"),
        #("MathBlock", "Pause"),
        #("Note", "Pause"),
        #("CentralDisplayItalic", "Pause"),
        #("CentralDisplay", "Pause"),
        #("Image", "Pause"),
        #("SolutionNote", "Pause"),
        #("StarDivider", "Pause"),
        #("TildeDivider", "Pause"),
        #("Table", "Pause"),
        #("table", "Pause"),
      ]),
      dl.add_before_but_not_before_first_of_kind(#("Section", "Pause")),
      dl.wrap_if_text_contains(#("MathBlock", "TextParent", "\\tag{")),
      dl.tokenize_href_surroundings(),
    ],
    [
      dl.rearrange_links_4_pre_tokenized_src__batch([
        #(
          "Note <a href=0>_0_</a> of Exercise <a href=1>_1_</a> of Chapter <a href=2>_2_</a>",
          "<a href=0>Note _0_ of Exercise _1_ of Chapter _2_</a>",
        ),
        #(
          "Note <a href=0>_0_</a>, Exercise <a href=1>_1_</a>, Chapter <a href=2>_2_</a>",
          "<a href=0>Note _0_, Exercise _1_, Chapter _2_</a>",
        ),
        #(
          "Note <a href=0>_0_</a> of Exercise <a href=1>_1_</a>",
          "<a href=0>Note _0_ of Exercise _1_</a>",
        ),
        #(
          "Note <a href=0>_0_</a> of Exercise <a href=1>_1_</a>",
          "<a href=0>Note _0_ of Exercise _1_</a>",
        ),
        #(
          "Exercise <a href=1>_1_</a> of Chapter <a href=2>_2_</a>",
          "<a href=1>Exercise _1_ of Chapter _2_</a>",
        ),
        #(
          "Example <a href=1>_1_</a> of Chapter <a href=2>_2_</a>",
          "<a href=1>Example _1_ of Chapter _2_</a>",
        ),
        #(
          "Chapter <a href=1>_1_</a>, Exercise <a href=2>_2_</a>",
          "<a href=2>Chapter _1_, Exercise _2_</a>",
        ),
        #(
          "Chapter <a href=1>_1_</a>, Example <a href=2>_2_</a>",
          "<a href=2>Chapter _1_, Example _2_</a>",
        ),
        #("Chapter <a href=1>_1_</a>", "<a href=1>Chapter _1_</a>"),
        #("Bootcamp <a href=1>_1_</a>", "<a href=1>Bootcamp _1_</a>"),
        #("Exercise <a href=1>_1_</a>", "<a href=1>Exercise _1_</a>"),
        #("Example <a href=1>_1_</a>", "<a href=1>Example _1_</a>"),
        #("Note <a href='1'>_1_</a>", "<a href='1'>Note _1_</a>"),
      ]),
      dl.detokenize_href_surroundings(),
      dl.insert_word_joiner_into_adjacent_text_nodes(["a", "InChapterLink"]),
      local_dl.lbp_generate_table_of_contents(#(
        "HamburgerPanelAuthorSuppliedContents",
        "HamburgerPanelTitle",
        "HamburgerPanelItem",
        None,
      )),
      local_dl.lbp_generate_table_of_contents(#(
        "TOC",
        "TOCTitle",
        "TOCItem",
        Some("Spacer"),
      )),
      local_dl.lbp_generate_prev_next_attributes(),
      dl.auto_generate_child_if_missing_from_first_descendant_of_type(#(
        "Section",
        "BreadcrumbTitle",
        "b",
      )),
      local_dl.lbp_generate_breadcrumbs(),
      dl.unwrap("BreadcrumbTitle"),
      dl.unwrap("Scope"),
      dl.delete_attribute__outside("type", ["List"]),
      dl.delete_attribute__batch([
        "counter",
        "handle",
        "t",
        "_",
        "title",
        "test",
      ]),
      dl.rename_attributes_by_function(core.kebab_case_to_camel_case),
    ],
    case author_mode {
      True -> [
        local_dl.lbp_source_provenance_wrap_lines__outside("./src/content/", [
          "Math",
          "MathBlock",
        ]),
        local_dl.lbp_source_provenance_append_img_spans(#("./", "")),
        dl.append_custom(#(
          "MathBlock",
          V(our_blame, "MathJaxSvgExportTooltip", [], []),
          core.GoBack,
        )),
      ]
      False -> []
    },
    [
      local_dl.lbp_img_build(#(
        "..",
        "../public",
        "images",
        "build-img",
        "../image-map.json",
        !only && remove_unused,
        remove_unused,
        False,
      )),
      dl.ensure_attribute_value_starts_with(#("src", "/")),
    ],
  ]
  |> list.flatten
}
