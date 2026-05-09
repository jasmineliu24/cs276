import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CareerSelector } from "@/components/CareerSelector";
import { DomainValueBlock } from "@/components/DomainValueBlock";
import { DomainAwareLink } from "@/components/DomainAwareLink";
import { GroundedPanel } from "@/components/GroundedPanel";

const milestones = [
  ["01", "A shared vocabulary", "Plain-language definitions for the terms you'll keep hearing — model, LLM, prompting."],
  ["02", "Your project idea", "Connect AI to a question that already matters to you, in your own field."],
  ["03", "Scope the literature", "Use AI to map what's been done, then verify the parts you're going to lean on."],
  ["04", "Build a first version", "Pick a no-code or minimal-code track and produce something working."],
  ["05", "Take peer critique", "Share what you built, take specific feedback, revise once."],
  ["06", "Tell the story", "Write up what you built and why, in language you can use in interviews."]
] as const;

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Section 00 — Hero */}
      <AnimatedSection>
        <section className="pt-6 md:pt-12">
          <div className="flex items-baseline justify-between gap-4 mb-10">
            <p className="section-mark">§ 00 · Opening</p>
            <p className="section-mark hidden sm:block">For first-gen, low-income undergrads</p>
          </div>

          <h1 className="serif text-[2.6rem] sm:text-6xl md:text-7xl leading-[1.02] tracking-tight max-w-5xl">
            AI fluency for someone going into{" "}
            <CareerSelector variant="blank" placeholder="your field" />.
          </h1>

          <p className="mt-10 max-w-2xl text-lg text-ink/80 leading-relaxed">
            A program for first-generation and low-income undergraduates exploring how AI fits into a career like the one
            you're building — without assuming you came in with a coding background.
          </p>

          <div className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-3 mono text-sm uppercase tracking-widest text-warm-gray">
            <span><span className="text-ink font-medium">6</span> sessions</span>
            <span><span className="text-ink font-medium">7–9</span> hours total</span>
            <span><span className="text-ink font-medium">$0</span> to participate</span>
            <span><span className="text-ink font-medium">No</span> coding required</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <DomainAwareLink
              basePath="/join"
              className="inline-flex items-baseline gap-2 bg-ink text-paper px-7 py-4 text-sm uppercase tracking-widest mono hover:bg-terracotta transition-colors"
            >
              Personalize your start <span aria-hidden>→</span>
            </DomainAwareLink>
            <Link
              href="/curriculum"
              className="text-ink underline-offset-[6px] hover:underline decoration-terracotta decoration-2 text-sm uppercase tracking-widest mono"
            >
              See the curriculum
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <hr className="rule" />

      {/* Section 01 — Domain-aware value (KC1: career-specific performance expectancy) */}
      <AnimatedSection delay={0.04}>
        <section>
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <p className="section-mark">§ 01 · Why it could matter for you</p>
          </div>
          <DomainValueBlock />
        </section>
      </AnimatedSection>

      <hr className="rule" />

      {/* Section 02 — Stories + Projects (single block, two routes out) */}
      <AnimatedSection delay={0.06}>
        <section>
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <p className="section-mark">§ 02 · See what students build</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <article>
              <h2 className="serif-roman text-3xl md:text-4xl leading-tight">
                Stories from peers in fields like yours.
              </h2>
              <p className="mt-4 text-ink/80 max-w-md">
                Illustrative composites grounded in our formative interviews — what students built, what concentration they
                came from, and how long it took.
              </p>
              <DomainAwareLink
                basePath="/stories"
                className="mt-6 inline-flex items-baseline gap-2 mono text-sm uppercase tracking-widest text-terracotta hover:text-ink"
              >
                Read peer stories <span aria-hidden>→</span>
              </DomainAwareLink>
            </article>
            <article className="md:border-l md:border-rule md:pl-12">
              <h2 className="serif-roman text-3xl md:text-4xl leading-tight">
                Concrete projects you could finish.
              </h2>
              <p className="mt-4 text-ink/80 max-w-md">
                From no-code workflows to short scripts. Each one tells you the tools, the time, and the field. You pick the
                topic; the program is built around helping you finish it.
              </p>
              <DomainAwareLink
                basePath="/projects"
                className="mt-6 inline-flex items-baseline gap-2 mono text-sm uppercase tracking-widest text-terracotta hover:text-ink"
              >
                Browse projects <span aria-hidden>→</span>
              </DomainAwareLink>
            </article>
          </div>
        </section>
      </AnimatedSection>

      <hr className="rule" />

      {/* Section 03 — How it works, as a table-of-contents (PF3) */}
      <AnimatedSection delay={0.08}>
        <section id="how-it-works" className="scroll-mt-24">
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <p className="section-mark">§ 03 · How it works</p>
          </div>

          <h2 className="serif-roman text-3xl md:text-4xl leading-tight max-w-3xl">
            Six checkpoints, each one ending in something you've made.
          </h2>
          <p className="mt-4 text-ink/80 max-w-2xl">
            Every checkpoint runs under 90 minutes and can be done asynchronously. You hold the deliverable at the end of
            each one.
          </p>

          <ol className="mt-10 divide-y divide-rule border-y border-rule">
            {milestones.map(([n, title, body]) => (
              <li key={n} className="py-5 grid grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_1fr_2fr] gap-4 md:gap-8 items-baseline">
                <span className="mono text-warm-gray text-sm">{n}</span>
                <span className="serif-roman text-xl md:text-2xl">{title}</span>
                <span className="text-ink/75 col-span-2 md:col-span-1">{body}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <Link href="/curriculum" className="text-ink mono text-sm uppercase tracking-widest underline-offset-[6px] hover:underline decoration-terracotta decoration-2">
              Open the full curriculum →
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <hr className="rule" />

      {/* Section 04 — Grounded panel: barriers + commitment merged (WC4 + WC5) */}
      <AnimatedSection delay={0.1}>
        <section>
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <p className="section-mark">§ 04 · What we built around</p>
          </div>
          <GroundedPanel />
        </section>
      </AnimatedSection>

      <hr className="rule" />

      {/* Section 05 — Closing CTA */}
      <AnimatedSection delay={0.12}>
        <section className="bg-ink text-paper px-8 md:px-14 py-14 md:py-20 -mx-6 md:-mx-10">
          <div className="max-w-3xl mx-auto">
            <p className="section-mark" style={{ color: "rgba(245, 241, 232, 0.7)" }}>§ 05 · Closing</p>
            <p className="serif text-3xl md:text-5xl leading-tight mt-6">
              Students who got an early start on AI didn't have better brains — they had better access.
            </p>
            <p className="mt-6 text-paper/80 max-w-2xl">
              We're trying to extend that access on terms that respect your time, your field, and your starting point.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <DomainAwareLink
                basePath="/join"
                className="inline-flex items-baseline gap-2 bg-terracotta text-paper px-7 py-4 text-sm uppercase tracking-widest mono hover:bg-paper hover:text-ink transition-colors"
              >
                Personalize your start <span aria-hidden>→</span>
              </DomainAwareLink>
              <Link
                href="/curriculum/1"
                className="text-paper/90 underline-offset-[6px] hover:underline decoration-terracotta decoration-2 text-sm uppercase tracking-widest mono"
              >
                See the first module
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
