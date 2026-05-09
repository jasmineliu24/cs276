"use client";

import { ModuleCard } from "@/components/ModuleCard";
import { ModuleProgressBanner } from "@/components/ModuleProgressBanner";
import { ProgressBar } from "@/components/ProgressBar";
import { modules } from "@/lib/modules";
import { useProgress } from "@/components/ProgressProvider";

export default function CurriculumPage() {
  const { completedCount } = useProgress();

  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <p className="section-mark">§ Curriculum</p>
        <h1 className="serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
          Six modules. Zero prerequisites.
        </h1>
        <p className="text-lg text-ink/80 max-w-2xl leading-relaxed">
          Each module ends in something you've made. Save your progress on this device, pause anytime, and pick up where
          you left off.
        </p>
      </header>

      <section className="border-y border-rule py-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {modules.map((module, index) => (
            <div key={module.id} className="flex items-center shrink-0">
              <div className="h-10 w-10 border border-rule bg-white grid place-items-center mono text-sm text-ink">
                {module.id}
              </div>
              {index < modules.length - 1 ? <div className="w-12 border-t border-rule mx-2" /> : null}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-baseline justify-between">
          <p className="mono text-xs uppercase tracking-widest text-warm-gray">Overall progress</p>
          <p className="mono text-xs uppercase tracking-widest text-warm-gray">{completedCount} / 6</p>
        </div>
        <ProgressBar value={(completedCount / 6) * 100} className="mt-2" />
      </section>

      <ModuleProgressBanner />

      <section className="grid gap-px bg-rule border border-rule md:grid-cols-2">
        {modules.map((module, index) => (
          <ModuleCard key={module.id} module={module} locked={index > completedCount + 1} />
        ))}
      </section>
    </div>
  );
}
