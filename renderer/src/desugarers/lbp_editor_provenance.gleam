import gleam/int
import vxml.{type VXML, Attr, T, V}
import vxml/blame as bl
import vxml_pipeline/authoring
import vxml_pipeline/core.{Continue, GoBack}
import vxml_pipeline/nodemaps_2_transform as n2t
import vxml_pipeline/testing

pub const name = "lbp_editor_provenance"

pub fn constructor() {
  authoring.no_param_desugarer(
    name,
    n2t.early_return_one_to_many_no_error_nodemap_2_desugarer_transform_outside(
      nodemap,
      ["script", "style", "pre", "code", "option", "textarea"],
    ),
  )
}

fn wrap(node: VXML, blame: bl.Blame, block: Bool) -> VXML {
  case blame {
    bl.Src(_, path, line, _, _) ->
      V(
        blame,
        "SourceFragment",
        [
          Attr(blame, "file", path),
          Attr(blame, "line", int.to_string(line)),
          Attr(blame, "block", case block {
            True -> "true"
            False -> "false"
          }),
        ],
        [node],
      )
    _ -> node
  }
}

fn nodemap(node: VXML) {
  case node {
    V(_, "SourceFragment", _, _) -> #([node], GoBack)
    V(b, tag, _, _)
      if tag == "Math"
      || tag == "MathBlock"
      || tag == "Image"
      || tag == "InlineImage"
      || tag == "ImageLeft"
      || tag == "ImageRight"
    -> #([wrap(node, b, tag == "MathBlock" || tag == "Image")], GoBack)
    T(_, [line, ..]) -> #([wrap(node, line.blame, False)], GoBack)
    _ -> #([node], Continue)
  }
}

pub fn assertive_tests() {
  testing.collection(
    name,
    [
      testing.data(
        param: Nil,
        source: "
      <> OuterP
        <>
          'first line'
          'second line'
    ",
        expected: "
      <> OuterP
        <> SourceFragment
          file=tst.source
          line=3
          block=false
          <>
            'first line'
            'second line'
    ",
      ),
    ],
    fn(_) { constructor() },
  )
}
