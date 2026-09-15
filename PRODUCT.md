# Product Vision — Stack the Magic

A living reference for what this app is trying to become. Update this file
as the plan changes — it's meant to stay current, not to be a historical
snapshot. Last reviewed: 2026-09-15.

## Mission

A virtual travel agent and companion app for Walt Disney World: capture
what a group actually needs, and turn that into a real, editable park plan
instead of a pile of blog posts to read yourself.

## The end-to-end flow

1. **User finds the website.**
2. **User logs in** with email + one-time passcode (no password).
3. **Dashboard** — the central hub. From here a logged-in user can:
   - **A. Plan a new trip** — kicks off the questionnaire below
   - **B. Edit an existing trip** — open a previously built plan
4. **Questionnaire** (Netflix-style onboarding) captures, at minimum:
   - Party composition (adults, kids + ages)
   - Accessibility/mobility needs
   - Visit history (first-timer vs. veteran)
   - Thrill level, character preferences, dietary restrictions
   - Budget tier, pace, transportation tolerance
   - **Trip logistics** *(not yet built — see Known Gaps)*: trip length,
     how many park days they're paying for, pool days, Disney Springs
     days, how they're arriving (flying into MCO vs. driving), airport →
     resort transportation, and parking at the resort/parks
5. **Recommendation engine** produces a first-pass itinerary: specific
   rides, Lightning Lane priorities, and dining suggestions, tailored to
   the questionnaire answers.
6. **User edits the plan** — swap a dining suggestion, change park days,
   adjust anything the engine proposed. The first pass is a starting
   point, not a final answer.
7. **Trip management niceties**, roughly in priority order:
   - Rename and save trips
   - Share a trip with friends/family
   - Connect a MyDisneyExperience account *(see Known Gaps — this one
     needs feasibility research before it's a real commitment)*

## Current status

| Piece | Status |
|---|---|
| Website live | ✅ Deployed on Vercel, auto-deploys from `main` |
| Email + OTP login | ❌ Not started — needs Supabase Auth |
| Dashboard (new/edit trip) | ❌ Not started — needs Supabase (a `Trips` table) and the dashboard UI |
| Questionnaire — core | 🟡 Built: party, accessibility, visit history, thrill, characters, dietary, budget, pace, bus tolerance (11 steps, local state only — nothing persists yet) |
| Questionnaire — trip logistics | ❌ Not built: trip length, park day count, pool/Springs days, arrival method, airport/parking logistics |
| Recommendation engine | ❌ Not started. Research data exists (Magic Kingdom attractions + dining, sourced) but the actual matching/scoring logic and itinerary data model don't exist yet |
| Itinerary editing | ❌ Not started — depends on the engine existing first |
| Rename / save / share | ❌ Not started — needs Supabase persistence + a sharing model |
| MyDisneyExperience connection | ⚠️ Idea only, not researched. Disney has no public API for this — see Known Gaps |

## Why Supabase is the real unlock

Steps 2, 3, 6, and 7 all depend on having a real backend — auth, persisted
trips, multi-trip management, sharing. Right now the questionnaire's
answers live only in one browser's `localStorage`. Setting up Supabase is
the single highest-leverage next piece of infrastructure, whenever we're
ready for it.

**Deliberately deferred as of 2026-09-15** — not being worked on yet by
team decision. Other work (questionnaire expansion, recommendation engine
design, more park research) can proceed without it.

## Known gaps and open questions

- **MyDisneyExperience integration**: Disney doesn't offer a public API
  for third-party apps to connect to a user's account. A real integration
  would mean either the user manually entering reservations, or
  reverse-engineering Disney's private app API — the same territory
  already ruled out for the dining-alert ("Sniper") feature. Keep on the
  roadmap as an idea; don't treat it as a scoped feature until it's been
  researched properly.
- **Trip-logistics questionnaire questions** are listed above but not yet
  designed as actual onboarding steps (options, copy, data model).
- **Recommendation engine design** hasn't started. This is where the
  `data-scientist` subagent should lead — see
  [`.claude/agents/data-scientist.md`](.claude/agents/data-scientist.md).
- **Research coverage** is Magic Kingdom-only so far (attractions +
  dining). EPCOT, Hollywood Studios, and Animal Kingdom haven't been
  researched — see [`research/README.md`](research/README.md).

## Proposed build order

1. ~~Repo, CI-lite (lint/build gate), subagents, initial onboarding UI,
   Magic Kingdom research~~ — done
2. Expand the questionnaire with trip-logistics questions
3. Design the recommendation engine (data-scientist agent), producing a
   first-pass itinerary from questionnaire answers + research data
4. Supabase — auth, schema, persistence (unlocks login, dashboard, saving)
5. Dashboard — multi-trip workspace, itinerary display and editing
6. Niceties — rename/share, MyDisneyExperience feasibility research

This order isn't fixed — revisit it as priorities shift, but keep this
file in sync with reality when it does.
