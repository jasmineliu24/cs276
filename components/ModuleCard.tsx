import Link from "next/link";
import { Module } from "@/types";

export function ModuleCard({ module, locked = false }: { module: Module; locked?: boolean }) {
  return (
    <article className="bg-paper p-7 md:p-8 flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-3">
        <p className="mono text-xs uppercase tracking-widest text-warm-gray">
          Module {String(module.id).padStart(2, "0")}
        </p>
        <span className="mono text-xs uppercase tracking-widest text-warm-gray">{module.time}</span>
      </div>

      <h3 className="serif-roman text-3xl leading-tight">{module.title}</h3>

      <p className="text-ink/80">{module.description}</p>

      <div className="flex flex-wrap gap-2">
        {module.keyConcepts.map((concept) => (
          <span
            key={concept}
            className="mono text-xs uppercase tracking-widest text-ink border border-rule px-2 py-0.5"
          >
            {concept}
          </span>
        ))}
      </div>

      {module.note ? <p className="serif italic text-warm-gray text-sm">{module.note}</p> : null}

      <Link
        href={locked ? "#" : `/curriculum/${module.id}`}
        aria-disabled={locked}
        className={
          "mt-auto inline-flex w-fit items-baseline gap-2 mono text-xs uppercase tracking-widest pt-3 " +
          (locked
            ? "text-warm-gray cursor-not-allowed"
            : "text-terracotta hover:text-ink")
        }
      >
        {locked ? "Locked" : "Open module"} <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
