# What I Learned From Designing the huhuGERMAN MVP (09.Januar.2026)

## 1. I am stronger at **system design than isolated problem solving**

**Observation**

* I can reason clearly when I work with:

  * Real users
  * Real constraints
  * Real artifacts (schemas, contracts, flows)
* I struggle when problems are:

  * Decontextualized
  * Artificial
  * Detached from a user or product

**Implication for my path**

* I should not judge my ability as an engineer based solely on DSA drills.
* My strength is **applied engineering**, not puzzle-solving.
* DSA must be embedded inside systems, not treated as an end in itself.

**What to pay attention to**

* Always ask: *“Where does this abstraction live in a real product?”*
* If I can’t answer that, the task will likely drain me.

---

## 2. Scope definition is a first-class engineering skill

**Observation**

* Writing the MVP contract reduced anxiety more than writing code.
* Explicitly saying “NO” to features created clarity and momentum.
* Many of my past projects failed because scope was implicit.

**What I learned**

* Good engineers:

  * Decide what **not** to build
  * Lock decisions early
  * Reduce options intentionally

**What to pay attention to**

* Before building anything:

  * Write what the system does **not** support
* Treat scope as a technical constraint, not a preference.

This is **Amazon-level ownership**.

---

## 3. Domain models vs UI state must be separated early

**Observation**

* I initially mixed:

  * Learning content
  * UI behavior
  * Layout concerns
* Separating them made everything simpler.

**What I learned**

* Domain models:

  * Are stable
  * Persisted
  * Explainable without a UI
* UI state:

  * Is ephemeral
  * Component-driven
  * Replaceable

**What to pay attention to**

* If a piece of state:

  * Would not be saved in a database
  * Has no meaning outside the screen
    → it is **UI state**, not domain logic.

This prevents future rewrites and cognitive overload.

---

## 4. “Good enough” design is not sloppy — it is professional

**Observation**

* I repeatedly wanted to:

  * Add more exercise types
  * Add speaking features
  * Add intelligence to feedback
* Each time, stopping felt uncomfortable but stabilizing.

**What I learned**

* Professional software is built in **layers**, not leaps.
* MVP design is about **closing decisions**, not exploring all possibilities.

**What to pay attention to**

* If a feature:

  * Requires more explanation than implementation
  * Solves a hypothetical future problem
    → it does not belong in the MVP.

Resisting over-design is a senior skill.

---

## 5. Determinism reduces anxiety (for users and for me)

**Observation**

* Deterministic feedback (accepted answers, rule-based checks) felt safer.
* Non-deterministic ideas (AI, speech recognition) increased stress.

**What I learned**

* Deterministic systems:

  * Are easier to reason about
  * Are easier to debug
  * Are easier to explain in interviews

**What to pay attention to**

* Prefer:

  * Simple rules
  * Explicit answers
  * Predictable flows

Amazon strongly favors **predictability over cleverness**.

---

## 6. Product thinking and pedagogy are transferable engineering assets

**Observation**

* My background in teaching helped me:

  * Define user goals
  * Limit cognitive load
  * Design for confidence, not performance

**What I learned**

* Teaching ≈ API design
* Lessons ≈ user flows
* Exercises ≈ interfaces with constraints

This is not “non-technical” experience.
It is **user-centered system design**.

**What to pay attention to**

* Frame my background as:

  * “Designing systems that help users succeed under uncertainty”

That maps directly to real-world engineering.

---

## 7. Momentum comes from visible, usable artifacts

**Observation**

* Confidence increased when I produced:

  * Schemas
  * Contracts
  * Clear documents
* Confidence decreased when progress was invisible.

**What I learned**

* My motivation is tied to **finished units**, not effort.
* I need tangible outputs to stay regulated.

**What to pay attention to**

* End every session with:

  * A file
  * A decision
  * A written artifact

This is not emotional — it is operational.

---

## 8. This activity confirmed my correct long-term strategy

**Key realization**

* huhuGERMAN is not a distraction from my engineering path.
* It is:

  * A discipline anchor
  * A proof of execution
  * A system I can maintain over time

**Implication**

* I should:

  * Build fewer projects
  * Finish them
  * Maintain them
* Not chase breadth under pressure.

---

## Final synthesis (read this once)

What I learned is not “how to design an MVP.”

What I learned is:

> I am an engineer who performs best when solving **real problems under real constraints**, and my job is to design my learning path accordingly — not to force myself into formats that trigger avoidance.

That is maturity.
That is ownership.
That is how long-term careers are built.
