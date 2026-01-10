interface UserProfile {
  fullName: string;
  email: string;
}

interface Activity {
  id: string;
  title: string;
  goal: string;
  level: "A1";
  instructions: string;
  text: string;     
  expectedAnswers: ExpectedAnswer;
  hints?: string[];
  example?: Example;
}

interface Example{
  id: string; //Because it can be reusable
  text: string;
  explanation: string;
}

interface ExpectedAnswer {
  fieldId: string;
  accepted: string[]; // Should I accept just multipple choice, fill in the blank, input user´s
}

interface UserAnswer {
  activityId: string;
  fieldId: string;
  content: string;
  feedback?: string;
  savingStatus: "idle" | "saving" | "saved" | "error";
}

interface UIState {
  expandedSections: Record<string, boolean>;
  showHints: Record<string, boolean>;
  showSolution: Record<string, boolean>;
}

interface ProgressState {
  completedActivities: Record<string, boolean>;
  progressPercent: number;
}