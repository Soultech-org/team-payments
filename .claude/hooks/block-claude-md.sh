#!/bin/bash
cat <<'JSON'
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Edits to CLAUDE.md are blocked by policy. Propose changes via a pull request instead."
  }
}
JSON
