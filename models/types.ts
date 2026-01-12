// ==========================================
// 1. USER & PROGRESS (FIREBASE MODEL)
// ==========================================

export interface UserProfile {
  uid: string; // From Firebase Auth
  email: string;
  displayName?: string;
  photoURL?: string; // For Taro or Avatar
  
  // Progress Tracking
  completedLessonIds: string[]; // IDs of finished lessons
  lastAccessDate: string; // ISO Date string
  currentLessonId: string; // The specific lesson they are on
}

// ==========================================
// 2. THE HUHU LESSON STRUCTURE (STATIC DATA)
// ==========================================

// The Parent Container
export interface Lesson {
  id: string; // e.g., "lesson-01-greeting"
  title: string; // e.g., "Saying Hello"
  order: number; // 1, 2, 3... for sorting
  
  // The 4 Pillars of the Method
  hochdeutsch: HochdeutschSection;
  umgangssprache: UmgangsspracheSection;
  halt: HaltSection;
  uebung: ExerciseSection;
}

export interface HochdeutschSection {
  type: 'hochdeutsch';
  phrases: Array<{
    german: string;
    spanish: string;
    audioId: string; // For TTS lookup
  }>;
}

export interface UmgangsspracheSection {
  type: 'umgangssprache';
  introText: string; // e.g. "But in Berlin, they say..."
  phrases: Array<{
    german: string;
    spanish: string;
    contextNote?: string; // e.g. "Only use with friends"
  }>;
}

export interface HaltSection {
  type: 'halt';
  title: string; // e.g. "Wait! Why is the verb there?"
  explanation: string; // Simple markdown allowed
  metaphor?: string; // e.g. "Think of the verb like the King of the sentence"
}

// ==========================================
// 3. EXERCISES (DISCRIMINATED UNIONS)
// ==========================================

export type ExerciseSection = MultipleChoiceExercise | FillInBlankExercise;

interface BaseExercise {
  id: string;
  instruction: string; // "Select the correct option"
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple-choice';
  question: string;
  options: string[]; // ["Hallo", "Tschüss", "Danke"]
  correctOptionIndex: number;
  feedback: string; // "Correct! Hallo is formal."
}

export interface FillInBlankExercise extends BaseExercise {
  type: 'fill-in-blank';
  sentenceBefore: string; // "Ich "
  sentenceAfter: string;  // " aus Mexiko."
  correctAnswer: string[]; // ["komme"] (Array allows for simple variations if needed)
  feedback: string;
}

// ==========================================
// 4. RUNTIME STATE (APP STATE)
// ==========================================

// What the user is doing right now
export interface LessonState {
  currentStep: 0 | 1 | 2 | 3; // 0=H, 1=U, 2=H, 3=Exercise
  isComplete: boolean;
}

// The answer they just typed/clicked
export interface UserInput {
  exerciseId: string;
  value: string | number; // String for input, number for index of Multiple Choice
  isCorrect: boolean | null; // null = not checked yet
}