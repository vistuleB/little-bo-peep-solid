#!/bin/sh
set -eu
mkdir -p "$EDITOR_DATA_DIR"
chown editor:editor "$EDITOR_DATA_DIR"
if [ -n "${EDITOR_TOKEN_FILE:-}" ]; then
  EDITOR_TOKEN=$(cat "$EDITOR_TOKEN_FILE")
  export EDITOR_TOKEN
fi
if [ -z "${EDITOR_TOKEN:-}" ]; then
  echo 'An editor login token is required; run the deployment setup script.' >&2
  exit 1
fi
if [ -f /run/secrets/github_token ]; then
  cp /run/secrets/github_token /tmp/editor-github-token
  chown editor:editor /tmp/editor-github-token
  chmod 600 /tmp/editor-github-token
fi
if [ -f /run/secrets/github_ssh_key ]; then
  cp /run/secrets/github_ssh_key /tmp/editor-github-key
  chown editor:editor /tmp/editor-github-key
  chmod 600 /tmp/editor-github-key
fi
exec su-exec editor "$@"
