"use client";

import { useProgress } from "@/components/ProgressProvider";
import { Module } from "@/types";

export function ActivityChecklist({ module }: { module: Module }) {
  const { progress, markActivity } = useProgress();
  const completed = progress.completedActivities[module.id] ?? [];

  return (
    <div className="editorial-card p-4">
      <h3 className="text-xl mb-4">Your progress</h3>
      <ul className="space-y-3">
        {module.activities.map((activity) => {
          const checked = completed.includes(activity.id);
          return (
            <li key={activity.id} className="flex gap-3 items-start">
              <input
                type="checkbox"
                checked={checked}
                onChange={(event) => markActivity(module.id, activity.id, event.target.checked)}
                className="mt-1 h-4 w-4 accent-[#F5A623]"
              />
              <div>
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-slate-600">{activity.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
