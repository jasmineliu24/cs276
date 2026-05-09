"use client";

import { Suspense, useState } from "react";
import { useSelectedDomain } from "@/components/CareerSelector";
import { projects } from "@/lib/projects";
import { getCareerDomain } from "@/lib/careers";
import { Project, ProjectComplexity } from "@/types";

type ComplexityFilter = ProjectComplexity | "all";

type Props = {
  hideComplexityFilter?: boolean;
  limit?: number;
  showAll?: boolean;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const domain = getCareerDomain(project.domainId);
  return (
    <article className="bg-white border border-rule p-6 md:p-7 flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-4">
        <span className="mono text-warm-gray text-xs uppercase tracking-widest">
          {String(index + 1).padStart(2, "0")} · {domain?.shortLabel ?? "—"}
        </span>
        <span className="mono text-terracotta text-xs uppercase tracking-widest">
          {project.complexity === "no-code" ? "No code" : "Min code"}
        </span>
      </div>

      <h3 className="serif-roman text-2xl md:text-[1.6rem] leading-tight">{project.title}</h3>

      <p className="text-ink/80 text-sm leading-relaxed">{project.summary}</p>

      <p className="text-xs text-warm-gray italic">{project.builderNote}</p>

      <hr className="border-t border-rule" />

      <ul className="flex flex-wrap gap-2 -ml-1">
        {project.tools.map((tool) => (
          <li
            key={tool}
            className="mono text-xs text-ink border border-rule px-2 py-0.5 uppercase tracking-widest"
          >
            {tool}
          </li>
        ))}
      </ul>

      <p className="mt-auto text-xs text-warm-gray italic">Illustrative</p>
    </article>
  );
}

function ProjectGalleryInner({ hideComplexityFilter, limit, showAll }: Props) {
  const selected = useSelectedDomain();
  const [complexity, setComplexity] = useState<ComplexityFilter>("all");

  let filtered = projects;
  if (!showAll && selected) filtered = filtered.filter((p) => p.domainId === selected);
  if (complexity !== "all") filtered = filtered.filter((p) => p.complexity === complexity);

  const visible = typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  const domain = selected ? getCareerDomain(selected) : null;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="mono text-xs uppercase tracking-widest text-warm-gray">
          {selected && !showAll ? <>Filter · {domain?.label}</> : <>All career areas</>}
        </p>
        {hideComplexityFilter ? null : (
          <fieldset className="flex flex-wrap items-baseline gap-x-5 gap-y-2" aria-label="Filter by code level">
            <legend className="sr-only">Filter by code level</legend>
            {[
              { value: "all", label: "All levels" },
              { value: "no-code", label: "No code" },
              { value: "minimal-code", label: "Min code" }
            ].map((opt) => {
              const active = complexity === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setComplexity(opt.value as ComplexityFilter)}
                  aria-pressed={active}
                  className={
                    active
                      ? "text-ink border-b-2 border-terracotta pb-0.5 text-sm"
                      : "text-warm-gray hover:text-ink text-sm"
                  }
                >
                  {opt.label}
                </button>
              );
            })}
          </fieldset>
        )}
      </div>

      {visible.length === 0 ? (
        <p className="text-warm-gray italic">No projects match the current filters.</p>
      ) : (
        <div className="grid gap-px bg-rule border border-rule md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectGallery(props: Props) {
  return (
    <Suspense fallback={null}>
      <ProjectGalleryInner {...props} />
    </Suspense>
  );
}
