PART 3: System Decomposition (Refined)
1. Authentication Module
Responsibility: Manage user identity and session persistence via Firebase.

Inputs: Google Sign-In credentials.

Outputs: UserObject (UID, Email) or null.

Offline Strategy: Firebase Auth automatically persists session tokens in LocalStorage.

2. Data Service (The "Content Loader")
Responsibility: Unified interface for fetching Lessons and User Progress. Wraps Firebase Firestore.

Inputs: Collection paths, Document IDs.

Outputs: Typed Data Objects (Lessons, UserProfile).

Key Behavior: Uses enableIndexedDbPersistence().

If Online: Fetches from server, updates cache.

If Offline: Fetches immediately from local IndexDB cache.

Explicitly NOT responsible for: Custom caching logic (we rely on Firebase SDK).

3. Progress Manager
Responsibility: Business logic for "What lesson is next?"

Inputs: User Progress Object, Full Lesson List.

Outputs: currentLessonId, isLessonLocked(id).

Stored Data: Firestore User Document (completedLessons: string[]).

4. Navigation Controller
Responsibility: Routing and Guarding.

Inputs: URL Routes, Progress Manager state.

Outputs: Rendered Route or Redirect.

Logic: Prevents users from accessing /lesson/5 if they haven't completed /lesson/4.

5. Lesson Renderer
Responsibility: Transform JSON lesson data into the visual "H-U-H-U" UI.

Inputs: Lesson Data Object.

Outputs: React Components (The visual slides).

State: Manages the internal "Step 1 -> Step 2 -> Step 3" state of the current lesson.

6. Exercise Evaluator
Responsibility: Deterministic validation of user input.

Inputs: User Answer, Correct Answer (from DB), Exercise Type.

Outputs: Boolean (Correct/Incorrect) + Feedback String.

Constraint: Pure function. No side effects.

7. TTS Service
Responsibility: Wrapper around window.speechSynthesis.

Inputs: Text, Lang (de-DE).

Outputs: Audio.

Fallback: If de-DE is missing, try generic German or fail gracefully (visual indicator only).

8. Taro Display Controller
Responsibility: Simple logic to show/hide the mascot.

Inputs: Current Route, Lesson Completion Event.

Outputs: Image Component (Taro Neutral / Taro Happy).