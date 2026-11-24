import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { GoogleLogin } from "../google-auth.mjs";

test("Google login validates audience, nonce, account and pins stable subject", async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "google-editor-"));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  let claims,
    rejectSignature = false;
  const verifier = {
    async verifyIdToken(options) {
      assert.deepEqual(options, {
        idToken: "signed-token",
        audience: "client.apps.googleusercontent.com",
      });
      if (rejectSignature) throw new Error("Invalid signature");
      return { getPayload: () => claims };
    },
  };
  const config = {
    clientId: "client.apps.googleusercontent.com",
    email: "owner@gmail.com",
    subjectFile: path.join(dir, "account.json"),
    verifier,
  };
  let login = new GoogleLogin(config);
  let nonce = login.challenge();
  claims = {
    sub: "owner-id",
    email: "owner@gmail.com",
    email_verified: true,
    nonce,
  };
  rejectSignature = true;
  await assert.rejects(login.verify("signed-token", nonce), /signature/);
  rejectSignature = false;
  for (const bad of [
    { nonce: "wrong" },
    { email: "other@gmail.com" },
    { email_verified: false },
    { sub: "" },
  ]) {
    const original = claims;
    claims = { ...claims, ...bad };
    await assert.rejects(login.verify("signed-token", nonce));
    claims = original;
  }
  await assert.rejects(login.verify("signed-token", "missing"));
  assert.equal(await login.verify("signed-token", nonce), "owner-id");
  await assert.rejects(login.verify("signed-token", nonce), /expired/);
  // Restart preserves the bound account; reassignment of its email cannot grant access.
  login = new GoogleLogin(config);
  nonce = login.challenge();
  claims = { ...claims, nonce, sub: "different-id" };
  await assert.rejects(login.verify("signed-token", nonce), /linked/);
  claims.sub = "owner-id";
  assert.equal(await login.verify("signed-token", nonce), "owner-id");
  nonce = login.challenge();
  login.challenges.set(nonce, 0);
  await assert.rejects(login.verify("signed-token", nonce), /expired/);
});

test("Google login is disabled without configuration and rejects partial configuration", async () => {
  const login = new GoogleLogin({});
  assert.equal(login.enabled, false);
  await assert.rejects(login.verify("anything", "nonce"));
  assert.throws(() => new GoogleLogin({ clientId: "client" }), /both/);
});
