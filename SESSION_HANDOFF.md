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
- Added an in-app `Agent Take 65` flow and export of the generated 65-question set.

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
- In this current session, `list_mcp_resources` still returned empty, so the next session should re-check MCP availability first.

## Important Conclusions So Far
- The 65-question generator is now much less patterned than before.
- The remaining realism gap is mostly in question authoring quality, especially templated distractor banks.
- CLF-C02 official mode should avoid out-of-scope services.

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
1. In a fresh Codex session, first verify that AWS Docs MCP is now visible.
2. Use AWS docs only to validate scope and correctness of question bank items.
3. Rewrite or retire the weakest templated question families, especially:
   - [domain1_distractor_200.js](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/domain1_distractor_200.js)
   - [domain3_distractor_200.js](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/domain3_distractor_200.js)
4. Keep official 65-question mode focused on realistic CLF-C02 scope and tone.

## Files Modified This Session
- [index.html](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/index.html)
- [.mcp.json](/Users/jmougey/dev/aws_pract_quiz/aws_pract_quiz/.mcp.json)
- [config.toml](/Users/jmougey/.codex/config.toml)
- [settings.json](/Users/jmougey/Library/Application%20Support/Code/User/settings.json)
