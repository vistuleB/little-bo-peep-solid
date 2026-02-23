# Installation

## 1. [Gleam Install](https://gleam.run/getting-started/installing)

## 2. Clone repos, create `.env` file

Clone [wly](https://github.com/vistuleB/wly) and this repo. The two repos must be put as sibling folders of a parent folder or else the local paths in `renderer/gleam.toml` and `renderer/manifest.toml` need to be edited. (For the latter, erase the relevant entries and let Gleam re-generate them.)

Create `.env` file in root folder with contents:

```
VITE_ENV=DEV
AUTHOR_MODE=true
OFFLINE_MODE=false
MATHJAX_VERSION=3
```

## 3. 'wly' test

Run `gleam run -m desugarers` inside `desugaring` folder of `wly` repo.

Various output should come out like this:

![wly/desugaring gleam run -m desugarers terminal output](wly-test-screenshot.png)

## 4. Running the project

Run `gleam run` or `gleam run -- --verbose` inside of this repo's `renderer` folder.

Run `gleam run -- --help` for some other options.

## 5. Running the local server

1. `npm install` in this repo's home folder
2. `npm run dev`
3. goto `http://localhost:3000`

## 6. Setting up the offline mode

The `.env` OFFLINE_MODE=true option is for using a local copy of MathJax
instead of downloading it from the CDN, possibly useful for offline work.

Todo:

- Download MathJax v3.2.2 from [here](https://sourceforge.net/projects/mathjax.mirror/files/3.2.2/), rename/move the `es5` folder therein to a folder named `mathjax3` inside `public/`.
- Download MathJax v4.x from [here](https://sourceforge.net/projects/mathjax.mirror/), rename/move the entire downloaded folder as `mathjax4` inside `public/`.

Then try out the combos `MATHJAX_VERSION=3`, `=4` in `.env` together with `OFFLINE_MODE=true`.

Beware: A proper test requires both of these actions:

- Restarting the local server, AND
- Opening the page in a NEW tab (reloading not enough, for whatever reason, this has been observed)

## 7. Restricting the source

For VSCode usage, install the [Writerly](https://marketplace.visualstudio.com/items?itemName=TabbyNotes.writerly-vscode-extension) extension.

Add key-value pair `aaa=bbb` to some `|> Section` elements in `src/content/ch1.wly` and to some `|> Section` of `src/content/bt1.wly`.

Run `gleam run -- --only ch1 aaa=bbb` in the `renderer/` folder. Then:

- only Chapter 1 should appear (or use `bt1` for bootcamp 1, etc)
- within Chapter 1, only those elements that have key-value pair `aaa=bbb` should appear

Beware: You cannot but `aaa=bbb` at a lower-level element inside of a `|> Section` to restrict only to that element, because of some quirk that we currently have (you'll get an error message), but you can do that in TI-2 and could do it here too if we changed some small things around (as we might at some point).

## 8. Go-to-source tooltips (`--local` mode)

Modify the previous command by running `gleam run -- --only ch1 aaa=bbb --local` in the `renderer` folder.

Note: Go-to-source tooltips will only work if `code` has been bound to open the default code editor (e.g., VSCode) in the terminal.

Note: Go-to-source tooltips produce voluminous output, so it's always recommended to combine that option with some `--only` restriction. 

## 9. Editing the root `__parent.wly` file

`src/content/__parent.wly` offers another means of controlling which chapters are included, which exercises are included in which chapter, and the ordering of exercises within a chapter. This file is also a good place to test VSCode's "Go To Definition" command on '`>>`' handle references.

## 10. VSCode `tasks.json` file

A sample command that can be inserted in `.vscode/tasks.json`
file to work with the project, assuming that
the root folder of the repo has been set up
as the root folder of a VSCode workspace ("File -> Save Workspace as..."):

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "gleam run today's special",
      "type": "shell",
      "command": "gleam",
      "group": {
        "kind": "build",
        "glob": "**/*.wly",
        "isDefault": true,
      },
      "presentation": {
        "reveal": "never",
        "panel": "shared",
      },
      "problemMatcher": [],
      "runOptions": {
        "reevaluateOnRerun": true,
        "instanceLimit": 1,
      },
      "options": {
        "cwd": "${workspaceFolder}/renderer"
      },
      "args": [ "run", "--", "--only", "ch5", "ch4", "content=selection", "work=ing", "--local", "--warnings"]
      // "args": [ "run", "--", "--only", "ch5", "content=selection", "work=ing", "--warnings"]
      // "args": [ "run", "--", "--only", "ch5", "ch3", "ch4"]
    },
  ]
}
```

Note that `content=selection` is included in the `--only` arguments so that various "control nodes" of `src/content/__parent.wly` are not filtered out, but selected instead. On the other `work=ing` is to select the current "transient zone of interest" for the author or the developer.