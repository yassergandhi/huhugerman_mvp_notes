# huhuGERMAN — MVP Contract (V1)

## 1. What this MVP supports

**huhuGERMAN (V1)** is a **Progressive Web App** for learning **German A1**, designed for **Spanish-speaking university students**.

The MVP focuses on building **language confidence through daily, tangible practice**, not on exhaustive coverage.

### Supported skills

* **Reading**
* **Writing**
* **Listening (via Text-to-Speech)**

### Learning format

* Text-based lessons
* Short, focused activities
* Immediate, deterministic feedback

### Exercise types (V1 only)

* **Fill in the blank**
* **Free-text input (short answers)**
* **Multiple choice (limited, optional)**

### Pedagogical approach

* Minimal grammar explanations
* Contrastive examples (German ↔ Spanish)
* Sociopragmatic explanations using **plain metaphors**, not academic terminology
* Emphasis on **authentic exposure**, not stereotypes

### Phonetik Labor

* A curated list of **high-frequency A1 words**
* Focus on:

  * Diphthongs
  * Special consonants difficult for Spanish speakers
* Pronunciation delivered via **native TTS on the device**
* No scoring, no evaluation — **exposure only**

### Product positioning

* huhuGERMAN is a **support tool** for face-to-face or guided German courses
* It does **not** replace a teacher
* Pronunciation correction and speaking guidance remain human-led

---

## 2. What this MVP does NOT support

The following are **explicitly out of scope** for V1:

* Speech recognition
* Speaking evaluation or feedback
* AI-generated feedback
* Adaptive difficulty
* Video content
* Gamification (points, streaks, badges)
* Drag & drop exercises
* Ordering / sequencing exercises
* Real-time collaboration
* Teacher dashboards

If a feature requires:

* Audio input
* Machine learning
* Complex UI widgets
  → It is **not part of V1**.

---

## 3. Activity invariants (non-negotiable)

Every learning activity in huhuGERMAN V1 must:

1. Target **exactly one learning goal**
2. Be solvable with:

   * Reading
   * Typing
   * Listening (optional)
3. Have:

   * Clear instructions
   * Deterministic expected answers
4. Provide:

   * Immediate feedback
   * No ambiguity about correctness
5. Work **offline-first**
6. Be completable in **under 5 minutes**

If an activity violates any of these rules, it does not belong in V1.

---

## 4. User interaction flow (V1)

When the user visits `https://huhugerman.com`, they encounter **three main sections**:

### 1) Lernen

* Core learning section
* Progressive A1 content delivered through:

  * Short texts
  * Complementary exercises
* Feedback is immediate and rule-based
* Activities are designed to be:

  * Used independently
  * Or as reinforcement for a live class

Pronunciation practice here is **guided externally** (teacher or self-imitation), not evaluated by the app.

---

### 2) Phonetik

* Dedicated pronunciation exposure space
* Focus on sounds that Spanish speakers typically struggle with
* Interaction model:

  * Tap a word
  * Hear the pronunciation via TTS
* No tracking
* No scoring
* No correctness validation

This section exists to **reduce anxiety**, not to test performance.

---

### 3) Was ist *huhu*?

* Context and identity section
* Explains:

  * The philosophy behind huhuGERMAN
  * Intercultural aspects of the German language
* Includes:

  * Links to authentic German resources (e.g. Deutsche Welle, newspapers, creators)
* Functions as a **blog-style, read-only section**
* No interaction or progress tracking in V1

---

## 5. MVP boundary statement

huhuGERMAN V1 prioritizes:

* Simplicity
* Reliability
* Completion

Any feature that:

* Increases cognitive load
* Requires complex UI
* Introduces non-deterministic feedback

is deferred to **post-MVP versions**.

---