# Project Context Handoff

## Repository Purpose

This repository is a lightweight AWS Certified Cloud Practitioner (`CLF-C02`) practice quiz site.

Current goals:

- keep the repository as simple as possible
- keep only one active question system
- make the quiz feel close to the real exam
- keep more than 400 active questions in the bank

## Current Structure

The repo is intentionally minimal now:

- `index.html`
- `domain1.js`
- `domain2.js`
- `domain3.js`
- `domain4.js`
- `README.md`
- `CONTEXT_HANDOFF.md`

There is no expert-bank manifest system anymore.
There are no generator scripts anymore.
There are no distractor-bank files in the active architecture.

The live question bank is entirely contained in the four domain files.

## Domain Files

- `domain1.js`: Cloud Concepts
- `domain2.js`: Security and Compliance
- `domain3.js`: Cloud Technology and Services
- `domain4.js`: Billing, Pricing, and Support

Question counts at the last checked state during the most recent difficulty pass:

- `domain1.js`: 93
- `domain2.js`: 129
- `domain3.js`: 123
- `domain4.js`: 79

Total: `424`

## Recent Product Decisions

### Simplification

The repo was simplified on purpose.

Older systems were removed:

- expert bank JSON manifests
- generator scripts
- extra audit/prune scripts
- extra question-bank layers

The project now uses a single-source approach:

- four domain files
- one HTML app

### Exam Realism Direction

The main product direction is:

- not a broad study guide
- not a definition bank
- much closer to real CLF-C02 exam feel

Recent work focused on:

- removing stale and out-of-scope service references
- removing descriptive hints from answer choices
- removing em-dash hints from answer choices
- rewriting direct "Which service/tool should they use?" prompts
- replacing the easiest questions with harder scenario-based versions

### UI Behavior

Important current quiz behavior:

- `65` is the default exam length
- the old `Agent Take 65` button was removed
- during `65` question mode, immediate correctness feedback is hidden until the end

## Current Quality State

The bank is in a much better state than earlier revisions.

Current honest position:

- scope compliance: close
- real-exam fidelity: improved significantly
- still not guaranteed to be identical to the real AWS exam

The most recent major rewrite targeted the weakest remaining questions:

- early Shared Responsibility questions in Domain 2
- direct service-catalog questions in Domain 3
- pricing/support trivia in Domain 4
- easy migration/cost-allocation questions in Domain 1

The latest sweep also verified:

- no tracked em-dash hints in option blocks
- no remaining matches for the weakest direct stem patterns that were being targeted in the last pass

## Important Recent Commits

Latest known important commits:

- `9783eea` `Replace easiest questions with harder scenarios`
- `8e79591` `Remove em dash hints from answer choices`
- `57cfc54` `Improve question authoring realism`
- `f4c841e` `Simplify repository and expand question bank`

These are useful anchor points if future work needs to understand when simplification and realism passes happened.

## Recommended Next Steps

If continuing from another location, the highest-value next steps are:

1. Run another realism audit focused on distractor quality, not just stems.
2. Identify the easiest remaining 25-50 questions by reading Domain 3 first, then Domain 4.
3. Replace questions where only one answer is remotely plausible.
4. Keep the repo simple; do not reintroduce extra content systems unless there is a strong reason.
5. Preserve the no-hint rule in answer options:
   - no descriptive answer labels
   - no em-dash explanations inside options
   - no giveaway wording embedded in the correct answer

## Working Conventions That Have Helped

- Keep commits small and descriptive.
- Use official AWS docs when checking current factual accuracy.
- Prefer scenario-based stems over direct service lookup.
- Prefer realistic near-miss distractors over obviously wrong distractors.
- Do not add back removed architecture complexity unless explicitly desired.

## Resume Checklist

If resuming elsewhere:

1. Open `index.html` and the four `domain*.js` files.
2. Confirm the bank still loads and the quiz starts normally.
3. Spot-check Domain 3 and Domain 4 first for realism drift.
4. Search for easy-pattern stems or answer-hint regressions before adding new questions.
5. Commit only after a quick `git diff --check` sanity pass.
