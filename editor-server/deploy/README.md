# Editor container rehearsal

This is separate from the official book Dockerfile and the editor on port 3019.
It uses Node 24.10.0, Gleam 1.18.1, Erlang/Elixir, libvips and native build tools.
The image contains the editor service, not the book checkout or credentials.
The book is cloned when the service starts. Builds and Git operations run as
UID 1000; a small root entrypoint initializes volume/secret ownership.

## Rehearse locally

Keep at least 8 GiB free on the host before starting the VM, and 6 GiB after Docker is running. The rehearsal checks the latter before preparing its Git bundle. Install a Docker-compatible runtime, Docker Compose and Buildx. On macOS with Colima:

```sh
colima start --cpu 2 --memory 6 --disk 40
node editor-server/deploy/rehearse.mjs
```

If an interrupted rehearsal already populated the image and volume, rerun with
`--resume` (requires 2 GiB of additional free space). This reruns the checks using
existing caches; its first-build timing is therefore not a cold-build measurement.
The image preinstalls Hex and Rebar so Elixir cannot pause for installation prompts.

The script creates a bundle from local `codex-suggestions`, initializes a disposable
bare remote **inside the container volume**, commits a newline in that disposable
copy, syncs to that remote, builds bt3, replaces the container, and builds again.
It verifies source and preview persistence, hostname isolation and compiler/npm
cache reuse. It never pushes to GitHub or edits the desktop checkout.
Logs, memory samples, build times and disk usage are written under
`.editor-data/container-rehearsal/`. This directory and the secret files are ignored.

Open http://localhost:3020. The token is in
`.editor-data/container-secrets/editor-token`. Preview URLs use
`http://b-<id>.localhost:3020`; Docker forwards both hostnames to the same service.

```sh
# Inspect / stop the rehearsal, retaining its named volume:
docker compose -f editor-server/deploy/compose.yaml -f editor-server/deploy/rehearsal.yaml logs
docker compose -f editor-server/deploy/compose.yaml -f editor-server/deploy/rehearsal.yaml down
```

Do not use `down --volumes` unless deliberately discarding all rehearsal drafts,
previews, repository and caches.

## Connect a separate container instance to GitHub

Use a different Compose project name so it cannot inherit the rehearsal remote:

```sh
node editor-server/deploy/setup.mjs
# Populate .editor-data/container-secrets/github-token externally if pushes are wanted.
docker compose -p book-editor-github -f editor-server/deploy/compose.yaml up --build -d
```

The empty GitHub secret permits public cloning only. For GitHub sync, supply a
fine-grained token restricted to this repository with Contents read/write. It is
mounted at runtime, read by Git's askpass helper, and never placed in a clone URL,
Docker build argument, image layer or tracked file. Do not copy your whole ~/.ssh.
The setup script preserves existing secrets. Stop the rehearsal first or choose
a different `EDITOR_PUBLIC_PORT`; default 3020 is bound to loopback only.

## Moving this image to a server later

Keep `/data` at the same absolute path across container replacements: Git worktrees
contain absolute paths. Use a persistent disk/volume, and back it up while the
service is stopped (including the repository, drafts and state.json). Keep tokens
separately. An image update does not synchronize or rewrite book branches.

Set `EDITOR_ORIGIN=https://edit.example.org` and
`EDITOR_PREVIEW_DOMAIN=preview.example.org`. Route the editor hostname and
`*.preview.example.org` through an HTTPS reverse proxy to port 3019, preserving Host.
TLS certificates, wildcard DNS and provider configuration are intentionally left
for the actual deployment; the included Compose file is a local HTTP rehearsal.

The 4 GiB container limit and two CPUs are an initial test budget, not measured
production requirements. The Colima VM gets 6 GiB to leave room for Docker.
Measure a full-book build before sizing the real server; bt3 is only a smoke test.

The local ARM64 rehearsal on 2026-11-24 passed Git sync, preview hostname isolation,
container replacement, commit/preview persistence and dependency-cache reuse.
Two builds with populated dependency caches each took about 59 seconds; sampled
peak container memory was about 1 GiB. `/data` occupied 2.5 GiB including test
history and previews. These are not cold-build or full-book measurements.

References: [Gleam container images](https://github.com/gleam-lang/gleam/pkgs/container/gleam),
[Compose secrets](https://docs.docker.com/compose/how-tos/use-secrets/),
[Compose volumes](https://docs.docker.com/reference/compose-file/volumes/).
