# Waiting Screen Study — Participant Orchestrator

A small Next.js (App Router + TypeScript + Tailwind) site that **routes participants
through the study** — it does not host the booking task or waiting screens itself.
Those live in your Figma prototype. This site only handles: country/language
selection, eligibility screening, random sequence assignment, and gating progression
between the Figma prototype and your Google Forms surveys.

## Flow implemented

```
/               landing (bilingual KR + ZH-Hant)
/country        choose Korean / Taiwanese background → sets UI language for the rest of the session
/eligibility    link out to your Google Forms screening survey (KR-1 / TW-1) → on return,
                randomly assigns counterbalancing Sequence 1 or 2 (50/50, independent of country)
/booking        state machine:
                  Test 1 gate  → shows task condition (route/date/time/seat) → opens the
                                 correct Figma prototype link for {country, sequence} →
                                 participant clicks "완료했습니다, 계속하기" when done
                  → external post-survey (KR-2 / TW-2)
                  Test 2 gate  → same pattern, opens the Task-2 starting frame
                  → external post-survey (KR-3 / TW-3, incl. manipulation checks)
                  → thank-you screen
```

Each of the four Figma pages you already built — **Korean ver. seq 1**, **Korean ver.
seq 2**, **Taiwan ver. seq 1**, **Taiwan ver. seq 2** — contains that combination's
full Test 1 → waiting screen → Test 2 → waiting screen flow, already in the right
language and screen order. This site just decides *which* of those four to send each
participant to, and gates them through the two Google Forms breaks in between.

Returning from Figma (or from Google Forms) is **manual**: the participant clicks a
"완료했습니다, 계속하기" / "我已完成 — 繼續" button on the gate page. This is simpler
and more robust than relying on Figma prototype hotspots or form redirect settings, at
the cost of trusting participants to click through honestly.

## Before you deploy — fill these in

All in `lib/config.ts`:

1. **`EXTERNAL_SURVEYS`** — 6 Google Forms URLs (KR-1/2/3, TW-1/2/3). The three KR
   ones are already filled in; replace the three `REPLACE_TW_*` placeholders once
   the Chinese forms exist.
2. **`FIGMA_PROTOTYPES`** — 8 Figma prototype URLs (4 pages × 2 tasks each). For each:
   - Open the relevant Figma page (e.g. "Korean ver. seq 1")
   - Select the frame where that task should start
   - Click **Present (▶)** — Figma gives you a link scoped to that starting frame
     (`?node-id=...&starting-point-node-id=...`)
   - Paste it into the matching slot in `FIGMA_PROTOTYPES`
3. **`GOOGLE_FORM_ENTRY`** (and optionally `GOOGLE_FORM_SEQ_ENTRY`) — see next section.

Confirmed mapping (each combo uses the SAME Figma page for both tasks — the language
stays tied to the participant's own country throughout):

| Combo | Figma page | after Task 1 | after Task 2 |
|---|---|---|---|
| KR seq 1 | Korean ver. seq 1 | KR-2 | KR-3 |
| KR seq 2 | Korean ver. seq 2 | KR-2 | KR-3 |
| TW seq 1 | Taiwan ver. seq 1 | TW-2 | TW-3 |
| TW seq 2 | Taiwan ver. seq 2 | TW-2 | TW-3 |

## Linking survey responses to the same participant

Since KR-1/2/3 and TW-1/2/3 are six separate Google Forms, there's nothing that ties
one participant's three responses together by default. This site generates a short
**participant code** (e.g. `P-7X2K9A`) per session and:

- appends it to every form link as a **pre-filled answer** (Google Forms'
  `?entry.<ID>=<value>` mechanism), and
- shows it on-screen with a copy button as a fallback, in case prefill isn't wired up
  yet or the participant edits the field.

**Setup per form (all 6):**
1. Add a required short-answer question near the top, e.g. "참여자 코드".
2. Fill in a test value, then **⋮ menu → "미리 채워진 링크 받기" (Get pre-filled
   link)**.
3. The generated URL contains `entry.1234567890=<your test value>` — copy just the
   number.
4. Paste it into `GOOGLE_FORM_ENTRY` in `lib/config.ts`, in the slot matching that
   form (e.g. `GOOGLE_FORM_ENTRY.eligibility.KR` for KR-1).

Repeat for all 6 forms. If you also add a "시퀀스" short-answer question (handy for a
quick counterbalancing sanity check later), do the same steps and fill in
`GOOGLE_FORM_SEQ_ENTRY` — this one only makes sense for post1/post2, since sequence
isn't assigned yet when the eligibility form opens.

Everything else (task condition labels, dates, seat preference) is already filled in
to match the study design (Task 1: home→Tokyo, Sep 15, morning, window seat; Task 2:
Tokyo→home, Sep 20, afternoon, aisle seat) — edit `TASK_1` / `TASK_2` in the same file
if these change.

This prototype does **not** run its own backend. Eligibility screening,
post-questionnaire responses, and manipulation-check answers are all collected in your
Google Forms; the in-Figma prototype holds the actual booking UI and waiting screens.
This site only sequences and gates the handoffs between them, and carries the
participant code through so responses can be joined later.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

Any Next.js host works (Vercel is simplest — `vercel deploy`). No environment
variables or database are required.
