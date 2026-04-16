# AGENTS.md

## Purpose

This file guides coding agents working in this repository.

Project: static AWS Cloud Practitioner (`CLF-C02`) practice quiz.

Primary goal: maintain a simple, realistic exam-style quiz experience without adding architectural complexity.

## Repo Shape (Do Not Complicate)

The active architecture is intentionally minimal:

- `index.html` (UI + quiz runtime logic)
- `domain1.js` (Domain 1 question bank)
- `domain2.js` (Domain 2 question bank)
- `domain3.js` (Domain 3 question bank)
- `domain4.js` (Domain 4 question bank)
- `README.md`
- `CONTEXT_HANDOFF.md`

Do not reintroduce removed systems (manifests, generator layers, extra bank pipelines) unless explicitly requested by the user.

## Product Constraints

- Keep default exam mode at `65` questions unless explicitly asked to change.
- Preserve current behavior where immediate correctness feedback is hidden in 65-question mode until completion.
- Keep one active question-bank system (the four domain files only).
- Favor exam realism over trivia or definition-memorization prompts.

## Question Authoring Rules

When adding or editing questions in `domain*.js`:

- Prefer scenario-based stems over direct service lookup prompts.
- Avoid obvious giveaway wording.
- Build plausible near-miss distractors; avoid joke/throwaway options.
- Keep options concise and parallel in style.
- Do not add hint-style options (no inline explanatory labels, no em-dash hint patterns).
- Use current AWS terminology and validate facts against official AWS documentation when accuracy is in doubt.

Question object shape should remain consistent:

```js
{
  domain: 3,
  task: "3.5",
  q: "Question text",
  opts: ["A", "B", "C", "D"],
  ans: 1,
  explain: "Why the answer is correct"
}
```

For multi-answer questions:

- add `multi: true`
- set `ans` to an array of zero-based indexes

## Editing Guidelines

- Keep edits targeted and minimal.
- Preserve existing data format in domain files.
- Maintain plain ASCII unless a file already relies on Unicode.
- Avoid broad reformatting that makes content diffs hard to review.

## Validation Checklist

After changes, complete a quick sanity pass:

1. Ensure `index.html` still loads all four domain files.
2. Start a quiz and verify question rendering works for single-answer and multi-answer items.
3. Confirm score/results flow still functions.
4. Spot-check changed questions for:
   - correct `ans` index(es)
   - explanation alignment
   - no hint leakage in option text
5. Run `git diff --check` before finalizing.

## Change Strategy For Agents

- For content improvements, prioritize Domain 3 then Domain 4 when looking for easiest/least realistic items.
- Keep commits small and descriptive.
- If you encounter unexpected unrelated workspace changes, pause and ask the user before proceeding.

## Out of Scope Unless Requested

- Introducing build tooling for this static app
- Splitting question banks into new storage layers
- Adding heavy UI frameworks
- Rewriting the app architecture

## Handy Local Commands

From repo root:

```powershell
# quick static preview
py -m http.server 8000

# lint-style whitespace sanity check before commit
git diff --check

# count questions quickly by searching "q:" (approximate)
rg "q:\\s*\"" domain1.js domain2.js domain3.js domain4.js
```

## Source of Truth

If guidance conflicts, prefer:

1. Explicit user instruction
2. This `AGENTS.md`
3. `CONTEXT_HANDOFF.md`
4. `README.md`
