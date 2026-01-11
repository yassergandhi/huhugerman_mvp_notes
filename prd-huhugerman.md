# Project Requirements Document: HuhuGerman PWA - MVP

## 1. Product Vision
A daily ritual for language confidence. We optimize for **resilience and psychological safety**, using German as the medium and confidence as the outcome.

## 2. Core Value Proposition
"One small daily win at a time." We differentiate by being learner-led, focused on the "outside Germany" context, and prioritizing habit formation over content bingeing.

## 3. Functional Requirements

### 3.1 The HUHU Daily Ritual (Core Loop)
Users encounter one single lesson per day following this structure:
* **H — Hochdeutsch:** 2–4 key formal phrases (Text + TTS)
* **U — Umgangssprache:** 1–2 natural spoken variants
* **H — Halt!:** A pause for error normalization or cultural insight
* **U — Übung:** One interactive exercise (Fill-in-the-blank, Multiple Choice, or Short Free-text)

### 3.2 User Experience & Taro
* **Navigation:** Simple tab bar (Lernen, Phonetik, Was ist huhu?)
* **Taro:** Appears only on the Home screen and Ritual Completion screen. No dialogue
* **Feedback:** Immediate, rule-based correction. No negative reinforcement for missed days
* **Progress Display:** Visual but non-competitive (e.g., "Lesson 4 of 30")

### 3.3 Technical Requirements
* **Stack:** React + Vite, Firebase Auth (Google), Firestore (offline persistence), Workbox PWA, Web Speech API
* **Authentication:** Required for progress syncing, but must persist offline
* **Admin:** A protected route for simple CRUD operations to manage the HUHU lesson sequence
* **Data Structure:** Lessons stored as ordered documents with deterministic IDs

## 4. Success Criteria
* **Primary:** A user can complete one lesson in <5 minutes while offline
* **Secondary:** The user returns the next day due to low friction, not "streak" pressure
* **Tertiary:** 90% of interactions work without network connectivity

## 5. Strategic Anchors
1. Confidence before correctness
2. Teacher as a vulnerable guide
3. Resilience symbolized by Taro
4. Progress without pressure
