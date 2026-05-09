import { BoardPost, ModuleId, ProgressState } from "@/types";

const PROGRESS_KEY = "aipath-progress";
const BOARD_KEY = "aipath-peer-board";

export const initialProgress: ProgressState = {
  completedModules: [],
  completedActivities: {
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": []
  }
};

export function getStoredProgress(): ProgressState {
  if (typeof window === "undefined") return initialProgress;
  const raw = window.localStorage.getItem(PROGRESS_KEY);
  if (!raw) return initialProgress;

  try {
    return { ...initialProgress, ...JSON.parse(raw) };
  } catch {
    return initialProgress;
  }
}

export function setStoredProgress(progress: ProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function getStoredBoardPosts(): BoardPost[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(BOARD_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as BoardPost[];
  } catch {
    return [];
  }
}

export function setStoredBoardPosts(posts: BoardPost[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(BOARD_KEY, JSON.stringify(posts));
}

export function isModuleComplete(progress: ProgressState, moduleId: ModuleId) {
  return progress.completedModules.includes(moduleId);
}
