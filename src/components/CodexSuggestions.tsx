import type { ParentProps } from "solid-js";

export default function CodexSuggestions(props: ParentProps) {
  return (
    <aside class="codex-suggestions text-column" aria-label="Codex suggestions">
      <div class="codex-suggestions-label">Codex suggestions · editorial draft</div>
      <div class="codex-suggestions-content">{props.children}</div>
    </aside>
  );
}

export const CodexSuggestion = CodexSuggestions;
