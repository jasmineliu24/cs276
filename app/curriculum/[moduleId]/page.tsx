"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ActivityChecklist } from "@/components/ActivityChecklist";
import { ModuleLesson } from "@/components/ModuleLesson";
import { ModuleProgressBanner } from "@/components/ModuleProgressBanner";
import { PeerBoard } from "@/components/PeerBoard";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/components/ProgressProvider";
import { getModuleById, modules } from "@/lib/modules";

export default function ModuleDetailPage() {
  const params = useParams<{ moduleId: string }>();
  const currentModule = getModuleById(params.moduleId);
  const { progress, markModuleComplete } = useProgress();

  if (!currentModule) return notFound();

  const checked = progress.completedActivities[currentModule.id]?.length ?? 0;
  const completionPercent = (checked / currentModule.activities.length) * 100;

  return (
    <div className="space-y-6">
      <ModuleProgressBanner />
      <ProgressBar value={completionPercent} />

      <div className="grid lg:grid-cols-[220px,1fr,280px] gap-6 items-start">
        <aside className="editorial-card p-4 sticky top-24">
          <h3 className="text-lg mb-3">Modules</h3>
          <ul className="space-y-2 text-sm">
            {modules.map((item) => (
              <li key={item.id}>
                <Link href={`/curriculum/${item.id}`} className={item.id === currentModule.id ? "font-bold text-[#0F1F3D]" : "text-slate-600"}>
                  {item.id}. {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <article className="editorial-card p-6 md:p-8 space-y-8">
          <header>
            <p className="text-sm uppercase tracking-wide text-slate-500">Module {currentModule.id}</p>
            <h1 className="text-4xl mt-1">{currentModule.title}</h1>
            <p className="mt-3 text-slate-700">{currentModule.overview}</p>
          </header>

          <section>
            <h2 className="text-2xl mb-2">Learning Goals</h2>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              {currentModule.learningGoals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-2">Lesson Content</h2>
            <ModuleLesson markdown={currentModule.lessonMarkdown} />
          </section>

          <section>
            <h2 className="text-2xl mb-2">Activity</h2>
            <div className="space-y-3">
              {currentModule.activities.map((activity) => (
                <div
                  key={activity.id}
                  id={`activity-${activity.id}`}
                  className="scroll-mt-28 border border-slate-200 bg-white rounded-xl p-4"
                >
                  <p className="font-semibold">{activity.title}</p>
                  <p className="text-slate-600 text-sm">{activity.description}</p>
                </div>
              ))}
            </div>
            {currentModule.id === "5" ? <div className="mt-4"><PeerBoard /></div> : null}
          </section>

          <section className="editorial-card p-5 bg-amber-50 border-amber-200">
            <h2 className="text-2xl mb-2">Reflection Prompt</h2>
            <p>{currentModule.reflectionPrompt}</p>
          </section>

          <section>
            <h2 className="text-2xl mb-2">What&apos;s Next</h2>
            <p className="text-slate-700">{currentModule.whatsNext}</p>
          </section>

          <button onClick={() => markModuleComplete(currentModule.id)} className="rounded-full bg-[#F5A623] text-[#0F1F3D] px-5 py-3 font-semibold">
            Mark as Complete
          </button>
        </article>

        <aside className="hidden lg:block sticky top-24">
          <ActivityChecklist module={currentModule} />
        </aside>
      </div>
    </div>
  );
}
