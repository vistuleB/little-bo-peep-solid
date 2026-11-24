# Separate from the official book application's Dockerfile.
FROM node:24.10.0-alpine AS node
FROM ghcr.io/gleam-lang/gleam:v1.18.1-elixir-alpine
COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/lib/node_modules/npm /usr/local/lib/node_modules/npm
RUN ln -s ../lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
 && ln -s ../lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx \
 && apk add --no-cache git openssh-client ca-certificates build-base pkgconf \
      vips-dev linux-headers bash tini su-exec fontconfig font-dejavu \
 && addgroup -g 1000 editor && adduser -D -u 1000 -G editor editor \
 && node --version && npm --version && gleam --version && elixir --version
WORKDIR /app
RUN su-exec editor mix local.hex --force \
 && su-exec editor mix local.rebar --force
COPY . /app/editor-server
RUN chmod +x /app/editor-server/deploy/entrypoint.sh /app/editor-server/deploy/git-askpass.sh
ENV EDITOR_HOST=0.0.0.0 EDITOR_PORT=3019 EDITOR_DATA_DIR=/data \
    EDITOR_TOKEN_FILE=/run/secrets/editor_token \
    GIT_ASKPASS=/app/editor-server/deploy/git-askpass.sh GIT_TERMINAL_PROMPT=0 \
    XDG_CACHE_HOME=/data/cache npm_config_cache=/data/npm-cache
EXPOSE 3019
HEALTHCHECK --interval=15s --timeout=5s --start-period=120s \
 CMD node /app/editor-server/deploy/healthcheck.mjs
ENTRYPOINT ["/sbin/tini", "-g", "--", "/app/editor-server/deploy/entrypoint.sh"]
CMD ["node", "editor-server/server.mjs"]
