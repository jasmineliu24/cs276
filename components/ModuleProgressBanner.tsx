"use client";

import { useProgress } from "@/components/ProgressProvider";
import { ProgressBar } from "@/components/ProgressBar";

export function ModuleProgressBanner() {
  const { completedCount } = useProgress();
  const percent = (completedCount / 6) * 100;

  return (
    <div className="editorial-card p-4 md:p-5">
      <p className="font-semibold text-[#0F1F3D]">{completedCount} of 6 modules complete</p>
      <ProgressBar value={percent} className="mt-3" />
    </div>
  );
}
