"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { modules } from "@/lib/modules";
import { getStoredProgress, initialProgress, setStoredProgress } from "@/lib/progress";
import { ModuleId, ProgressState } from "@/types";

type ProgressContextType = {
  progress: ProgressState;
  markActivity: (moduleId: ModuleId, activityId: string, checked: boolean) => void;
  markModuleComplete: (moduleId: ModuleId) => void;
  completedCount: number;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(initialProgress);

  useEffect(() => {
    setProgress(getStoredProgress());
  }, []);

  useEffect(() => {
    setStoredProgress(progress);
  }, [progress]);

  const markActivity = (moduleId: ModuleId, activityId: string, checked: boolean) => {
    setProgress((prev) => {
      const current = prev.completedActivities[moduleId] ?? [];
      const next = checked ? Array.from(new Set([...current, activityId])) : current.filter((id) => id !== activityId);
      return {
        ...prev,
        completedActivities: {
          ...prev.completedActivities,
          [moduleId]: next
        }
      };
    });
  };

  const markModuleComplete = (moduleId: ModuleId) => {
    setProgress((prev) => {
      if (prev.completedModules.includes(moduleId)) return prev;
      const allActivityIds = modules.find((m) => m.id === moduleId)?.activities.map((a) => a.id) ?? [];
      return {
        ...prev,
        completedModules: [...prev.completedModules, moduleId],
        completedActivities: {
          ...prev.completedActivities,
          [moduleId]: allActivityIds
        }
      };
    });
  };

  const value = useMemo(
    () => ({ progress, markActivity, markModuleComplete, completedCount: progress.completedModules.length }),
    [progress]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return context;
}
