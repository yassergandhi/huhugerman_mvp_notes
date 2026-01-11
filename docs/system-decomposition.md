# System Decomposition: huhuGERMAN MVP (v1)

## 1. Authentication Module
**Responsibility:** Manage user identity and session persistence via Firebase

**Inputs:** 
- Google Sign-In credentials (via Firebase Auth provider)

**Outputs:** 
- UserObject (UID, Email, Name) or null
- Authentication state (authenticated/unauthenticated)

**Stored data:** No (handled by Firebase client SDK)

**Offline required:** Yes (must allow app access if session was previously active)

**Explicitly NOT responsible for:** 
- User profile editing
- Avatar uploads
- Role-based access control beyond "Logged In"

---

## 2. Progress Manager
**Responsibility:** Track user advancement and determine lesson availability

**Inputs:**
- User ID
- Current date
- Lesson completion events

**Outputs:**
- Current lesson ID (suggested for today)
- List of accessible lesson IDs (completed + current)
- Overall progress metrics (e.g., "4 of 30 completed")

**Stored data:** Yes (Firestore: lastCompletedLessonId, completedLessons array, lastAccessDate)

**Offline required:** Yes (local state must persist between sessions)

**Explicitly NOT responsible for:**
- Rendering lesson content
- Enforcing daily limits
- Streak tracking

---

## 3. Navigation Controller
**Responsibility:** Orchestrate lesson access based on progress state

**Inputs:**
- Progress state from Progress Manager
- User navigation requests (forward/backward)

**Outputs:**
- Current active lesson ID
- Navigation availability flags (canGoBack, canGoForward)
- Lesson list with access status

**Stored data:** No (stateless orchestrator)

**Offline required:** Yes

**Explicitly NOT responsible for:**
- Modifying progress state
- Rendering UI components
- Content loading

---

## 4. Lesson Renderer
**Responsibility:** Transform lesson data into HUHU visual structure

**Inputs:**
- Lesson data object (from cache/Firestore)
- Render instructions from Navigation Controller

**Outputs:**
- Rendered HUHU sections (Hochdeutsch, Umgangssprache, Halt!, Übung)
- Interactive exercise components
- TTS trigger buttons

**Stored data:** No (stateless rendering)

**Offline required:** Yes (render from cached data)

**Explicitly NOT responsible for:**
- Determining lesson availability
- Validating exercise answers
- Managing navigation state

---

## 5. Exercise Evaluator
**Responsibility:** Perform deterministic validation of user input

**Inputs:**
- User answer (string/selection ID)
- Correct answer from lesson data
- Exercise type identifier

**Outputs:**
- Validation result (correct/incorrect)
- Feedback message (deterministic, pre-written)

**Stored data:** No (pure logic function)

**Offline required:** Yes

**Explicitly NOT responsible for:**
- Updating progress state
- Generating dynamic feedback
- Storing results

---

## 6. Offline Persistence Layer
**Responsibility:** Manage local cache and sync queue

**Inputs:**
- Firestore snapshots
- Outgoing progress updates
- Lesson content documents

**Outputs:**
- Cached data for offline access
- Sync status indicators

**Stored data:** Yes (IndexedDB via Firestore Persistence + Workbox)

**Offline required:** Core responsibility

**Explicitly NOT responsible for:**
- Conflict resolution (uses "last-write-wins")
- Data transformation
- Business logic

---

## 7. TTS Service
**Responsibility:** Interface with Web Speech API for audio playback

**Inputs:**
- Text string
- Language code (de-DE)
- Voice settings (rate, pitch)

**Outputs:**
- Audible speech via device speakers

**Stored data:** No

**Offline required:** Yes (uses OS-level voices)

**Explicitly NOT responsible for:**
- Recording user voice
- Speech recognition
- Audio file management

---

## 8. Taro Display Controller
**Responsibility:** Manage Taro's symbolic appearances

**Inputs:**
- Current screen/route
- Lesson completion events
- Progress milestones

**Outputs:**
- Taro visibility flag
- Taro state (neutral/celebrating)

**Stored data:** No (derived from progress state)

**Offline required:** Yes

**Explicitly NOT responsible for:**
- Animations
- Dialog/interactions
- Gamification mechanics

---

## 9. Content Loader
**Responsibility:** Fetch and prepare lesson content for consumption

**Inputs:**
- Lesson IDs
- Cache status

**Outputs:**
- Lesson data objects
- Loading states

**Stored data:** Yes (via Offline Persistence Layer)

**Offline required:** Yes (must serve from cache when offline)

**Explicitly NOT responsible for:**
- Determining which lessons to load
- Rendering content
- Progress tracking

---

## System Integration Notes

### Data Flow for Daily Ritual:
1. **Authentication** → validates user
2. **Progress Manager** → determines current lesson
3. **Navigation Controller** → sets up available navigation
4. **Content Loader** → fetches lesson data
5. **Lesson Renderer** → displays HUHU structure
6. **Exercise Evaluator** → validates answers
7. **Progress Manager** → updates completion state
8. **Offline Persistence** → syncs when online

### Key Design Principles:
- Each module has a single, clear responsibility
- Modules communicate through well-defined interfaces
- State is minimized and localized
- Offline capability is built into each layer
- No module depends on network availability for core functions
