PART 2: Project Requirements Document (PRD)
1. Functional Requirements
1.1 The HUHU Daily Ritual (Core Loop) Users encounter one single lesson per day following this structure:

H — Hochdeutsch: 2–4 key formal phrases (Text + TTS).

U — Umgangssprache: 1–2 natural spoken variants.

H — Halt!: A pause for error normalization or cultural insight.

U — Übung: One interactive exercise (Fill-in-the-blank, Multiple Choice, or Short Free-text).

1.2 User Experience & Taro

Navigation: Simple tab bar (Lernen, Phonetik, Was ist huhu?).

Taro: Appears only on the Home screen and Ritual Completion screen. No dialogue.

Feedback: Immediate, rule-based correction. No negative reinforcement for missed days.

Progress Display: Visual but non-competitive (e.g., "Lesson 4 of 30").

2. Technical Requirements
Stack: React + Vite, Firebase Auth (Google), Firestore (Offline Persistence Enabled).

PWA: Vite PWA Plugin / Workbox.

Audio: Web Speech API.

Authentication: Required for progress syncing, but must persist offline.

Data Structure: Lessons stored as ordered documents with deterministic IDs.

3. Success Criteria
Primary: A user can complete one lesson in <5 minutes while offline.

Secondary: The user returns the next day due to low friction, not "streak" pressure.

Tertiary: 90% of interactions work without network connectivity.