# Project Context Handoff

## Purpose
This repository is a static AWS Certified Cloud Practitioner (`CLF-C02`) practice quiz app.

Primary objective:
- keep the quiz close to real-exam style and difficulty
- keep the codebase simple and easy to maintain
- keep a large active question bank (target direction has been 400+ and growing)

## Current Architecture
Single-page static app with no build step.

Core files:
- `index.html`: full UI + runtime quiz logic
- `domain1.js`: Domain 1 question bank
- `domain2.js`: Domain 2 question bank
- `domain3.js`: Domain 3 question bank
- `domain4.js`: Domain 4 question bank
- `README.md`: user-facing overview
- `CONTEXT_HANDOFF.md`: this handoff context

Deliberate simplification:
- no expert manifest pipeline in active flow
- no active generator dependency for runtime
- no extra layered distractor files in the active architecture

## Product/UX Rules
- Default question count is `65` (official-length mode).
- The old `Agent Take 65` button is removed.
- For official-length mode, immediate correct/incorrect feedback is hidden until later in the flow.
- Domain selection and optional shuffle are available.
- Question data is loaded directly from the 4 domain JS files into `RAW_QUESTIONS`.

## Question Object Contract
Each entry follows this pattern:
```js
{
  domain: 3,
  task: "3.6",
  q: "Scenario-based prompt...",
  opts: ["Option A", "Option B", "Option C", "Option D"],
  ans: 1,
  explain: "Short rationale..."
}
```

Multi-select format:
```js
{
  ...,
  ans: [0, 2],
  multi: true
}
```

## Authoring Standards (Important)
The most common regressions in this repo were content-quality related, not code bugs.

Keep:
- scenario-based stems (2-4 business context sentences when possible)
- plausible distractors (real AWS options that fail one requirement)
- CLF-C02 scope by domain and task mapping

Avoid:
- definition-only trivia
- explicit answer hints embedded in option labels
- em-dash hint style in options/explanations
- repetitive stem patterns like "Which service/tool should they use?" everywhere
- clones/near-clones of the same question across one domain

## Known Quality Sensitivities
Recent issue themes in GitHub:
- duplicated or near-duplicated support questions in Domain 4
- hints in options that make answers too obvious
- questions too direct compared to real exam style

When fixing one flagged question, search for pattern duplicates and patch all matching variants in one pass.

## Issue Triage Workflow
1. Pull open issues from GitHub.
2. Map issue text to exact bank entries with `rg`.
3. Fix flagged question.
4. Search for near duplicates by intent and stem pattern.
5. Re-check syntax and run a quick content grep for known bad patterns.

Useful grep patterns:
- `rg -n "Which service/tool should they use\\?" domain*.js`
- `rg -n " -- |—" domain*.js`
- `rg -n "automated recommendations and a structured" domain*.js`

## Practical Dev Notes
- This app is static; local verification can be done by opening `index.html` in a browser.
- If runtime errors occur (e.g., undefined bank var, token/brace mismatch), inspect the affected domain file first.
- Keep commits small by domain or issue cluster.

## Resume From Another Host
1. Pull latest `main`.
2. Open `index.html` plus all four `domain*.js` files.
3. Confirm quiz starts and question count is displayed correctly.
4. Spot-check Domain 3 and Domain 4 for style fidelity and duplicate logic.
5. Check GitHub open issues and fix globally (not one-off).

## Next High-Value Work
- Continue expanding bank size while preserving realism and distractor quality.
- Add a lightweight lint/audit script for content rules (duplicate stems, hint phrases, forbidden separators).
- Periodically recalibrate against official AWS docs and contemporary CLF-C02 style.
