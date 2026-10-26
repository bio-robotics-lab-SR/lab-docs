# Bio-Inspired Robotics Lab docs

Source of the lab documentation site. Pages are Markdown files in `docs/`. The site is built with MkDocs (Material theme) and published by GitHub Pages on every change to the `main` branch.

This repository has one editor: the organization owner. Everyone else reads the published site and sends corrections to the maintainer (see `docs/suggest-a-change.md`).

---

## One-time setup (about 15 minutes)

1. **Create a free organization.** On GitHub: profile picture → **Your organizations** → **New organization** → **Free**. Pick a lab name, e.g. `bio-robotics-lab`. You are its only owner; don't invite anyone. This keeps the docs separate from your personal site.
2. **Create the repository** inside the organization: name it `lab-docs`, set it to **Public**, and leave it empty (no README).
3. **Upload these files.** Use GitHub Desktop or the command line, so the hidden `.github` folder is included:

    ```bash
    cd lab-docs
    git init -b main
    git add .
    git commit -m "Lab docs: first version"
    git remote add origin https://github.com/bio-robotics-lab/lab-docs.git
    git push -u origin main
    ```

    If you upload through the web page instead, check afterwards that `.github/workflows/publish.yml` exists. If it doesn't, create it with **Add file → Create new file** and paste in its contents.
4. **Turn on publishing.** In the repository: **Settings → Pages → Source: GitHub Actions**.
5. **Check the site.** Under the **Actions** tab, wait for the green tick (a minute or two). The site is at `https://bio-robotics-lab.github.io/lab-docs/`.
6. **Optional, against accidents:** **Settings → Rules → Rulesets → New branch ruleset** for `main`, with *Restrict deletions* and *Block force pushes*.
7. **Link it in Teams.** In the lab Team, add a **Website** tab with the site address.

Fill in the placeholders marked in *italics* (owners, champions, links, and your own name on the *Suggest a change* page).

### Things to keep in mind

- The site and this repository are **public**. Don't put door codes, Wi-Fi passwords, students' names or other internal information on them.
- For a shorter address, name the repository `bio-robotics-lab.github.io` instead of `lab-docs`. The site is then at `https://bio-robotics-lab.github.io`.

---

## Making changes

### Quick edits in the browser

1. Open the file in `docs/`, e.g. `docs/systems/thymio.md`.
2. Click the pencil icon, make the change, and click **Commit changes**.
3. The site updates within a couple of minutes. If a build fails, the **Actions** tab shows a red cross and the error; the old site stays online until you fix it.

Every earlier version is kept in the history, so any change can be undone.

### Where things are

| You want to change | Edit this file |
|---|---|
| A system page | `docs/systems/<system>.md` |
| The parts in the clickable Thymio diagram | `docs/assets/data/thymio-parts.json` |
| Home page and overview table | `docs/index.md` |
| Help levels, lab rules | `docs/help.md`, `docs/rules.md` |
| How others send corrections | `docs/suggest-a-change.md` |
| The menu on the left | `mkdocs.yml`, under `nav:` |

### Add a new robot system

1. Copy `templates/robot-system.md` to `docs/systems/<name>.md`, e.g. `docs/systems/robot-arm.md`.
2. Fill in the sections; leave out the ones that don't apply.
3. In `mkdocs.yml`, add one line under `Robot systems`, e.g. `- Robot arm: systems/robot-arm.md`.
4. Add the system to the table on the home page.

### Formatting cheat sheet

````markdown
## A section heading

**Bold**, *italic*, `code`, [a link](https://example.org)

1. A numbered step
2. Another step

- [ ] A checklist item

??? question "A troubleshooting question (click to open)"
    The answer, indented by four spaces.

!!! warning "A highlighted warning"
    Indented text inside the box.

=== "First tab"
    Content of the first tab, indented by four spaces.

=== "Second tab"
    Content of the second tab.

```python
print("code blocks get a copy button automatically")
```
````

Full reference: [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/reference/).

### Preview before publishing (optional)

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open http://127.0.0.1:8000. Useful for larger changes.

---

## Versions

`requirements.txt` pins MkDocs 1.6 and Material for MkDocs 9.7. Keep these pins: MkDocs 2.0 is not compatible with this setup.

## What's in this folder

| Path | What it is |
|---|---|
| `docs/` | All pages (Markdown) and assets |
| `docs/systems/` | One page per robot system |
| `docs/assets/data/thymio-parts.json` | Text for the clickable Thymio diagram |
| `docs/assets/js/anatomy.js` | Script behind clickable diagrams (no need to edit) |
| `templates/robot-system.md` | Starting point for a new system page |
| `mkdocs.yml` | Site settings and the menu |
| `.github/workflows/publish.yml` | Automatic publishing to GitHub Pages |
