# Editing server V1

This service owns a full clone and independent draft worktrees. It does not use or modify the checkout from which it is launched. `develop` and `codex-suggestions` need the editor infrastructure merged before their previews can be built.

## Local use

Install the same Node (22.12+), npm, Gleam, Erlang/OTP and image-processing dependencies used by the book renderer. Dependencies in `renderer/gleam.toml` are resolved by Gleam. Each branch retains a detached build workspace, including `node_modules` and `renderer/build`. The service runs `npm ci` initially and when the package manifests, npm configuration, or Node/npm version change. Gleam reuses its incremental compiler and package cache. Other untracked/ignored build files are cleared before each build, and tracked files are reset to the requested commit.

```
EDITOR_REPO_URL=git@github.com:vistuleB/little-bo-peep-solid.git npm run editor
```

Open http://localhost:3019 and enter the token printed in the terminal. Without `EDITOR_TOKEN`, a fresh token is generated on each start. Drafts and successful previews persist in `.editor-data/`; browser edits and login sessions do not. Set `EDITOR_DATA_DIR` to use another directory. For safe local testing, point `EDITOR_REPO_URL` to a disposable bare Git repository rather than GitHub.

A branch is a server draft of a remote branch. Refresh fetches remote state; Sync fetches, merges in a disposable worktree, pushes normally, then advances the draft. A conflict, missing remote, or rejected push leaves the draft editable. There is no force push and no mobile conflict editor. Ahead/behind values are relative to the last fetch; `?` means there is no remote comparison. No sync error is persisted.

Only tracked existing `src/content/**/*.wly` files are editable. Source buffers remain in browser memory until Commit. Changing branch or syncing with edits requires Commit or Discard. Reloading loses uncommitted edits. Commit checks the branch revision to avoid overwriting another session's changes. Server filesystem changes left by a crash block commits/sync until manually recovered.

Build is explicit, from a committed revision in its separate build workspace. Allowed command forms are `gleam run` and `gleam run -- --only <selectors>`. Commands are parsed into arguments and run without a shell; `--local` and other CLI options are rejected. The server sets `PLACE=EDITOR_SERVER`, runs the renderer and the production app build, and publishes only a successful `.output/public` directory. Previous successful previews remain available after failures. Source editing can continue during a build. Build logs are session-only. Five commands are retained per branch.

Each successful preview includes a manifest of its revision, command, pages, and source locations. Goggles use those locations to open the source editor. When the preview is older than the draft, the UI warns that line positions can have shifted. Source locations are public alongside the preview. Built text and assets use their existing root-relative URLs on a separate preview hostname.

## PLACE

- `LOCAL`: desktop source-link tooltips and local editor middleware. `gleam run -- --local` remains a convenience when PLACE is unset or LOCAL.
- `EDITOR_SERVER`: source fragments for goggles; no desktop editor commands.
- `APP_SERVER`: public application, no source links (default).

Set `PLACE=LOCAL` in your desktop `.env`, replacing `AUTHOR_MODE=true`. PLACE is independent of NODE_ENV. The renderer and app config both read it; explicit process environment overrides `.env`. `VITE_ENV` remains a separate existing flag.

## Remote deployment

Keep the official product deployment separate. Run this service behind HTTPS with authenticated editing and public previews:

```
EDITOR_HOST=0.0.0.0
EDITOR_PORT=3019
EDITOR_ORIGIN=https://edit.example.org
EDITOR_PREVIEW_DOMAIN=preview.example.org
EDITOR_TOKEN=<long-random-secret>
EDITOR_DATA_DIR=/persistent/book-editor
EDITOR_REPO_URL=git@github.com:vistuleB/little-bo-peep-solid.git
EDITOR_GIT_NAME=Book author
EDITOR_GIT_EMAIL=author@example.org
```

Route `edit.example.org` and `*.preview.example.org` to this service, preserving Host. Supply TLS and wildcard DNS for previews. The preview origin is deliberately separate: book scripts cannot access editor cookies or APIs. Cookies are HttpOnly, host-only and SameSite=Strict; POSTs require the configured editor Origin. Preview hosts expose static GETs only. Restart invalidates sessions. Git credentials belong on the server and must permit normal pushes to the chosen branches.

The repository is trusted executable code: builds run its npm scripts and Gleam code. Do not expose this service to untrusted repository authors. Hosting, credentials, TLS and backups still require an actual deployment choice; this implementation does not change the official server.

## Checks

`npm run test:editor` uses a disposable local bare remote. It tests command rejection, optimistic commits, sync, divergent merges, conflict isolation, continued editing, missing branches, and restart persistence. No test pushes to GitHub.
