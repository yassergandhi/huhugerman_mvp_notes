# huhugerman-mvp-notes

**Pre-implementation design documentation for the huhuGERMAN platform.**

This repository preserves the product and architecture thinking that preceded implementation: PRD notes, scope decisions, type definitions, decomposition, and explicit non-goals.

It is not a finished application and should not be read as evidence that every listed technology or architecture was deployed.

## Why this repository matters

The strongest artifact here is not a feature list. It is the boundary-setting work:

- what the MVP needed to test;
- what it deliberately excluded;
- which responsibilities belonged to which component;
- which assumptions later changed when the implementation met actual classroom use.

That makes this repository a record of product reasoning rather than a codebase.

## Problem framing

The original project explored how to expose university German learners to authentic and colloquial language while preserving enough structure for reflection and feedback.

The pedagogical hypothesis evolved across classroom practice and research. The software design came later and should not be backdated to the start of the teaching trajectory.

## MVP contract

### In scope

- digital submission of written exercises;
- structured lesson/session flow;
- feedback on free-text submissions;
- low-friction student identification;
- explicit metacognitive reflection.

### Explicitly out of scope

| Feature | Why excluded |
|---|---|
| Gamification / streaks | The intervention focused on reflection rather than reward loops. |
| Penalty-driven failure states | Error was treated as information, not punishment. |
| Hosted video catalog | Public source material already existed; hosting added maintenance without testing the core hypothesis. |
| Large instructor dashboards | Not required for the first intervention flow. |
| Social features | Outside the formative-assessment problem. |
| Cross-session AI personalization | A research question, not an MVP requirement. |
| Audio capture | Outside the first written-submission workflow. |

## Design-time type ideas

The TypeScript definitions in this repository were written as implementation contracts before the final technical path was known.

They describe concepts such as:

- lesson phases;
- metacognitive reflection;
- typed exercise sections;
- component responsibility boundaries.

These definitions are design artifacts. They should not be confused with the code that ultimately ran in the private Apps Script production workflow.

## Responsibility boundaries

A recurring design principle was to state both what a component does and what it does not do.

Examples included:

- submission handling without evaluating every answer;
- feedback generation without assuming cross-session memory;
- identity correlation without conflating it with authentication;
- session tracking without forcing completion.

The value of those notes is architectural clarity, not proof that every service was implemented as a standalone production component.

## What changed after planning

The initial design considered an offline-first PWA and more deterministic feedback.

Later experiments with free-text feedback and external AI APIs changed the technical direction. That adaptation produced separate repositories rather than a single linear migration.

Current ecosystem state:

- `huhugerman-instrument` — private production Apps Script / Forms / Sheets workflow;
- `huhugerman-frontend` — experimental Astro portal using an AI API;
- `feature/dynamic-lessons` — unmerged TypeScript + Zod domain-modeling branch;
- `huhugerman-backend` — separate identity-normalization prototype;
- `resilient-api-integration-demo` — public controlled-failure engineering demo.

These are related experiments and implementations, not successive versions of one deployed stack.

## Technology status

| Status | Technologies |
|---|---|
| Design-time contracts in this repo | TypeScript |
| Private production workflow implemented elsewhere | Google Apps Script · Google Forms · Google Sheets |
| Experimental portal implemented elsewhere | Astro · TypeScript · Supabase client · DeepSeek API |
| Domain validation prototype | Zod on `feature/dynamic-lessons` |
| Historical / planned ideas | PWA, broader backend decomposition, cross-session personalization |

## Research chronology vs software chronology

The research and teaching trajectory predates the software implementation.

That distinction matters.

A long pedagogical history can explain why certain software constraints were chosen, but it is not evidence of equivalent years of software-engineering production experience.

## Related repositories

- [huhugerman-frontend](https://github.com/yassergandhi/huhugerman-frontend)
- [huhugerman-backend](https://github.com/yassergandhi/huhugerman-backend)
- [resilient-api-integration-demo](https://github.com/yassergandhi/resilient-api-integration-demo)
- `huhugerman-instrument` — private production workflow

## About

**Yasser Gandhi Hernández Esquivel**

Software Developer · German lecturer and researcher

B.S. Web Systems Development (UdeG, 2025) · M.Ed. Pedagogy (UNAM, 2020) · German Studies (UNAM, 2012)

[LinkedIn](https://linkedin.com/in/yassergandhi)

---

*HIER DARFST DU FEHLER MACHEN.*
