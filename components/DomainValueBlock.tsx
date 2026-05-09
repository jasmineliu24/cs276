"use client";

import { Suspense } from "react";
import { useSelectedDomain } from "@/components/CareerSelector";
import { getCareerDomain } from "@/lib/careers";

function DomainValueBlockInner() {
  const selected = useSelectedDomain();
  const domain = getCareerDomain(selected);

  if (!domain) {
    return (
      <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-baseline">
        <div>
          <p className="serif text-2xl md:text-3xl leading-snug max-w-2xl text-ink/80">
            Pick a career area in the headline above. The rest of the page will tilt toward what AI fluency looks like there.
          </p>
        </div>
        <p className="mono text-warm-gray text-xs uppercase tracking-widest md:text-right">
          Awaiting selection
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-16">
      <div>
        <p className="mono text-warm-gray text-xs uppercase tracking-widest">For a career in</p>
        <h3 className="serif text-4xl md:text-5xl mt-3 leading-[1.05]">{domain.label}</h3>
      </div>
      <div className="md:pt-2">
        <p className="text-lg leading-relaxed text-ink/85">{domain.blurb}</p>
        <p className="mt-6 mono text-sm text-warm-gray uppercase tracking-widest">
          Common starting points
        </p>
        <p className="mt-2 text-ink/80">{domain.exampleRoles.join(" · ")}</p>
      </div>
    </div>
  );
}

export function DomainValueBlock() {
  return (
    <Suspense fallback={null}>
      <DomainValueBlockInner />
    </Suspense>
  );
}
