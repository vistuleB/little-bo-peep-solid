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
  goggles: false,
  mode: "branches",
  job: null,
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
function update() {
  const info = branchInfo();
  $("#branch-pill").textContent = state.branch
    ? `${state.branch} · ${info?.ahead ?? "?"} ↑ / ${info?.behind ?? "?"} ↓${dirty().length ? " · edited" : ""}`
    : "Choose a branch";
  $("#source-meta").textContent = state.file
    ? `${dirty().length ? dirty().length + " edited file(s)" : "Committed"} · ${state.revision?.slice(0, 8) || ""}`
    : "Choose an existing .wly file.";
  $("#commit").disabled = $("#discard").disabled = !dirty().length;
  $("#source-build").disabled = $("#build").disabled =
    !!state.job || !state.branch;
  $("#file-picker").textContent = state.file || "Choose a .wly file ▾";
  $("#editor").disabled = !state.file;
  $("#build-settings").hidden = !state.branch;
  $("#preview-meta").textContent = state.preview
    ? `${state.preview.revision.slice(0, 8)}${state.preview.revision !== info?.revision ? " · earlier build" : ""}`
    : "No successful build";
  $("#goggles").disabled = !state.preview;
  $("#goggles").setAttribute("aria-pressed", String(state.goggles));
}
function mode(value) {
  if (value !== "branches" && !state.branch) {
    notice("Choose a branch first.");
    return;
  }
  state.mode = value;
  for (const name of ["branches", "source", "preview"])
    $("#" + name).hidden = name !== value;
  document
    .querySelectorAll("nav button")
    .forEach((b) => b.classList.toggle("active", b.dataset.mode === value));
  if (value === "preview") {
    goggles(false);
    positionPreview();
  }
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
  state.files = (await api("files?branch=" + encodeURIComponent(name))).files;
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
  if (line > 1) {
    mode("source");
    const editor = $("#editor");
    const offset = editor.value
      .split("\n")
      .slice(0, line - 1)
      .reduce((n, s) => n + s.length + 1, 0);
    editor.focus();
    editor.setSelectionRange(offset, offset);
    editor.scrollTop = Math.max(0, (line - 3) * 21.45);
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
  const page = state.preview.pages.find((p) =>
    p.sources.some((s) => s.file === state.file),
  );
  const target = page ||
    state.preview.pages.find((p) => p.sources.length) || { path: "/" };
  // Returning from a source jump preserves position when already on this page.
  const key = state.preview.id + target.path;
  if (frame.dataset.build !== key) {
    frame.src = state.preview.url + target.path;
    frame.dataset.build = key;
  }
  if (state.file && !page)
    notice(
      "That file is not included in this build. Showing the first available page.",
    );
}
addEventListener("message", (event) => {
  if (
    !state.preview ||
    event.origin !== state.preview.url ||
    event.source !== $("#frame").contentWindow ||
    event.data?.kind !== "writerly-preview"
  )
    return;
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
      await openFile(file, line);
      mode("source");
      if (state.preview.revision !== branchInfo()?.revision)
        notice(
          "This preview is from an earlier commit; line positions may have shifted.",
        );
    });
});
async function build() {
  if (state.job) return;
  if (
    !(await settle(
      "Build uses committed files. Commit & continue builds your changes.",
    ))
  )
    return;
  const job = await api("build", {
    branch: state.branch,
    command: selectedCommand(),
  });
  state.job = job.id;
  $("#build-log").open = true;
  update();
  poll();
}
async function poll() {
  try {
    const job = await api("job?id=" + state.job);
    $("#log").textContent = job.log || job.status;
    if (["queued", "building"].includes(job.status)) {
      setTimeout(poll, 1200);
      return;
    }
    state.job = null;
    if (job.status === "ready") {
      await refresh();
      if (state.branch === job.branch) {
        state.preview = { ...job.manifest, url: job.url };
        renderCommands();
        if (state.mode === "preview") positionPreview();
      }
      notice("Preview built.");
    } else
      notice(
        "Build failed. The previous successful preview is still available.",
      );
    update();
  } catch (error) {
    state.job = null;
    notice(error.message);
    update();
  }
}
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
  if (target) mode(target.dataset.mode);
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
$("#goggles").onclick = () => goggles(!state.goggles);
perform(boot);
