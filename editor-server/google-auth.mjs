import { randomBytes } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { OAuth2Client } from "google-auth-library";

export class GoogleLogin {
  constructor({ clientId, email, subjectFile, verifier = new OAuth2Client() }) {
    this.clientId = clientId || "";
    this.email = (email || "").trim().toLowerCase();
    this.subjectFile = subjectFile;
    this.verifier = verifier;
    this.challenges = new Map();
    if (Boolean(this.clientId) !== Boolean(this.email))
      throw new Error(
        "Set both EDITOR_GOOGLE_CLIENT_ID and EDITOR_GOOGLE_EMAIL.",
      );
  }
  get enabled() {
    return Boolean(this.clientId);
  }
  challenge() {
    for (const [nonce, expires] of this.challenges)
      if (expires < Date.now()) this.challenges.delete(nonce);
    if (this.challenges.size >= 1000)
      this.challenges.delete(this.challenges.keys().next().value);
    const nonce = randomBytes(32).toString("base64url");
    this.challenges.set(nonce, Date.now() + 600_000);
    return nonce;
  }
  async verify(credential, nonce) {
    if (
      !this.enabled ||
      typeof credential !== "string" ||
      credential.length > 16000 ||
      !nonce ||
      !(this.challenges.get(nonce) > Date.now())
    )
      throw new Error("Google sign-in expired. Reload and try again.");
    const ticket = await this.verifier.verifyIdToken({
      idToken: credential,
      audience: this.clientId,
    });
    const claims = ticket.getPayload();
    if (
      !claims ||
      claims.nonce !== nonce ||
      typeof claims.sub !== "string" ||
      !claims.sub ||
      claims.email_verified !== true ||
      claims.email?.toLowerCase() !== this.email
    )
      throw new Error("This Google account is not allowed to use the editor.");
    // Pin Google's stable ID, so email reassignment cannot transfer access.
    let saved;
    try {
      saved = JSON.parse(await fs.readFile(this.subjectFile, "utf8"));
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    if (!saved) {
      if (!claims.email.endsWith("@gmail.com") && !claims.hd)
        throw new Error(
          "Initial Google account linking requires a Gmail or Google Workspace account.",
        );
      await fs.mkdir(path.dirname(this.subjectFile), { recursive: true });
      try {
        await fs.writeFile(
          this.subjectFile,
          JSON.stringify({ email: this.email, sub: claims.sub }),
          { flag: "wx", mode: 0o600 },
        );
      } catch (error) {
        if (error.code !== "EEXIST") throw error;
      }
      saved = JSON.parse(await fs.readFile(this.subjectFile, "utf8"));
    }
    if (saved.sub !== claims.sub || saved.email !== this.email)
      throw new Error(
        "This Google account does not match the linked editor account.",
      );
    if (
      !(this.challenges.get(nonce) > Date.now()) ||
      !this.challenges.delete(nonce)
    )
      throw new Error("Google sign-in expired. Reload and try again.");
    return claims.sub;
  }
}
