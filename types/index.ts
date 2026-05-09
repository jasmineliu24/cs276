export type ModuleId = "1" | "2" | "3" | "4" | "5" | "6";

export type Activity = {
  id: string;
  title: string;
  description: string;
};

export type Module = {
  id: ModuleId;
  title: string;
  time: string;
  description: string;
  keyConcepts: string[];
  activities: Activity[];
  learningGoals: string[];
  overview: string;
  lessonMarkdown: string;
  reflectionPrompt: string;
  whatsNext: string;
  note?: string;
};

export type ProgressState = {
  completedModules: ModuleId[];
  completedActivities: Record<ModuleId, string[]>;
};

export type BoardPostComment = {
  id: string;
  text: string;
  createdAt: string;
};

export type BoardPost = {
  id: string;
  description: string;
  createdAt: string;
  comments: BoardPostComment[];
};

export type CareerDomainId =
  | "medicine"
  | "law"
  | "education"
  | "social-science"
  | "business";

export type CareerDomain = {
  id: CareerDomainId;
  label: string;
  shortLabel: string;
  blurb: string;
  exampleRoles: string[];
};

export type ProjectComplexity = "no-code" | "minimal-code";

export type PeerStory = {
  id: string;
  name: string;
  concentration: string;
  careerGoal: string;
  domainId: CareerDomainId;
  projectTitle: string;
  projectSummary: string;
  durationWeeks: number;
  complexity: ProjectComplexity;
  illustrative: true;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  domainId: CareerDomainId;
  complexity: ProjectComplexity;
  tools: string[];
  builderNote: string;
  illustrative: true;
};
