# Session Handoff

## Goal
Make this AWS Cloud Practitioner quiz app feel as close as possible to the real CLF-C02 exam, especially in official 65-question simulation mode.

## What Was Changed
- Improved official 65-question simulation in [index.html](/c:/Users/Jeremy/Documents/Claude_projects/AWS_Docs/aws_pract_quiz.github.io/index.html):
  - near-duplicate suppression within a run
  - less rigid domain/style/multi-answer composition
  - scored 50 built first, then 15 unscored injected separately
  - stronger concept-repeat limits
  - official mode strongly prefers core question banks over `*_distractor_200.js`
  - official mode excludes several CLF-C02 out-of-scope services
- Added export of the generated 65-question set.
- Removed the start-screen `Agent Take 65` button.
- Changed the default quiz length to `65 (official length)`.
- Changed official 65-question mode so it does not reveal correctness or explanations immediately after each answer.
- Fixed official 65-question mode so answers remain editable while the exam is in progress and are only scored on the results screen.
- Added cross-session diversity for official 65-question mode:
  - recent official exam sets are stored in browser local storage
  - exact recent repeats are penalized heavily
  - recent similarity-cluster and concept-family repeats are penalized
  - top-ranked candidates now include controlled randomness instead of always picking the single greedy best option

## Current Status
- The app defaults to a realistic CLF-C02-style `65` question run.
- In official 65-question mode, answers stay recorded without showing correct/wrong feedback until the results screen.
- In official 65-question mode, users can revisit a question and change their answer before finishing the exam.
- Official 65-question mode now tries to diversify between recent sessions in the same browser, not only within one session.
- The `startAgentTake65Exam()` JavaScript path still exists in [index.html](/c:/Users/Jeremy/Documents/Claude_projects/AWS_Docs/aws_pract_quiz.github.io/index.html), but its button was removed from the UI.
- The recent fixes for editable official-mode answers and cross-session diversity are committed and pushed.

## Recent Commits
- `30e18ea` `Diversify official exams across sessions`
- `b80e746` `Allow answer changes during official exam`
- `901238f` `Fix official exam flow and update session handoff`
- `3490ffa` `Hide answer feedback during official-length exams`
- `9cc7c1e` `Remove agent exam button and default to 65 questions`
- `ce1a6b1` `Improve exam realism and support plan accuracy`

## Git / Identity Status
- The last 4 earlier commits that had the wrong author identity were rewritten.
- Current pushed commits use:
  - `Empyrz901 <105421908+Empyrz901@users.noreply.github.com>`
- `main` is currently in sync with `origin/main`.

## Current Uncommitted Change
- [.claude/settings.local.json](/c:/Users/Jeremy/Documents/Claude_projects/AWS_Docs/aws_pract_quiz.github.io/.claude/settings.local.json)
  - local-only settings change
  - intentionally left uncommitted

## AWS Docs / MCP Status
- Workspace `.mcp.json` was updated earlier to use `uvx` instead of a Windows path.
- `uv` was installed successfully on this machine.
- Codex home config was updated in `config.toml` with:

```toml
[mcp_servers.aws_docs]
command = "uvx"
args = ["awslabs.aws-documentation-mcp-server@latest"]
```

- VS Code user settings were updated earlier with:

```json
"chatgpt.useExperimentalLspMcpServer": true
```

- User confirmed that the VS Code command for the Codex MCP bridge works.
- In the earlier session, `list_mcp_resources` still returned empty, but direct AWS Docs MCP calls succeeded, so the AWS Docs MCP appeared usable even without exposed resources/templates.

## Important Conclusions So Far
- The 65-question generator is now less patterned both within a run and across recent official runs in the same browser.
- The remaining realism gap is mostly in question authoring quality, especially weaker templated distractor banks.
- CLF-C02 official mode should continue avoiding out-of-scope services.
- The biggest UX improvements shipped so far are:
  - default to `65` questions
  - no immediate per-question correctness reveal in official mode
  - editable answers during the official exam
  - better variation between official exam sessions

## Official-Scope Filtering Added
Current official-mode exclusion terms include:
- AWS Wavelength
- AWS CloudShell
- AWS CodeDeploy
- AWS IoT Greengrass
- AWS Network Firewall
- FSx for Lustre
- AWS Transfer Family
- AWS Elemental MediaConvert

These are filtered from official 65-question mode in [index.html](/c:/Users/Jeremy/Documents/Claude_projects/AWS_Docs/aws_pract_quiz.github.io/index.html).

## Best Next Steps
1. Run a few more 65-question exams in the browser and verify the perceived overlap is now materially lower across consecutive sessions.
2. Re-check AWS Docs MCP availability in a fresh Codex session and keep using AWS docs to validate scope and correctness.
3. Rewrite or retire the weakest templated question families, especially:
   - [domain1_distractor_200.js](/c:/Users/Jeremy/Documents/Claude_projects/AWS_Docs/aws_pract_quiz.github.io/domain1_distractor_200.js)
   - [domain3_distractor_200.js](/c:/Users/Jeremy/Documents/Claude_projects/AWS_Docs/aws_pract_quiz.github.io/domain3_distractor_200.js)
4. Decide whether to delete the now-unused `startAgentTake65Exam()` path from [index.html](/c:/Users/Jeremy/Documents/Claude_projects/AWS_Docs/aws_pract_quiz.github.io/index.html) or keep it as an internal helper.
5. If overlap still feels too high, increase the recent-session penalty weights or extend history beyond the last 3 official runs.

## Files Modified This Session
- [index.html](/c:/Users/Jeremy/Documents/Claude_projects/AWS_Docs/aws_pract_quiz.github.io/index.html)
- [SESSION_HANDOFF.md](/c:/Users/Jeremy/Documents/Claude_projects/AWS_Docs/aws_pract_quiz.github.io/SESSION_HANDOFF.md)
