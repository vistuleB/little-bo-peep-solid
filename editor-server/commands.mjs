// This is an argument parser, never a shell command interpreter.
export function buildArguments(command) {
  if (
    typeof command !== "string" ||
    command.length > 500 ||
    /[^\w\s.^/=-]/.test(command) ||
    /[\r\n]/.test(command)
  ) {
    throw new Error(
      "Use gleam run with plain --only selectors; shell syntax is not supported.",
    );
  }
  const words = command.trim().split(/[ \t]+/);
  if (words.shift() !== "gleam" || words.shift() !== "run")
    throw new Error("Build commands must start with gleam run.");
  if (!words.length) return ["run"];
  if (words.shift() !== "--" || words.shift() !== "--only" || !words.length)
    throw new Error(
      "Supported form: gleam run -- --only <chapter> [selectors].",
    );
  for (const word of words) {
    if (
      !/^[A-Za-z0-9_][A-Za-z0-9_./^=-]*$/.test(word) ||
      word.includes("..") ||
      word.startsWith("-")
    )
      throw new Error("Invalid build selector.");
  }
  return ["run", "--", "--only", ...words];
}
