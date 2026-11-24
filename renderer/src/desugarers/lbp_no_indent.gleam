import vxml.{type VXML, T, V}
import vxml_pipeline/authoring
import vxml_pipeline/core.{type Desugarer}
import vxml_pipeline/nodemaps_2_transform as n2t
import vxml_pipeline/testing

pub const name = "lbp_no_indent"

pub fn constructor() -> Desugarer {
  authoring.no_param_desugarer(
    name: name,
    transform: n2t.one_to_one_no_error_nodemap_2_desugarer_transform(nodemap),
  )
}

fn nodemap(node: VXML) -> VXML {
  case node {
    T(..) -> node
    V(_, _, _, children) ->
      V(..node, children: mark_next_paragraph(children, False))
  }
}

// The marker applies once, within its own parent. Blank lines have already
// been removed; intervening blocks do not consume the next-paragraph marker.
fn mark_next_paragraph(nodes: List(VXML), pending: Bool) -> List(VXML) {
  case nodes {
    [] -> []
    [V(_, "NoIndent", _, []), ..rest] -> mark_next_paragraph(rest, True)
    [V(_, "p", _, _) as paragraph, ..rest] if pending -> [
      core.v_append_classes(paragraph, "indent-0"),
      ..mark_next_paragraph(rest, False)
    ]
    [node, ..rest] -> [node, ..mark_next_paragraph(rest, pending)]
  }
}

pub fn assertive_tests() {
  testing.collection_no_param(name, [
    testing.data_no_param(
      source: "
        <> root
          <> NoIndent
          <> MathBlock
          <> p
            class=existing
            <>
              'First'
          <> p
            class=indent-10
            <>
              'Second'
          <> Section
            <> NoIndent
          <> p
            <>
              'Outside'
      ",
      expected: "
        <> root
          <> MathBlock
          <> p
            class=existing indent-0
            <>
              'First'
          <> p
            class=indent-10
            <>
              'Second'
          <> Section
          <> p
            <>
              'Outside'
      ",
    ),
  ], constructor)
}
