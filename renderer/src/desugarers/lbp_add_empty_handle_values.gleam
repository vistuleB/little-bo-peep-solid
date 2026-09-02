import gleam/list
import gleam/string
import vxml.{type Attr, type VXML, Attr, T, V}
import vxml_pipeline/authoring
import vxml_pipeline/core.{type Desugarer, type DesugarerTransform}
import vxml_pipeline/nodemaps_2_transform as n2t
import vxml_pipeline/testing

pub const name = "lbp_add_empty_handle_values"

// 🏖️🏖️🏖️🏖️🏖️🏖️🏖️🏖️🏖️🏖️🏖️🏖️
// 🏖️🏖️ Desugarer 🏖️🏖️
// 🏖️🏖️🏖️🏖️🏖️🏖️🏖️🏖️🏖️🏖️🏖️️️️️🏖️

/// Gives each still-valueless LBP handle an explicit empty
/// value before strict handle processing begins.
pub fn constructor() -> Desugarer {
  authoring.no_param_desugarer(
    name: name,
    transform: inner_param_to_transform(),
  )
}

fn inner_param_to_transform() -> DesugarerTransform {
  let nodemap: n2t.OneToOneNoErrorNodemap = nodemap
  n2t.one_to_one_no_error_nodemap_2_desugarer_transform(nodemap)
}

fn nodemap(vxml: VXML) -> VXML {
  case vxml {
    T(_, _) -> vxml
    V(_, _, attrs, _) -> V(..vxml, attrs: list.map(attrs, normalize_attr))
  }
}

fn normalize_attr(attr: Attr) -> Attr {
  case attr.key == "handle" && !string.contains(attr.val, " ") {
    True -> Attr(..attr, val: attr.val <> " <<>>")
    False -> attr
  }
}

// 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊
// 🌊🌊🌊 tests 🌊🌊🌊🌊
// 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊

fn assertive_tests_data() -> List(testing.AssertiveTestDataNoParam) {
  [
    testing.data_no_param(
      source: "
                <> root
                  <> Chapter
                    handle=chapter
                  <> Section
                    handle=section <<assigned value>>
                  <> Example
                    handle=legacy unwrapped value
                  <> Other
                    title=ordinary
                ",
      expected: "
                <> root
                  <> Chapter
                    handle=chapter <<>>
                  <> Section
                    handle=section <<assigned value>>
                  <> Example
                    handle=legacy unwrapped value
                  <> Other
                    title=ordinary
                ",
    ),
  ]
}

pub fn assertive_tests() {
  testing.collection_no_param(name, assertive_tests_data(), constructor)
}
