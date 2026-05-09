"use client";

import { Suspense } from "react";
import { useSelectedDomain } from "@/components/CareerSelector";
import { peerStories } from "@/lib/peer-stories";
import { getCareerDomain } from "@/lib/careers";
import { PeerStory } from "@/types";

type Props = {
  showAll?: boolean;
  limit?: number;
};

function StoryCard({ story, index }: { story: PeerStory; index: number }) {
  const domain = getCareerDomain(story.domainId);
  return (
    <article className="bg-white border border-rule p-6 md:p-7 flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-4">
        <span className="mono text-warm-gray text-xs uppercase tracking-widest">
          {String(index + 1).padStart(2, "0")} · {domain?.shortLabel ?? "—"}
        </span>
        <span className="mono text-terracotta text-xs uppercase tracking-widest">
          {story.complexity === "no-code" ? "No code" : "Min code"}
        </span>
      </div>

      <h3 className="serif-roman text-2xl md:text-[1.6rem] leading-tight">{story.projectTitle}</h3>

      <p className="text-ink/80 text-sm leading-relaxed">{story.projectSummary}</p>

      <hr className="border-t border-rule" />

      <div className="text-sm">
        <p className="text-ink">
          <span className="serif italic">{story.name}</span> · {story.concentration}
        </p>
        <p className="text-warm-gray mt-1">Goal: {story.careerGoal}</p>
      </div>

      <div className="mt-auto flex items-baseline justify-between text-xs text-warm-gray">
        <span className="mono uppercase tracking-widest">{story.durationWeeks} weeks</span>
        <span className="italic">Illustrative</span>
      </div>
    </article>
  );
}

function PeerStoryGalleryInner({ showAll, limit }: Props) {
  const selected = useSelectedDomain();
  const filtered = showAll || !selected ? peerStories : peerStories.filter((s) => s.domainId === selected);
  const visible = typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  const domain = selected ? getCareerDomain(selected) : null;

  if (visible.length === 0) {
    return <p className="text-warm-gray italic">No stories tagged for this area yet. Clear the filter to see all stories.</p>;
  }

  return (
    <div className="space-y-6">
      {selected && !showAll ? (
        <p className="mono text-xs uppercase tracking-widest text-warm-gray">
          Filter · {domain?.label}
        </p>
      ) : null}
      <div className="grid gap-px bg-rule border border-rule md:grid-cols-2 lg:grid-cols-3">
        {visible.map((story, i) => (
          <StoryCard key={story.id} story={story} index={i} />
        ))}
      </div>
    </div>
  );
}

export function PeerStoryGallery(props: Props) {
  return (
    <Suspense fallback={null}>
      <PeerStoryGalleryInner {...props} />
    </Suspense>
  );
}
