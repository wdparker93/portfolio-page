# Portfolio Auto-Update — Agent Instructions

This file is read by Claude Code when the Azure DevOps pipeline runs. Follow these instructions exactly.

## Context

This is a React portfolio site for Will Parker (Software Engineer), deployed to GitHub Pages.
The pipeline fires when one of the watched project repos receives a push to `main`.

## Your task

1. Read `.pipeline-context/recent-changes.diff` to understand what recently changed
2. Decide whether the change is meaningful enough to update the portfolio (see rules below)
3. If yes: edit the two permitted files to reflect the new capability
4. If no: do nothing
5. Run `git diff --stat` to confirm what changed (or that nothing changed)

## Files you are allowed to edit

**Only these two files — do not touch anything else:**

### 1. `src/components/Projects.js`

Contains a `projects` array. Each entry looks like:
```js
{
  name: "Project Name",
  repo: "https://github.com/wdparker93/repo-name",
  site: "https://...",          // optional — do not add or remove this field
  description: "One or two sentences.",
},
```
Edit only the `description` field of the relevant project entry. Do not change `name`, `repo`, or `site`.

### 2. `public/resume.html`

Contains an HTML resume. The Projects section looks like:
```html
<div class="project-item">
  <a href="..." target="_blank"><strong>Project Name</strong></a>
  &nbsp;– One sentence description.
</div>
```
Edit only the text after `&nbsp;–` for the relevant project entry. Do not change the link, the `<strong>` tag, or any other HTML structure.

## Project name mapping

| Portfolio name | GitHub repo | Also known as |
|---|---|---|
| GrooveVision | groovevision | — |
| Improv Helper | improvisation-helper | — |

## When to update (decision rules)

**UPDATE** the portfolio if the changes include any of:
- A new user-facing feature or capability
- A new paid/premium tier or monetization model
- New platform support (e.g., Mac, Linux, Firefox)
- A significant UX or workflow improvement
- A notable new integration (e.g., new API, new data source)

**DO NOT UPDATE** if the changes are only:
- Bug fixes or patches
- Refactoring or code cleanup
- Dependency version bumps or lock file changes
- README, documentation, or comment changes
- Test additions or changes
- Build system or CI/CD changes
- Minor wording tweaks

## Writing style rules

- 1–2 sentences maximum per description
- Professional and concise — suitable for a resume
- Focus on what the tool *does for the user*, not implementation details
- Do not use bullet points, markdown, or JSX inside the description string
- The `description` field in Projects.js must remain a plain JS string literal

## Projects you must not modify

Do not touch the description or any other field of:
- Portfolio Page
- Lobbyist Donation Tracker
- Connect4
- Bumper Cars

## Example of a correct edit

If GrooveVision added Mac support, a good update would be:

**Before (Projects.js):**
```js
description: "Chrome extension with a Windows companion app that automatically finds and opens the YouTube music video for whatever is playing in the Spotify desktop app — no Spotify Premium required.",
```

**After:**
```js
description: "Chrome extension with Windows and Mac companion apps that automatically finds and opens the YouTube music video for whatever is playing in Spotify — no Spotify Premium required.",
```

Keep the same sentence structure; just reflect the new capability naturally.
