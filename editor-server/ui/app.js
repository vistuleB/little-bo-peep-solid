import { needsBuild, running } from "./preview-state.mjs";
const $ = (selector) => document.querySelector(selector);
const state = {
  branch: null,
  branches: [],
  file: null,
  files: [],
  revision: null,
  documents: new Map(),
  recents: new Map(),
  lastFiles: new Map(),
  preview: null,
  previewPath: null,
  goggles: false,
  followSource: true,
  tracking: { status: "searching" },
  followPreview: true,
  pendingTarget: null,
  mode: "branches",
  job: null,
  jobBranch: null,
  jobStatus: null,
  buildStarting: false,
  buildPanel: false,
};
const dirty = () =>
  [...state.documents].filter(([, doc]) => doc.content !== doc.original);
const notice = (text) => {
  $("#notice").textContent = text || "";
  $("#notice").hidden = !text;
};
async function api(route, data) {
  const response = await fetch(
    "/api/" + route,
    data === undefined
      ? {}
      : {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
  );
  const result = await response.json();
  if (!response.ok) {
    if (response.status === 401) $("#login").hidden = false;
    throw new Error(result.error || "Request failed");
  }
  return result;
}
let activeOperations = 0;
async function perform(fn) {
  activeOperations++;
  $("#app").inert = true;
  notice("");
  document.body.classList.add("busy");
  try {
    return await fn();
  } catch (error) {
    notice(error.message);
    return false;
  } finally {
    activeOperations--;
    if (!activeOperations) {
      $("#app").inert = false;
      document.body.classList.remove("busy");
    }
  }
}
const button = (text, fn, className = "") => {
  const b = document.createElement("button");
  b.textContent = text;
  b.className = className;
  b.onclick = () => perform(fn);
  return b;
};
function branchInfo() {
  return state.branches.find((b) => b.name === state.branch);
}
const canPreview = () =>
  !!state.preview && state.preview.branch === state.branch;
function update() {
  const previewButton = $('nav [data-mode="preview"]');
  previewButton.disabled = !state.branch;
  previewButton.title = "Preview current edits (build if needed)";
  $("#app").dataset.mode = state.mode;
  const info = branchInfo();
  $("#branch-pill").textContent = state.branch
    ? state.mode === "preview"
      ? `${state.branch}${state.preview ? " · " + state.preview.revision.slice(0, 8) + (state.preview.draft ? " · draft" : "") : ""}`
      : `${state.branch} · ${info?.ahead ?? "?"} ↑ / ${info?.behind ?? "?"} ↓${dirty().length ? " · edited" : ""}`
    : "Choose a branch";
  $("#source-meta").textContent = state.file
    ? `${dirty().length ? dirty().length + " edited file(s)" : "Committed"} · ${state.revision?.slice(0, 8) || ""}`
    : "Choose an existing .wly file.";
  $("#commit").disabled = $("#discard").disabled = !dirty().length;
  $("#clean-build-cache").disabled =
    $("#source-build").disabled =
    $("#build").disabled =
      !!state.job || state.buildStarting || !state.branch;
  $("#file-picker").textContent = state.file || "Choose a .wly file ▾";
  $("#editor").disabled = !state.file;
  $("#build-settings").hidden = !state.branch;
  const showingBuild = state.buildPanel && state.jobBranch === state.branch;
  $("#build-terminal").hidden = !showingBuild;
  const active = state.buildStarting || running(state.jobStatus);
  $("#build-terminal").classList.toggle("is-running", active);
  $("#build-status").textContent = state.buildStarting
    ? "Preparing build…"
    : {
        queued: "Queued…",
        building: "Building preview…",
        cancelling: "Cancelling…",
        publishing: "Publishing preview…",
        failed: "Build failed",
        cancelled: "Build cancelled",
        ready: "Preview ready",
      }[state.jobStatus] || "Build";
  $("#cancel-build").hidden = !active;
  $("#cancel-build").disabled =
    !state.job || ["cancelling", "publishing"].includes(state.jobStatus);
  $("#build-result-actions").hidden = active;
  $("#previous-preview").hidden = !canPreview();
  $("#retry-build").disabled = !!state.job || state.buildStarting;
  const sourceButton = $('nav [data-mode="source"]');
  sourceButton.dataset.tracking =
    state.mode === "preview" ? state.tracking.status : "off";
  sourceButton.title =
    state.mode === "preview"
      ? "Return to source at the visible passage"
      : "Source";
}
function mode(value) {
  if (value !== "branches" && !state.branch) {
    notice("Choose a branch first.");
    return;
  }
  const fromSource = state.mode === "source" && value === "preview";
  if (fromSource && state.followPreview && state.file) {
    const editor = $("#editor");
    state.pendingTarget = {
      file: state.file,
      line:
        Math.floor(
          editor.scrollTop / parseFloat(getComputedStyle(editor).lineHeight),
        ) + 1,
    };
  }
  state.mode = value;
  for (const name of ["branches", "source", "preview"])
    $("#" + name).hidden = name !== value;
  document
    .querySelectorAll("nav [data-mode]")
    .forEach((b) => b.classList.toggle("active", b.dataset.mode === value));
  if (value === "preview") {
    goggles(false);
    positionPreview();
  }
  syncTracking();
  update();
}
async function refresh(fetchRemote = false) {
  const result = fetchRemote ? await api("refresh", {}) : await api("branches");
  state.branches = result.branches;
  renderBranches();
  update();
}
function renderBranches() {
  $("#branch-list").replaceChildren();
  for (const branch of state.branches) {
    const card = document.createElement("article");
    card.className = "card" + (branch.name === state.branch ? " selected" : "");
    card.append(button(branch.name, () => chooseBranch(branch.name), "name"));
    const counts = document.createElement("div");
    counts.className = "counts";
    counts.textContent = `${branch.ahead ?? "?"} ↑ / ${branch.behind ?? "?"} ↓`;
    card.append(counts);
    const footer = document.createElement("footer");
    const label = document.createElement("span");
    label.className = "muted";
    label.textContent = branch.remoteMissing
      ? "Missing on GitHub"
      : branch.opened
        ? "Server draft"
        : "Available on GitHub";
    footer.append(label);
    footer.append(
      button("Sync", async () => {
        if (state.branch !== branch.name && !(await chooseBranch(branch.name)))
          return;
        if (!(await settle("Commit or discard before syncing."))) return;
        await api("sync", { branch: branch.name });
        state.documents.clear();
        await refresh();
        if (state.file) await openFile(state.file);
        notice("Branch synced.");
      }),
    );
    card.append(footer);
    $("#branch-list").append(card);
  }
}
async function settle(text) {
  if (!dirty().length) return true;
  $("#decision-text").textContent = text;
  return new Promise((resolve) => {
    const dialog = $("#decision");
    const close = (result) => {
      dialog.close();
      resolve(result);
    };
    $("#decision-cancel").onclick = () => close(false);
    dialog.oncancel = () => close(false);
    $("#decision-discard").onclick = () => {
      discard();
      close(true);
    };
    $("#decision-commit").onclick = () =>
      perform(async () => {
        await commit();
        close(true);
      });
    dialog.showModal();
  });
}
async function chooseBranch(name) {
  if (name === state.branch) return true;
  if (
    !(await settle(
      "Switching branches requires committing or discarding these edits.",
    ))
  )
    return false;
  const result = await api("open", { branch: name });
  state.branch = name;
  state.branches = result.branches;
  state.documents.clear();
  state.file = null;
  state.revision = null;
  state.preview = null;
  update();
  state.files = (await api("files?branch=" + encodeURIComponent(name))).files;
  state.previewPath = null;
  state.pendingTarget = null;
  state.preview = await api("preview?branch=" + encodeURIComponent(name));
  $("#editor").value = "";
  $("#frame").removeAttribute("src");
  $("#frame").hidden = true;
  delete $("#frame").dataset.build;
  renderBranches();
  renderCommands();
  update();
  const previous = state.lastFiles.get(name);
  if (previous && state.files.includes(previous)) await openFile(previous);
  return true;
}
function renderCommands() {
  const info = branchInfo();
  $("#commands").replaceChildren();
  for (const command of info?.commands || ["gleam run"]) {
    const label = document.createElement("label");
    label.className = "command";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "command";
    radio.value = command;
    radio.checked = command === info?.command;
    radio.onchange = () =>
      perform(() => api("command", { branch: state.branch, command }));
    const code = document.createElement("span");
    code.textContent = command;
    label.append(radio, code);
    $("#commands").append(label);
  }
  $("#custom-radio").checked = false;
  $("#custom-command").value = "";
}
function selectedCommand() {
  return $("#custom-radio").checked
    ? $("#custom-command").value
    : $("input[name=command]:checked")?.value || "gleam run";
}
async function openFile(file, line = 1) {
  if (!state.files.includes(file))
    throw new Error("This source file is absent from the current branch.");
  if (!state.documents.has(file)) {
    const data = await api(
      `source?branch=${encodeURIComponent(state.branch)}&file=${encodeURIComponent(file)}`,
    );
    if (state.revision && state.revision !== data.revision && dirty().length)
      throw new Error(
        "Branch changed while editing. Commit is blocked until you reload; copy your edits first.",
      );
    state.revision = data.revision;
    state.documents.set(file, {
      original: data.content,
      content: data.content,
    });
  }
  state.file = file;
  state.lastFiles.set(state.branch, file);
  state.recents.set(
    state.branch,
    [...new Set([file, ...(state.recents.get(state.branch) || [])])].slice(
      0,
      3,
    ),
  );
  $("#editor").value = state.documents.get(file).content;
  update();
  if (line >= 1) {
    const editor = $("#editor");
    const offset = editor.value
      .split("\n")
      .slice(0, line - 1)
      .reduce((n, s) => n + s.length + 1, 0);
    editor.focus();
    editor.setSelectionRange(offset, offset);
    editor.scrollTop = Math.max(
      0,
      (line - 3) * parseFloat(getComputedStyle(editor).lineHeight),
    );
  }
}
$("#editor").oninput = () => {
  if (state.file) state.documents.get(state.file).content = $("#editor").value;
  update();
};
$("#editor").onkeydown = (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    const el = event.target;
    el.setRangeText("    ", el.selectionStart, el.selectionEnd, "end");
    el.dispatchEvent(new Event("input"));
  }
};
function discard() {
  for (const doc of state.documents.values()) doc.content = doc.original;
  if (state.file) $("#editor").value = state.documents.get(state.file).content;
  update();
}
async function commit() {
  const changes = dirty().map(([file, doc]) => ({
    file,
    content: doc.content,
  }));
  if (!changes.length) return;
  // Keep the exact submitted text; edits made during the request remain dirty.
  const result = await api("commit", {
    branch: state.branch,
    revision: state.revision,
    changes,
  });
  for (const change of changes)
    state.documents.get(change.file).original = change.content;
  state.revision = result.revision;
  await refresh();
  update();
}
function renderTree() {
  const query = $("#file-search").value.toLowerCase();
  const tree = {};
  for (const file of state.files.filter((f) =>
    f.toLowerCase().includes(query),
  )) {
    const parts = file.replace(/^src\/content\//, "").split("/");
    let node = tree;
    for (const part of parts.slice(0, -1)) node = node[part] ||= {};
    node[parts.at(-1)] = file;
  }
  const choose = (file) => async () => {
    await openFile(file);
    $("#files-dialog").close();
    mode("source");
  };
  function append(parent, node) {
    for (const [name, value] of Object.entries(node).sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      if (typeof value === "string") parent.append(button(name, choose(value)));
      else {
        const folder = document.createElement("details");
        folder.open = !!query;
        const title = document.createElement("summary");
        title.textContent = name;
        folder.append(title);
        append(folder, value);
        parent.append(folder);
      }
    }
  }
  $("#tree").replaceChildren();
  append($("#tree"), tree);
  $("#recents").replaceChildren();
  for (const file of state.recents.get(state.branch) || [])
    $("#recents").append(
      button(file.replace("src/content/", ""), choose(file)),
    );
}
function goggles(value) {
  state.goggles = value;
  if (state.preview)
    $("#frame").contentWindow?.postMessage(
      { kind: "writerly-editor", goggles: value },
      state.preview.url,
    );
  update();
}
function positionPreview() {
  $("#preview-empty").hidden = !!state.preview;
  $("#frame").hidden = !state.preview;
  if (!state.preview) return;
  const frame = $("#frame");
  const wanted = state.pendingTarget;
  const page = wanted
    ? state.preview.pages.find(
        (p) =>
          p.path === state.previewPath &&
          p.sources.some((s) => s.file === wanted.file),
      ) ||
      state.preview.pages.find((p) =>
        p.sources.some((s) => s.file === wanted.file),
      )
    : state.preview.pages.find((p) => p.path === state.previewPath) ||
      state.preview.pages.find((p) =>
        p.sources.some((s) => s.file === state.file),
      );
  const target = page ||
    state.preview.pages.find((p) => p.sources.length) || { path: "/" };
  const key = state.preview.id + target.path;
  if (frame.dataset.build !== key) {
    frame.src = state.preview.url + target.path;
    frame.dataset.build = key;
  } else if (wanted) sendPreviewTarget();
  if (wanted && !page) {
    state.pendingTarget = null;
    notice(
      "That source is not included in this build. Showing the available preview.",
    );
  }
}
function syncTracking() {
  if (!state.preview) return;
  $("#frame").contentWindow?.postMessage(
    {
      kind: "writerly-editor",
      action: "tracking",
      enabled: state.mode === "preview" && state.followSource,
    },
    state.preview.url,
  );
}
function sendPreviewTarget() {
  if (!state.pendingTarget || !state.preview) return;
  $("#frame").contentWindow?.postMessage(
    {
      kind: "writerly-editor",
      action: "seek",
      ...state.pendingTarget,
    },
    state.preview.url,
  );
  state.pendingTarget = null;
}
addEventListener("message", (event) => {
  if (
    !state.preview ||
    event.origin !== state.preview.url ||
    event.source !== $("#frame").contentWindow ||
    event.data?.kind !== "writerly-preview"
  )
    return;
  if (state.preview.pages.some((p) => p.path === event.data.path)) {
    state.previewPath = event.data.path;
    $("#frame").dataset.build = state.preview.id + event.data.path;
  }
  if (event.data.action === "ready") {
    goggles(false);
    sendPreviewTarget();
    syncTracking();
  }
  if (event.data.action === "tracking") {
    state.tracking = event.data;
    update();
  }
  if (event.data.action === "no-source") {
    if (event.data.returnToSource) mode("source");
    notice(
      "No visible source location found here. Showing your last source position.",
    );
  }
  if (event.data.action === "source")
    perform(async () => {
      const file =
        "src/content/" + String(event.data.file).replace(/^\.\//, "");
      const line = Number(event.data.line);
      if (
        !Number.isInteger(line) ||
        line < 1 ||
        !state.preview.pages.some((p) =>
          p.sources.some((s) => s.file === file && s.line === line),
        )
      )
        throw new Error("Source location does not belong to this build.");
      if (event.data.revision !== state.preview.revision)
        throw new Error("Preview revision mismatch. Rebuild the preview.");
      goggles(false);
      mode("source");
      await openFile(file, line);
      if (state.preview.revision !== branchInfo()?.revision)
        notice(
          "This preview is from an earlier commit; line positions may have shifted.",
        );
    });
});
function currentChanges() {
  return dirty().map(([file, doc]) => ({ file, content: doc.content }));
}
async function enterPreview() {
  if (!state.branch) return;
  const rebuild = await needsBuild(
    state.preview,
    state.branch,
    state.revision || branchInfo()?.revision,
    currentChanges(),
    selectedCommand(),
  );
  mode("preview");
  if (state.job || state.buildStarting) {
    if (state.jobBranch !== state.branch)
      notice(
        "Another branch is building. Wait for it to finish before building this preview.",
      );
    else state.buildPanel = true;
    update();
    return;
  }
  if (rebuild) await build();
  else {
    state.buildPanel = false;
    update();
  }
}
async function build() {
  if (state.job || state.buildStarting || !state.branch) return;
  state.buildStarting = true;
  state.jobBranch = state.branch;
  state.jobStatus = "queued";
  state.buildPanel = true;
  $("#preview-log").textContent = "Preparing current editor contents…";
  mode("preview");
  update();
  try {
    const job = await api("build", {
      branch: state.branch,
      command: selectedCommand(),
      revision: state.revision || branchInfo()?.revision,
      changes: currentChanges(),
    });
    state.job = job.id;
    state.jobStatus = job.status;
    $("#build-log").open = true;
    poll(job.id);
  } catch (error) {
    state.jobStatus = "failed";
    $("#preview-log").textContent = error.message;
  } finally {
    state.buildStarting = false;
    update();
  }
}
async function poll(id) {
  if (id !== state.job) return;
  try {
    const job = await api("job?id=" + id);
    if (id !== state.job) return;
    state.jobStatus = job.status;
    $("#log").textContent = job.log || job.status;
    const terminal = $("#preview-log");
    const atBottom =
      terminal.scrollHeight - terminal.scrollTop - terminal.clientHeight < 32;
    terminal.textContent = job.log || job.status;
    if (atBottom) terminal.scrollTop = terminal.scrollHeight;
    update();
    if (running(job.status)) {
      setTimeout(() => poll(id), 1000);
      return;
    }
    if (job.status === "ready") {
      await refresh();
      if (state.branch === job.branch) {
        state.preview = { ...job.manifest, url: job.url };
        state.buildPanel = false;
        renderCommands();
        if (state.mode === "preview") positionPreview();
      }
      notice("");
    }
    state.job = null;
    update();
  } catch (error) {
    notice("Waiting for build connection: " + error.message);
    if (id === state.job) setTimeout(() => poll(id), 2500);
  }
}
$("#cancel-build").onclick = async () => {
  if (!state.job) return;
  state.jobStatus = "cancelling";
  update();
  try {
    await api("cancel-build", { id: state.job });
  } catch (error) {
    notice(error.message);
  }
};
$("#retry-build").onclick = () => perform(build);
$("#previous-preview").onclick = () => {
  state.buildPanel = false;
  positionPreview();
  update();
};
$("#login-form").onsubmit = (event) => {
  event.preventDefault();
  perform(async () => {
    await api("login", { token: $("#token").value });
    $("#token").value = "";
    await boot();
  });
};
async function boot() {
  await refresh();
  $("#login").hidden = true;
  $("nav").hidden = false;
  mode("branches");
}
$("#refresh").onclick = () => perform(() => refresh(true));
$("#branch-pill").onclick = () => mode("branches");
$("nav").onclick = (event) => {
  const target = event.target.closest("[data-mode]");
  if (!target) return;
  if (target.dataset.mode === state.mode) return;
  if (target.dataset.mode === "preview") {
    perform(enterPreview);
    return;
  }
  if (
    target.dataset.mode === "source" &&
    state.mode === "preview" &&
    state.followSource &&
    state.preview
  ) {
    $("#frame").contentWindow?.postMessage(
      { kind: "writerly-editor", action: "track-source" },
      state.preview.url,
    );
    return;
  }
  mode(target.dataset.mode);
};
$("#file-picker").onclick = () => {
  renderTree();
  $("#files-dialog").showModal();
};
$("#file-search").oninput = renderTree;
$("#close-files").onclick = () => $("#files-dialog").close();
$("#commit").onclick = () => perform(commit);
$("#discard").onclick = discard;
$("#build").onclick = $("#source-build").onclick = () => perform(build);
$("#custom-command").oninput = () => {
  $("#custom-radio").checked = true;
};
perform(boot);

$("#clean-build-cache").onclick = () =>
  perform(async () => {
    await api("clean-build-cache", { branch: state.branch });
    notice(
      "Build cache cleared. The next build starts fresh. Source and previews are unchanged.",
    );
  });

async function setupGoogleLogin() {
  const config = await api("auth-config");
  if (!config.googleClientId) return;
  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.async = true;
  script.onerror = () =>
    notice(
      "Google sign-in could not load. You can still use your editor token.",
    );
  script.onload = () => {
    google.accounts.id.initialize({
      client_id: config.googleClientId,
      nonce: config.nonce,
      auto_select: false,
      callback: ({ credential }) =>
        perform(async () => {
          await api("login/google", { credential });
          await boot();
        }),
    });
    $("#google-signin").hidden = false;
    $("#token-login").open = false;
    google.accounts.id.renderButton($("#google-signin"), {
      type: "standard",
      theme: "outline",
      size: "large",
      text: "signin_with",
      width: Math.min(
        320,
        Math.max(200, document.documentElement.clientWidth - 64),
      ),
    });
  };
  document.head.append(script);
}
setupGoogleLogin().catch(() => {});
