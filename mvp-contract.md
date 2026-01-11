# huhuGERMAN — MVP Contract (V1)

**Status:** Final - Non-Negotiable Scope  
**Last Updated:** January 10, 2026

## 1. Product Definition & Goal
huhuGERMAN is a **Progressive Web App (PWA)** for German A1, designed for Spanish-speaking learners. The goal is to build **resilience and confidence** through a low-friction daily ritual, not exhaustive grammar coverage.

## 2. Supported Skills & Pedagogy
* **Skills:** Reading, Writing (typing), and Listening (Text-to-Speech)
* **Methodology:** The **HUHU Method** (Hochdeutsch, Umgangssprache, Halt!, Übung)
* **Logic:** Contrastive examples (DE ↔ ES) and plain metaphors. No academic jargon
* **Symbolism:** **Taro** acts as a minimal guide for continuity and resilience

## 3. Interaction Model (The Three Pillars)
The app consists of exactly three sections:

### 3.1 Lernen (The Daily Ritual)
* **Lesson Navigation:**
  - Users can navigate freely backward to previously completed lessons
  - Users cannot skip ahead to locked lessons
  - Only one lesson is suggested per day, but not enforced
  - No gamification, streak penalties, or pressure mechanisms

### 3.2 Phonetik (The Labor)
* A curated list of high-frequency words for listening exposure
* No scoring or evaluation

### 3.3 Was ist huhu? (The Context)
* A read-only section explaining the philosophy
* Links to authentic resources

## 4. Technical Invariants (Non-Negotiable)
1. **Deterministic Feedback:** Every exercise must have a clear right/wrong answer. No AI-generated or ambiguous feedback
2. **Offline-First:** All core content and functionality must work without an internet connection
3. **Micro-format:** Activities must be completable in **under 5 minutes**
4. **No Audio Input:** No speech recognition or recording in V1
5. **Native TTS:** Audio is delivered via the device's Speech API

## 5. Explicitly Out of Scope
* Gamification (streaks, points, badges)
* Video content or complex UI animations
* Teacher/Admin dashboards (except for basic CRUD operations)
* Social features or community uploads
* Lesson scheduling by date
* Notifications or reminders
* AI-driven personalization

## 6. Boundary Statement
If a feature increases cognitive load or requires non-deterministic logic, it is deferred. Efficiency and reliability are the priority.

## 7. Administrative Scope
* No admin UI is provided in V1
* Content is managed through developer-controlled data sources
* Basic CRUD operations via protected routes only
