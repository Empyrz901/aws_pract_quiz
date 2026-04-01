# Session Handoff

## Goal
Make this AWS Cloud Practitioner quiz app feel as close as possible to the real CLF-C02 exam.

## What Was Changed
- Improved official 65-question simulation in [index.html](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/index.html):
  - near-duplicate suppression
  - less rigid domain/style/multi-answer composition
  - scored 50 built first, then 15 unscored injected separately
  - stronger concept-repeat limits
  - official mode now strongly prefers core question banks over `*_distractor_200.js`
  - official mode excludes several CLF-C02 out-of-scope services
- Added export of the generated 65-question set.
- Removed the start-screen `Agent Take 65` button.
- Changed the default quiz length to `65 (official length)`.
- Changed official 65-question mode so it does not reveal correctness or explanations immediately after each answer.

## Current Status
- The app is intended to default to a realistic CLF-C02-style `65` question run.
- In official 65-question mode, answers should stay recorded without showing correct/wrong feedback until the results screen.
- The `Agent Take 65` JavaScript path still exists in [index.html](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/index.html), but its button was removed from the UI.
- A syntax regression in `submitMulti()` briefly broke startup, question-count refresh, and `Start Quiz`; that local fix is now present in [index.html](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/index.html) but is not yet committed at the time of this handoff.

## Recent Commits
- `29833e8` `Hide answer feedback during official-length exams`
- `98a803d` `Remove agent exam button and default to 65 questions`
- `39762f5` `Improve exam realism and support plan accuracy`

## Current Uncommitted Change
- [index.html](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/index.html)
  - Fixed a JavaScript syntax error caused by an extra `)` in `submitMulti()`.
  - Verified the inline script parses successfully via JavaScriptCore after the fix.

## AWS Docs / MCP Status
- Workspace `.mcp.json` was updated to use `uvx` instead of a Windows path.
- `uv` was installed successfully on this machine.
- Codex home config was updated in [config.toml](/Users/jmougey/.codex/config.toml) with:

```toml
[mcp_servers.aws_docs]
command = "uvx"
args = ["awslabs.aws-documentation-mcp-server@latest"]
```

- VS Code user settings were updated in [settings.json](/Users/jmougey/Library/Application%20Support/Code/User/settings.json) with:

```json
"chatgpt.useExperimentalLspMcpServer": true
```

- User confirmed that the VS Code command for the Codex MCP bridge now works.
- In this current session, `list_mcp_resources` still returned empty, but direct AWS Docs MCP calls succeeded, so the AWS Docs MCP is usable even without exposed resources/templates.

## Important Conclusions So Far
- The 65-question generator is now much less patterned than before.
- The remaining realism gap is mostly in question authoring quality, especially templated distractor banks.
- CLF-C02 official mode should avoid out-of-scope services.
- The biggest UI/UX changes now are:
  - default to `65` questions
  - no immediate per-question correctness reveal in official mode

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

These were filtered from official 65-question mode in [index.html](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/index.html).

## Best Next Steps
1. Commit the current local [index.html](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/index.html) syntax fix, because the working tree is currently dirty.
2. In a fresh Codex session, re-check AWS Docs MCP availability and keep using AWS docs to validate scope/correctness.
3. Rewrite or retire the weakest templated question families, especially:
   - [domain1_distractor_200.js](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/domain1_distractor_200.js)
   - [domain3_distractor_200.js](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/domain3_distractor_200.js)
4. Decide whether to delete the now-unused `startAgentTake65Exam()` path from [index.html](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/index.html) or keep it as an internal helper.
5. Keep official 65-question mode focused on realistic CLF-C02 scope and tone.

## Files Modified This Session
- [index.html](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/index.html)
- [.mcp.json](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/.mcp.json)
- [config.toml](/Users/jmougey/.codex/config.toml)
- [settings.json](/Users/jmougey/Library/Application%20Support/Code/User/settings.json)
