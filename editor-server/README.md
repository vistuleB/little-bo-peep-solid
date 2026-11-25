# Editing server V1

This service owns a full clone and independent draft worktrees. It does not use or modify the checkout from which it is launched. `develop` and `codex-suggestions` need the editor infrastructure merged before their previews can be built.

## Google sign-in

Run `npm ci --prefix editor-server` when setting up the editor locally. The deployment image installs these separate server dependencies automatically.

Configure a Google Auth Platform **Web application** client with `https://edit.toiletscrollcalculus.com` as an authorized JavaScript origin. The popup callback flow requires no redirect URI or client secret. Set `EDITOR_GOOGLE_CLIENT_ID` and `EDITOR_GOOGLE_EMAIL` together (in the deployment's `server.env` for Compose). Only that account is accepted. The first login must use Gmail or Google Workspace; its stable Google subject ID is stored in the data directory's `google-account.json`. Changing accounts requires explicit operator removal of that binding as well as updating the email setting. Google identity tokens are verified by Google's official library; each sign-in also needs a short-lived, single-use nonce bound to the browser cookie.

Without these settings, token login works as before. It remains available as recovery when Google is configured. No Gmail, Drive, or other Google API access is requested.

## Local use

Install the same Node (22.12+), npm, Gleam, Erlang/OTP and image-processing dependencies used by the book renderer. Dependencies in `renderer/gleam.toml` are resolved by Gleam. Each branch retains a detached build workspace, including `node_modules` and `renderer/build`. The service runs `npm ci` initially and when the package manifests, npm configuration, or Node/npm version change. Gleam reuses its incremental compiler and package cache. Changed source inputs are restored to the requested commit; generated output and other build artifacts survive ordinary builds, including deliberately deleted routes. Discarded browser edits are restored from Git before rendering. The server supplies `WLY_IMAGE_CACHE_DIR` outside the worktrees for shared image storage. The Gleam renderer alone computes cache keys from source contents and the renderer/dependency/toolchain recipe, verifies output hashes, and restores or rebuilds images. Desktop builds use the same logic, defaulting to `renderer/build/image-cache`. Timestamp-only image-map entries rebuild once to acquire hashes. Published runtime files remain separate from the renderer workspace. Production previews are immutable copies; live previews update at a stable branch URL.

```
EDITOR_REPO_URL=git@github.com:vistuleB/little-bo-peep-solid.git npm run editor
```

For persistent local configuration, put `EDITOR_REPO_URL` and optionally `EDITOR_DATA_DIR` and `EDITOR_TOKEN` in the ignored `.env.editor.local` file. `npm run editor` loads it; explicit shell variables take precedence. An existing data directory retains its configured Git remote, so use a fresh data directory when changing remotes.

Open http://localhost:3019 and enter the token printed in the terminal. Without `EDITOR_TOKEN`, a fresh token is generated on each start. Drafts and successful previews persist in `.editor-data/`; browser edits and login sessions do not. Set `EDITOR_DATA_DIR` to use another directory. For safe local testing, point `EDITOR_REPO_URL` to a disposable bare Git repository rather than GitHub.

A branch is a server draft of a remote branch. Refresh fetches remote state; Sync fetches, merges in a disposable worktree, pushes the selected revision normally, then makes it the new history baseline. Forward revisions remain local and are replayed onto the new baseline if necessary; a replay conflict aborts before pushing. Squash & sync combines only unpublished revisions and accepts an optional message. Plain sync uses that message only if a merge commit is needed. A conflict, missing remote, or rejected push leaves the draft editable. There is no force push and no mobile conflict editor. Ahead/behind values are relative to the last fetch; `?` means there is no remote comparison. No sync error is persisted.

Only tracked existing `src/content/**/*.wly` files are editable. Source buffers remain in browser memory until Commit. Changing branch, navigating history, or syncing with edits requires Commit / Discard changes / Cancel. The selected branch has a baseline, ordered local commits, and a current position; Discard / Reinstate move that position. Commit replaces forward history after confirmation; clean Set only truncates forward history, also after confirmation. `refs/editor-history/<branch-id>` pins forward commits, and state.json stores the history. Successful sync resets Discard to zero while retaining Reinstate. Reloading loses uncommitted edits. Commit checks the branch revision to avoid overwriting another session's changes. Server filesystem changes left by a crash block commits/sync until manually recovered.

The UI commits edits before building, warning before replacing forward history. A clean historical revision builds without committing or truncating history. The build API retains snapshot support for compatibility with older clients. Allowed command forms are `gleam run` and `gleam run -- --only <selectors>`. Commands are parsed into arguments and run without a shell; `--local` and other CLI options are rejected. The server sets `PLACE=EDITOR_SERVER` and runs the renderer. Successful runtime files are copied into a separate persistent preview directory, preserving unchanged files and Vite caches. Normal previews use a persistent Vinxi development process with browser-side MathJax, followed by an iframe refresh; they skip production bundling and prerendering. One branch process stays active at a time to bound memory use; other branches start on demand. “Check production build” still runs the full production pipeline and publishes static output. Previous successful previews remain available after failures. Source editing can continue during a build. Build logs are session-only. Five commands are retained per branch.

Each successful preview includes a manifest of its revision, command, pages, and source locations. Goggles use those locations to open the source editor. When the preview is older than the draft, the UI warns that line positions can have shifted. Source locations are public alongside the preview. Built text and assets use their existing root-relative URLs on a separate preview hostname.

## PLACE

- `LOCAL`: desktop source-link tooltips and local editor middleware. `gleam run -- --local` remains a convenience when PLACE is unset or LOCAL.
- `EDITOR_SERVER`: source fragments for goggles; no desktop editor commands.
- `APP_SERVER`: public application, no source links (default).

Set `PLACE=LOCAL` in your desktop `.env`, replacing `AUTHOR_MODE=true`. PLACE is independent of NODE_ENV. The renderer and app config both read it; explicit process environment overrides `.env`. `VITE_ENV` remains a separate existing flag.

## Container rehearsal

See [deploy/README.md](deploy/README.md) for the separate Linux image, persistent volume, runtime credentials, and an automated build/restart rehearsal on port 3020.

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

Route `edit.example.org` and `*.preview.example.org` to this service, preserving Host. Supply TLS and wildcard DNS for previews. The preview origin is deliberately separate: book scripts cannot access editor cookies or APIs. Cookies are HttpOnly, host-only and SameSite=Strict; POSTs require the configured editor Origin. Preview hosts accept GETs only. Live previews proxy to a loopback development process; the runtime directory excludes Git metadata, Writerly sources, and .env files, and Vite filesystem access is restricted to runtime files and dependencies. Vite HMR WebSockets are proxied only for the matching preview origin and known router ports. Explicit render completion also reloads the iframe to refresh source provenance. Restart invalidates sessions. Git credentials belong on the server and must permit normal pushes to the chosen branches.

The repository is trusted executable code: builds run its npm scripts and Gleam code. Do not expose this service to untrusted repository authors. Hosting, credentials, TLS and backups still require an actual deployment choice; this implementation does not change the official server.

## Checks

`npm run test:editor` uses a disposable local bare remote. It tests command rejection, optimistic commits, sync, divergent merges, conflict isolation, continued editing, missing branches, and restart persistence. No test pushes to GitHub.

“Build from scratch” on the branch page removes the selected branch’s detached build workspace and dependency cache stamp, then immediately rebuilds using a fresh image-cache namespace. It is unavailable during builds. Source drafts, Git history, and published previews are preserved; the previous live preview’s dependencies are retained separately until replaced.

Preview focuses the iframe on entry. Keyboard events received by the shell are forwarded to the preview while it is visible, except during builds, sign-in, and open dialogs. Events already inside the iframe are not duplicated.

Source/Preview navigation always tracks the visible source location in both directions. Tracking scans visible, distinct source locations below the fixed header, uses the first filename to collect three, and chooses their lowest line number. With fewer locations it uses the strongest available match. Editor-to-preview seeks the closest rendered line. The goggles protocol remains available internally, but its UI control is hidden.

Entering Preview builds automatically when the selected command, revision, or browser edits differ from the last successful build. Uncommitted edits are committed first. Typing during the save request remains a separate unsaved change. Local saves do not freeze the interface or wait for a full branch refresh; returned branch counts are applied immediately, and visiting Branches refreshes counts without fetching GitHub. An inset terminal shows progress and offers Cancel. Cancellation stops the build process group and retains the previous successful preview. Failed/cancelled builds offer retry or the previous preview.
