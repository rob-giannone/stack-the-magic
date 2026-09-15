# Pricing

Structured, time-tracked Walt Disney World pricing data gathered by the
`disney-pricing-agent` subagent (see
`.claude/agents/disney-pricing-agent.md`). Separate from `/research`'s
other data because prices go stale much faster than facts like an
attraction's height requirement, and need their own recheck discipline.

```
/research/pricing
  /tickets/<slug>.json           # park tickets, Annual Passes
  /lightning-lane/<slug>.json    # Multi Pass, Individual/Single Pass
  /resorts/<slug>.json           # rate ranges by season/room type
  /dining/<slug>.json            # typical spend, price tiers, dining plan
  /transportation/<slug>.json    # Mears, rideshare ranges, parking
```

Every file's `price_points` array is a history, not a single value — a
re-verification appends a new point rather than overwriting the old one.
The most recent point per `label` is the current price. This is also the
foundation for a possible future "price over time" dashboard feature (the
Disney Inflation Index idea — see `../business-plan-notes.md`).

Each entry also carries `recheck_after`: a date past which that price
should be treated as unverified until someone checks it again. See the
agent definition for the exact schema and recheck-interval guidance per
category.
