@AGENTS.md

## Git freshness check

Drew and Rob both work on this repo from separate branches, so before
starting any new task, feature, or code change in a session — and always
at the very start of a new session — check whether the local checkout is
current:

```bash
git fetch origin main --quiet
git rev-list --count HEAD..origin/main
```

- If the count is `0`, the branch is current — no need to say anything,
  just continue.
- If the count is greater than `0`, tell the user clearly how many commits
  they're behind on `origin/main` (and if `git log HEAD..origin/main
  --oneline` shows a merged PR, name it), then tell them to run:
  ```bash
  git checkout main
  git pull
  git checkout -b <descriptive-branch-name>
  ```
  before continuing, so they don't build on top of stale code that
  conflicts with what the other person already merged.

This check only needs to run once per session (and again if the user asks
to start unrelated new work later in the same session) — there's no need
to re-fetch on every single follow-up message in an ongoing task.
