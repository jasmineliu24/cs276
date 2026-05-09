import type { Metadata } from "next";
import { CareerSelector } from "@/components/CareerSelector";
import { ProjectGallery } from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Project gallery · AIPath",
  description: "Illustrative AIPath projects, filterable by career area and code level."
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <p className="section-mark">§ Projects</p>
        <h1 className="serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
          Concrete things students could build.
        </h1>
        <p className="text-lg text-ink/80 max-w-2xl leading-relaxed">
          A range of projects across career areas and across code levels — from no-code workflows you can finish in a sitting,
          to short scripts for the more curious. Filter by your career area and how much code you want to write.
        </p>
        <p className="serif italic text-sm text-warm-gray max-w-2xl">
          All examples are illustrative — drawn from interview themes — not testimonials of named students.
        </p>
      </header>

      <CareerSelector variant="pills" />

      <ProjectGallery />
    </div>
  );
}
