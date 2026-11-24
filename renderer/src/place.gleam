@external(erlang, "editor_environment", "get_place")
fn configured_place() -> String

pub fn resolve(local_flag: Bool) -> String {
  case configured_place(), local_flag {
    "", True -> "LOCAL"
    "", False -> "APP_SERVER"
    "LOCAL", _ -> "LOCAL"
    "EDITOR_SERVER", False -> "EDITOR_SERVER"
    "EDITOR_SERVER", True ->
      panic as "--local cannot be combined with PLACE=EDITOR_SERVER"
    "APP_SERVER", False -> "APP_SERVER"
    "APP_SERVER", True ->
      panic as "--local cannot be combined with PLACE=APP_SERVER"
    _, _ -> panic as "PLACE must be LOCAL, EDITOR_SERVER, or APP_SERVER"
  }
}
