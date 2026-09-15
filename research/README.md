# Research

Structured Walt Disney World planning data gathered by the `disney-researcher`
subagent (see `.claude/agents/disney-researcher.md`). This is raw material for
the recommendation engine and dashboard — not app code.

```
/research
  /attractions/<attraction-slug>.json   # one file per attraction
  /dining/<restaurant-slug>.json        # one file per restaurant
  /resorts/<resort-slug>.json           # one file per resort
  /calendar-and-crowds/<topic>.md       # seasonal patterns, weather, events
```

Every entry is sourced and date-stamped — see the agent definition for the
exact schema and sourcing rules. Anything marked `needs_verification` should
be checked before it's relied on for a real recommendation.

Also here, outside that schema:
- [personas.md](./personas.md) — the "Veteran Collective" persona system,
  reusable content for attributing recommendation-engine output
- [business-plan-notes.md](./business-plan-notes.md) — notes pulled from
  an earlier, tangential "Stack the Magic" business plan, including the
  Disney Inflation Index as a future dashboard-widget idea
