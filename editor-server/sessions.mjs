import { promises as fs } from "node:fs";
import { createHash, randomBytes } from "node:crypto";

export const SESSION_SECONDS = 90 * 24 * 60 * 60;
const DAY = 24 * 60 * 60 * 1000;
const digest = (token) => createHash("sha256").update(token).digest("hex");
export class Sessions {
  constructor(file, secure, now = Date.now) {
    this.file = file;
    this.secure = secure;
    this.now = now;
    this.records = {};
    this.queue = Promise.resolve();
  }
  async init() {
    try {
      this.records = JSON.parse(await fs.readFile(this.file, "utf8"));
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  cookie(token, seconds = SESSION_SECONDS) {
    return `editor_session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${seconds}${this.secure ? "; Secure" : ""}`;
  }
  token(req) {
    return (
      (req.headers.cookie || "")
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith("editor_session="))
        ?.slice(15) || ""
    );
  }
  exclusive(fn) {
    const result = this.queue.then(fn);
    this.queue = result.catch(() => {});
    return result;
  }
  async save() {
    const active = Object.fromEntries(
      Object.entries(this.records).filter(([, r]) => r.expires > this.now()),
    );
    await fs.writeFile(this.file + ".tmp", JSON.stringify(active), {
      mode: 0o600,
    });
    await fs.rename(this.file + ".tmp", this.file);
    this.records = active;
  }
  issue() {
    return this.exclusive(async () => {
      const token = randomBytes(32).toString("base64url");
      this.records[digest(token)] = {
        renewed: this.now(),
        expires: this.now() + SESSION_SECONDS * 1000,
      };
      await this.save();
      return this.cookie(token);
    });
  }
  authenticate(req, res) {
    return this.exclusive(async () => {
      const token = this.token(req);
      if (!/^[A-Za-z0-9_-]{43}$/.test(token)) return false;
      const record = this.records[digest(token)];
      if (!record || record.expires <= this.now()) return false;
      // Renew at most daily, avoiding disk writes on every API poll.
      if (this.now() - record.renewed >= DAY) {
        record.renewed = this.now();
        record.expires = this.now() + SESSION_SECONDS * 1000;
        await this.save();
        res.setHeader("set-cookie", this.cookie(token));
      }
      return true;
    });
  }
  revoke(req, all = false) {
    return this.exclusive(async () => {
      if (all) this.records = {};
      else delete this.records[digest(this.token(req))];
      await this.save();
    });
  }
}
