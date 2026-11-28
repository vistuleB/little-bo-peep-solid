// Match a small rendered-text context near the blamed line. Whitespace is
// normalized with an offset map; markup and transformed text need not match.
export function sourceCaret(source, line, hint) {
  const lines = source.split("\n");
  const base = lines.slice(0, line - 1).join("\n").length + (line > 1 ? 1 : 0);
  if (
    !hint ||
    typeof hint.before !== "string" ||
    typeof hint.after !== "string"
  )
    return base;
  const normalize = (s) => s.replace(/\s+/g, " ");
  const before = normalize(hint.before.slice(-80));
  const after = normalize(hint.after.slice(0, 80));
  const from = Math.max(0, base - 2000),
    to = Math.min(source.length, base + 12000);
  let text = "";
  const offsets = [];
  for (let i = from; i < to; i++) {
    const char = /\s/.test(source[i]) ? " " : source[i];
    if (char === " " && text.endsWith(" ")) continue;
    offsets.push(i);
    text += char;
  }
  offsets.push(to);
  let best = base,
    score = -Infinity;
  for (let i = 0; i <= text.length; i++) {
    let left = 0,
      right = 0;
    while (
      left < before.length &&
      i > left &&
      text[i - left - 1] === before[before.length - left - 1]
    )
      left++;
    while (right < after.length && text[i + right] === after[right]) right++;
    // Require actual context, not a coincidental space or punctuation match.
    if (
      left + right < Math.min(8, before.length + after.length) ||
      left + right < 3
    )
      continue;
    const rank =
      left +
      right +
      Math.min(left, right) -
      Math.abs(offsets[i] - base) / 20000;
    if (rank > score) {
      score = rank;
      best = offsets[i];
    }
  }
  return best;
}
