#!/bin/sh
# Credentials are mounted at runtime, never embedded in the image or remote URL.
case "$1" in
  *Username*) printf '%s\n' 'x-access-token' ;;
  *Password*) cat /tmp/editor-github-token ;;
  *) exit 1 ;;
esac
