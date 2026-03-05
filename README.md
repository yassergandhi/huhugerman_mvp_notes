# huhugerman-mvp-notes

**Pre-implementation design documentation for the huhuGERMAN platform.**

This repository is not a finished application. It is the design documentation that preceded implementation: a PRD, MVP contract, system decomposition, and type definitions written before a single line of production code existed.

> A PRD that knows what it won't build is more mature than one that lists everything possible.

---

## The Pedagogical Problem

Mexican university students arrive in Germany with **Hochdeutsch** — the formal, scholastic German taught in classrooms. They arrive unable to navigate **Umgangssprache** — the informal, colloquial German used in everyday social and academic interactions.

This disconnect is a structural failure, not a learner failure. It contributes to the **41% dropout rate** among international students in Germany (DAAD/Reucher 2019). The gap is not grammatical. It is communicative and cultural. Students have learned German; they have not encountered real German.

**huhuGERMAN's hypothesis:** This gap can be closed *before* students arrive — by introducing authentic German media from A1 level, with explicit metacognitive scaffolding that distinguishes global comprehension from selective comprehension. Mexico is the laboratory for error. Germany cannot be.

---

## Origins: 2011, Not 2022

The method did not emerge from a theory. It emerged from 15 years of classroom observation at FCPyS-UNAM (2011–2014) and CELEX-UAM Azcapotzalco (2015–present), formalized progressively through two UNAM theses.

| Year | Milestone | Institution | Output |
|------|-----------|-------------|--------|
| 2011 | DaF instruction begins | FCPyS-UNAM | First longitudinal observation |
| 2015 | B.A. thesis: Vandergrift metacognitive strategies + Gadamer *Bildung* as operative framework | CELE-UNAM | Titulación |
| 2017 | *El viaje de Emilio* — first published case | RDU UNAM Vol.18(5) | Peer-reviewed article |
| 2019 | Research stay — Hamburg fieldwork, C1 certification | Hochschule Offenburg / SZ-Universität Hamburg | DAAD-funded testimonials |
| 2020 | M.A. thesis: 41% dropout diagnostic, Mexico–Germany comparison | UNAM Pedagogía | CONACYT-funded |
| 2022 | First formally documented student case (Karen Morales) | CELEX-UAM | Evidence of established method |
| 2021→ | huhuGERMAN production system | CELEX-UAM | 30–40 students/trimester |
| 2026 | Target publication: *Die Unterrichtspraxis* | In progress | First editorial milestone |

**The July 2022 case is evidence of a method with roots in 2011 — not its origin.** This chronology is not negotiable.

---

## The H.U.H.U. Method: Structure Encoded in Acronym

The method's name encodes its four-phase structure:

| Phase | German | English | Function |
|-------|--------|---------|----------|
| **H** | Hochdeutsch | Formal register | Baseline input |
| **U** | Umgangssprache | Colloquial register | Target exposure |
| **H** | Halt! | Stop — metacognitive pause | Reflection |
| **U** | Übung | Practice — production | Output |

Each 90-minute asynchronous session follows these four phases across six structured *Teile*. Sessions culminate in **mandatory metacognitive reflection written in Spanish** — the student's L1 — to separate metacognitive processing from linguistic performance. This is not a convenience; it is the operative definition of *Bildung* (Gadamer 2003) in the classroom.

**Primary material:** Y-Kollektiv documentaries (funk/ARD, public media) — authentic, free, linguistically rich, culturally relevant. Authentic input is introduced from A1. Regional variation and colloquial registers enter from week one, not after A2.

---

## MVP Contract: Explicit Scope

### In Scope
- Digital submission of written exercises
- Automatic feedback on submitted free text
- Session structure aligned with the H.U.H.U. four phases
- Student identity resolution across platforms

### Explicitly Out of Scope (and Why)

| Feature | Reason Excluded |
|---------|-----------------|
| Gamification / streaks | Contradicts the metacognitive focus. The method asks for reflection, not reward loops. |
| Penalties / failure states | Philosophically incompatible. *"Hier darfst du Fehler machen."* Error is laboratory data, not a consequence. |
| Video content in platform | Y-Kollektiv is public on YouTube. Hosting creates cost and maintenance with no pedagogical value. |
| Teacher dashboards | Not the MVP's job. Instructor needs are out of scope for v1. |
| Social features | Out of scope for formative assessment in a university context. |
| AI personalization across sessions | The platform gives feedback per submission. Cross-session memory is a research question, not a product feature. |
| Audio input | Mobile offline context. Native TTS accepted as known trade-off. |

**An out-of-scope list is a design document's most important section.** It defines maturity through deliberate exclusion, not feature accumulation.

---

## Type Definitions: The Implementation Contract

