import type { Metadata } from "next";
import { CareerSelector } from "@/components/CareerSelector";
import { PeerStoryGallery } from "@/components/PeerStoryGallery";

export const metadata: Metadata = {
  title: "Peer stories · AIPath",
  description: "Illustrative peer stories from AIPath — what students built and how long it took, by career area."
};

export default function StoriesPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <p className="section-mark">§ Peer stories</p>
        <h1 className="serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
          What students like you built.
        </h1>
        <p className="text-lg text-ink/80 max-w-2xl leading-relaxed">
          Concentration, career goal, project, duration. Filter by your career area to see stories closer to your situation —
          and to make the projects on the gallery page feel less abstract.
        </p>
        <p className="serif italic text-sm text-warm-gray max-w-2xl">
          All stories are illustrative composites grounded in our formative interviews. They're not testimonials from
          identifiable students.
        </p>
      </header>

      <CareerSelector variant="pills" />

      <PeerStoryGallery />
    </div>
  );
}
