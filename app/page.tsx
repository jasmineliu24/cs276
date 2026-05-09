import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CareerSelector } from "@/components/CareerSelector";
import { DomainValueBlock } from "@/components/DomainValueBlock";
import { DomainAwareLink } from "@/components/DomainAwareLink";
import { GroundedPanel } from "@/components/GroundedPanel";

const studentQuotes = [
  "I feel much more confident in becoming ready for internships and being in the workforce because I can use AI tools to improve my efficiency, which is what my internship boss wanted to see from me last summer. I have another internship this summer and I know I can be more proactive in reaching out because I have a stronger foundation through this engaging curriculum.",
  "I wish I had this tool when I was back in high school so I could work on AI research projects that had real-world impact under mentorship and collaboration.",
  "I really like how accessible this platform is and how it assumes no knowledge of AI. Learning from this platform means I don't need to be afraid of other people judging me for my lack of AI knowledge.",
] as const;

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

      {/* Section 01 — AI literacy */}
      <AnimatedSection delay={0.04}>
        <section>
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <p className="section-mark">§ 01 · Why AI literacy matters</p>
          </div>
          <h2 className="serif-roman text-3xl md:text-4xl leading-tight max-w-3xl">
            Using AI well takes more than a chat window.
          </h2>
          <p className="mt-6 text-ink/80 max-w-2xl text-lg leading-relaxed">
            AI tools are reshaping everyday work, from drafting and synthesis to coding, analysis, and decision support,
            yet using them well takes more than access to a chat window. Strong AI literacy means knowing enough to frame
            problems clearly, steer tools responsibly, verify outputs against evidence, and understand limits around bias,
            hallucination, and privacy. Across disciplines, those skills are increasingly affecting coursework, internships,
            interviews, and how people participate in workplaces that are experiencing heavy automation. When people only get
            fluent in AI through uneven informal exposure or advanced prerequisites, the gap is not just technical comfort
            but longer-term opportunity. Inclusive, practice-grounded learning is one way to keep AI from becoming another axis
            on which access diverges.
          </p>
        </section>
      </AnimatedSection>

      <hr className="rule" />

      {/* Section 02 — Student feedback */}
      <AnimatedSection delay={0.06}>
        <section>
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <p className="section-mark">§ 02 · Student feedback</p>
          </div>
          <h2 className="serif-roman text-3xl md:text-4xl leading-tight max-w-3xl">
            What participants have said about the experience.
          </h2>
          <ul className="mt-10 space-y-8 max-w-2xl">
            {studentQuotes.map((quote, i) => (
              <li key={i} className="border-l-2 border-terracotta pl-6 md:pl-8">
                <blockquote className="serif text-xl md:text-2xl leading-snug text-ink/95">
                  <p>&ldquo;{quote}&rdquo;</p>
                </blockquote>
              </li>
            ))}
          </ul>
        </section>
      </AnimatedSection>

      <hr className="rule" />

      {/* Section 03 — Domain-aware value (KC1: career-specific performance expectancy) */}
      <AnimatedSection delay={0.08}>
        <section>
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <p className="section-mark">§ 03 · Why it could matter for you</p>
          </div>
          <DomainValueBlock />
        </section>
      </AnimatedSection>

      <hr className="rule" />

      {/* Section 04 — Stories + Projects (single block, two routes out) */}
      <AnimatedSection delay={0.1}>
        <section>
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <p className="section-mark">§ 04 · See what students build</p>
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

      {/* Section 05 — How it works, as a table-of-contents (PF3) */}
      <AnimatedSection delay={0.12}>
        <section id="how-it-works" className="scroll-mt-24">
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <p className="section-mark">§ 05 · How it works</p>
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

      {/* Section 06 — Grounded panel: barriers + commitment merged (WC4 + WC5) */}
      <AnimatedSection delay={0.14}>
        <section>
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <p className="section-mark">§ 06 · What we built around</p>
          </div>
          <GroundedPanel />
        </section>
      </AnimatedSection>

      <hr className="rule" />

      {/* Section 07 — Closing CTA */}
      <AnimatedSection delay={0.16}>
        <section className="bg-ink text-paper px-8 md:px-14 py-14 md:py-20 -mx-6 md:-mx-10">
          <div className="max-w-3xl mx-auto">
            <p className="section-mark" style={{ color: "rgba(245, 241, 232, 0.7)" }}>§ 07 · Closing</p>
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
