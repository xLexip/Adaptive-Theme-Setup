# Conventional Commits – GitHub Copilot Instructions

Use the **Conventional Commits 1.0.0** specification for all commits in this repository.

## 1. Commit Message Structure

Every commit message **must** follow this structure:

```text
<type>[optional scope][optional !]: <short description>

[optional body]

[optional footer(s)]
```

Where:
- `<type>` is one of the supported commit types (see below).
- `[optional scope]` is a noun in parentheses describing the area of the codebase, e.g. `(api)`, `(parser)`, `(ui)`.
- `[optional !]` marks a **breaking change** when present right before the colon.
- `<short description>` is a brief summary of the change.
- `[optional body]` is a longer, free-form explanation (can be multiple paragraphs).
- `[optional footer(s)]` are metadata lines such as breaking changes or references.

## 2. Standard Commit Types

Copilot should prefer the following commit types:

- `feat`: for **new features** (maps to **MINOR** version bump in SemVer).
- `fix`: for **bug fixes** (maps to **PATCH** version bump in SemVer).
- `docs`: for documentation-only changes.
- `style`: for changes that do **not** affect the meaning of the code (formatting, missing semicolons, etc.).
- `refactor`: for changes that neither fix a bug nor add a feature (code restructuring).
- `perf`: for performance-related improvements.
- `test`: for adding or updating tests.
- `build`: for changes that affect the build system or external dependencies.
- `ci`: for changes to CI configuration or scripts.
- `chore`: for other tasks like maintenance, tooling, or housekeeping.
- `revert`: for reverting previous commits.

Additional custom types **may** be used, as long as they follow the same structure. The first character aftert the : should be upper-case.

## 3. Scopes

- Scopes are **optional** but recommended when they help clarify the affected area.
- Format: `(<scope>)` right after the type, e.g.:
    - `feat(api): add endpoint for user profile`
    - `fix(parser): handle empty input correctly`

## 4. Breaking Changes

Breaking changes must be clearly indicated in **one** of these ways:

1. Add `!` after the type or type + scope:

   ```text
   feat!: change authentication flow
   feat(api)!: change authentication flow
   ```

2. Or add a `BREAKING CHANGE` footer:

   ```text
   feat: change authentication flow

   BREAKING CHANGE: authentication tokens are now invalidated after 24h.
   ```

Rules:
- `BREAKING CHANGE` **must** be uppercase.
- `BREAKING-CHANGE` is accepted as a synonym in footers.
- The footer format is: `BREAKING CHANGE: <description>`.
- Any commit type can include a breaking change if marked accordingly.

## 5. Bodies and Footers

- The body **must** start after a blank line following the header.
- The body can have multiple paragraphs.
- Footers come **after** another blank line following the body (or directly after the header if there is no body).
- Each footer line follows the `token: value` or `token #value` pattern, for example:

  ```text
  Reviewed-by: Alice Example
  Refs: #123
  ```

- Footer tokens use `-` instead of spaces (e.g. `Reviewed-by`, `Acked-by`), except `BREAKING CHANGE`.

## 6. Examples for Copilot

**Simple docs fix**

```text
docs: correct spelling of CHANGELOG
```

**New feature**

```text
feat(lang): add Polish language
```

**Bugfix with body and references**

```text
fix: prevent racing of requests

Introduce a request id and a reference to the latest request. Dismiss
incoming responses other than from the latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

**Breaking change via footer**

```text
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other configs.
```

**Breaking change via ! and footer**

```text
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

**Revert a previous change**

```text
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

## 7. Rules Summary (for tooling and validation)

- Every commit **must** start with a `<type>` followed by `:` and a space, optionally with scope and `!`:
    - `type[(scope)][!]: description`
- `feat` **must** be used for new features.
- `fix` **must** be used for bug fixes.
- Breaking changes **must** be denoted by `!` or a `BREAKING CHANGE:` / `BREAKING-CHANGE:` footer.
- Commit description is a short summary and **must** follow the `type` line immediately.
- The body, if present, **must** start after a blank line.
- Footers, if present, **must** start after a blank line following the body.
- Units like `feat`, `fix`, `docs`, etc. are case-insensitive in tooling, but we **recommend lowercase** for consistency.

## 8. How Copilot Should Use This

When suggesting commit messages, GitHub Copilot should:

1. Always generate messages in the Conventional Commits format.
2. Pick an appropriate `type` based on the nature of the changes.
3. Add a `scope` when the changed files clearly relate to a specific module, package, or layer.
4. Use `!` and/or `BREAKING CHANGE` when edits change public APIs or behavior in a backward-incompatible way.
5. Include a helpful body when the change is non-trivial.
6. Include `Refs: #<issue-number>` or similar footers when the commit is related to specific issues or tickets.

Use this document as the canonical guideline for all commit messages in this project.
