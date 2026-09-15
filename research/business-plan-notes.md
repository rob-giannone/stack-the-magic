# Notes from the earlier "Stack the Magic" business plan

Rob and Drew had an earlier, tangential "Stack the Magic" concept: a
faceless-editorial affiliate content site focused on Disney trip financial
optimization (blog-based, not an app). That plan isn't what this repo
builds, but a few pieces of it are worth carrying forward. Reviewed
2026-09-15. See also [personas.md](./personas.md) for the persona system,
which is the most directly reusable piece.

**Caveat**: specific figures below (ticket prices, payout ranges) are from
that old planning doc, not independently verified. Treat as directional
until the `disney-researcher` agent confirms current numbers.

## Future idea: the Disney Inflation Index

A monthly-tracked price index for a handful of WDW staples — e.g. Dole
Whip price, a lightsaber toy, a 1-day base ticket, DVC point resale rates,
Lyft cost from MCO to a resort, and any active ticket/dining promotions.

The original pitch was for this to be a public "source of truth" content
piece. For this app, it's a natural **dashboard widget**: a small,
regularly-updated panel showing WDW cost trends over time. It's also a
clean fit for the `disney-researcher` agent's job (sourced, dated facts)
and could double as return-visit bait for the dashboard — a reason to
check back in even between trips.

Not building this now — flagging it as a concrete "add-on" candidate for
after the core dashboard and recommendation engine ship.

## Reusable: the "Stack Audit" content format

A structured way of presenting an optimization to a reader:

1. **TL;DR** — the takeaway, up front
2. **Control group** — what a "normal" plan/spend looks like (baseline)
3. **The stack** — every layer of optimization applied
4. **Net result** — a clear before/after table
5. **Verified by [Persona], on [date]** — a trust stamp

This maps well onto how the recommendation engine could present a day
plan or a cost comparison in the dashboard: baseline vs. optimized plan,
a clear savings/benefit table, and a persona attribution instead of an
unexplained black-box suggestion. Worth prototyping as the actual
recommendation-card layout when we get to that part of the UI.

## Affiliate partner matrix (for whenever monetization is in scope)

Three-tier classification from the original plan:

- **Anchor tier** (high value, low frequency): DVC resale, Disney/Chase
  credit cards — the partnerships worth pursuing directly for revenue
  sustainability.
- **Velocity tier** (lower payout, high conversion): stroller rentals
  (e.g. Kingdom Strollers), ticket resellers (e.g. Undercover Tourist,
  Get Away Today) — cash-flow generators.
- **Invisible tier** (minimal income, trust-building): Amazon/Target gear
  recommendations — useful content, not a revenue driver.

Specific partners and payout ranges are in the original doc if needed
later; not reproduced here since they're stale and monetization isn't
in scope yet.

## Competitive context

- **The Points Guy (TPG)** — positioned as the generalist competitor;
  the differentiation angle was "TPG tells you what a product is, STM
  tells you how it functions as one tool in a larger optimization."
  Same differentiation angle could apply to this app vs. generic trip
  planners.
- **Steakout** and **Mouse Watcher** — existing dining-reservation
  "sniper" apps, i.e. direct competitors for the Watches/alerts feature
  from the original product scope. Worth a look at how they operate
  before building that feature (see the earlier discussion in this repo
  about staying clear of bot-detection-evasion tactics).

## Target user / market framing

- Positioned around a "One Big Trip" family: a single, expensive Disney
  trip ($7,500-$12,000 range) saved for over 2-3 years, where financial
  optimization matters a lot more than it would for a routine trip.
- Core pain points the old plan targeted: price fatigue, information
  overload across dozens of blogs, distrust of influencer-style content,
  and hidden/creeping costs.
- Worth keeping in mind for the recommendation engine's budget-tier
  weighting and for landing-page copy — the "budget" onboarding question
  probably deserves real weight in the matching logic, not just a filter.

## Not relevant — skipped entirely

The old plan's CMS choice (Ghost vs. Beehiiv), SEO/LLM technical
optimization strategy (llms.txt, JSON-LD entity linking, answer-first
chunking), and blog-post tag hierarchy are all specific to running a
content/SEO blog. None of it applies to this app and it isn't reproduced
here.