The types defined here encode the H.U.H.U. structure in code *before* any UI or backend existed. They served as the implementation contract.
```typescript
interface Lesson {
  id: string;
  woche: number;
  niveau: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  
  hochdeutsch: LessonPhase;      // Formal input
  umgangssprache: LessonPhase;   // Colloquial exposure
  halt: MetacognitivePhase;      // Reflection pause
  uebung: PracticePhase;         // Production
}

interface LessonPhase {
  title: string;
  content: string;
  audioId?: string;
  contextNote?: string;
}

interface MetacognitivePhase {
  title: string;
  explanation: string;
  reflectionPrompt: string;      // In Spanish (L1)
  metaphor?: string;             // Conceptual anchor
}

type ExerciseSection =
  | { type: 'MultipleChoice'; options: string[]; correct: number }
  | { type: 'FillInBlank'; template: string; answer: string }
  | { type: 'FreeText'; rubric: string };
```

The `ExerciseSection` discriminated union enforces that every exercise has a known type at compile time. No `any`. No implicit fallbacks. This is not a convenience — it is a requirement for a system that must be auditable and reproducible as research data.

---

## System Decomposition: Responsibility Boundaries

| Module | Responsibility | What It Does NOT Do |
|--------|---------------|---------------------|
| SubmissionService | Accept and validate submissions | Evaluate correctness |
| FeedbackEngine | Generate language feedback | Remember past submissions |
| IdentityResolver | Correlate student identities | Authenticate users |
| LessonLoader | Serve lesson content | Personalize content per student |
| SessionTracker | Record session state | Enforce completion requirements |

**The "What it does NOT do" column is as important as the responsibilities.** Clear boundaries prevent scope creep and make systems maintainable — and in a research context, auditable.

---

## Why the MVP Wasn't Implemented as a PWA

The original PRD considered an offline-first PWA with deterministic feedback (no AI). The production context changed the decision.

**UAM Azcapotzalco runs asynchronous written submission workflows.** Students submit free-text responses. Deterministic feedback works for Duolingo. It doesn't work for formative writing assessment where the research question depends on what the student actually produced, not whether they clicked the right answer.

The shift to AI-powered free-text feedback required:
- Server-side API calls (no offline determinism)
- Session state persistence (no local-only storage)
- A web portal (not a PWA)

Real context overrode the original technical preference. This is not a failure of planning — it is planning that adapted to documented reality.

---

## Research Trajectory

This platform is the intervention layer of a longitudinal research project. The platform is not the research; it is the instrument.

| Phase | Document | Year | Output |
|-------|----------|------|--------|
| Observation | Teaching practice, FCPyS-UNAM | 2011–2014 | Field notes |
| Theoretical foundation | B.A. thesis: Vandergrift + Gadamer *Bildung* | 2015 | Titulación UNAM |
| Method publication | *El viaje de Emilio*, RDU UNAM | 2017 | Peer-reviewed |
| Diagnostic study | M.A. thesis — Hamburg fieldwork | 2019–2020 | CONACYT-funded |
| Intervention | huhuGERMAN production system | 2021→ | Active |
| Publication target | *Die Unterrichtspraxis* (AATG) | May 2026 | Q3 ESCI |
| Mid-range target | *Language Teaching Research* (SAGE) | 2027 | Q1 SSCI, IF 6.40 |
| Long-range target | *System* (Elsevier) | 2028+ | Q1 SSCI, IF 6.90 |

The editorial strategy follows ascending friction. DtU validates the classroom protocol and the case data. LTR validates the methodology. System requires n≥30 and a dedicated trimester for the quantitative layer.

---

## Theoretical Framework (Abbreviated)

The method operates at the intersection of:

- **Krashen (1982)** — comprehensible input i+1; h.u.h.u. redefines what makes authentic input comprehensible (metacognitive scaffolding, not simplification)
- **Vandergrift (1999, 2022) / Goh** — metacognitive listening: planning, monitoring, resolution, evaluation; operationalized across six *Teile* from week 1 at A1
- **Gadamer (2003)** — *Bildung* as transformative encounter with the Other; the authentic audio is the Other; the decision to persist is the student's act
- **Borg (2013)** — teacher research as legitimate epistemology; 15 years of systematic classroom observation is the evidential base, not a limitation

---

## Stack

`TypeScript` · `Google Apps Script` · `Google Sheets` · `Astro` · `Supabase` · `Zod`

---

## Related

→ **[huhugerman.com](https://huhugerman.com)** — Production system  
→ **[resilient-api-integration-demo](https://github.com/yassergandhi/resilient-api-integration-demo)** — Chaos engineering diagnostic  
→ **[yassergandhi.dev](https://yassergandhi.dev)** — Professional portfolio

---

## About

**Yasser Gandhi Hernández Esquivel**

Learning Systems Architect · Germanista C1 · Senior Developer

Lic. Letras Alemanas UNAM (2012) · MEd Pedagogía UNAM (2020) · Lic. Desarrollo de Sistemas Web UdeG (2025, GPA 98.5) · C1 Hochschule Offenburg (2019) · 11 Scopus peer-review contributions · Active reviewer RIEM/UNAM

This design documentation is the distillation of 15 years of pedagogical observation, theoretical research, and systems architecture. The MVP contract reflects not what is possible to build, but what is necessary to test the pedagogical hypothesis.

→ [yassergandhi.dev](https://yassergandhi.dev) · [LinkedIn](https://linkedin.com/in/yassergandhi)

---

*HIER DARFST DU FEHLER MACHEN.*