import { mkdir, writeFile } from "node:fs/promises";
import { randomBytes } from "node:crypto";
import { fileURLToPath } from "node:url";
const dir = fileURLToPath(
  new URL("../../.editor-data/container-secrets/", import.meta.url),
);
await mkdir(dir, { recursive: true, mode: 0o700 });
for (const [name, value] of [
  ["editor-token", randomBytes(24).toString("base64url")],
  ["github-token", ""],
]) {
  try {
    await writeFile(dir + name, value + "\n", { flag: "wx", mode: 0o600 });
  } catch (error) {
    if (error.code !== "EEXIST") throw error;
  }
}
console.log(
  "Secret files prepared in .editor-data/container-secrets (existing values preserved).",
);
