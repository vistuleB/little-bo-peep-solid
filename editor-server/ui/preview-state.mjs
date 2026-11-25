// Shared fingerprint format for browser edits and server build snapshots.
export async function sourceKey(revision, changes = []) {
  const input = JSON.stringify([
    revision,
    changes
      .map(({ file, content }) => [file, content])
      .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)),
  ]);
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(input),
  );
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
export async function needsBuild(preview, branch, revision, changes, command) {
  if (
    !preview ||
    preview.branch !== branch ||
    preview.revision !== revision ||
    preview.command !== command
  )
    return true;
  if (!preview.sourceKey) return changes.length > 0 || !!preview.draft;
  return preview.sourceKey !== (await sourceKey(revision, changes));
}
export const running = (status) =>
  ["queued", "building", "cancelling", "publishing"].includes(status);
