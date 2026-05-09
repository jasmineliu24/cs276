/**
 * Merges the paper's WC4 (barrier-neutralization) and WC5 (commitment transparency)
 * into a single research-grounded panel. Each entry pairs a named barrier with the
 * concrete fact that resolves it.
 */
const ENTRIES = [
  {
    barrier: "No coding background",
    fact: "No code",
    resolution:
      "Starter projects use chat tools and templates. Coding shows up later as an option, not a requirement.",
    note: "Cited as a barrier by every FGLI interviewee."
  },
  {
    barrier: "Cost of AI tools and subscriptions",
    fact: "$0",
    resolution:
      "Free access to the AI tools the program uses, provided through the program. No subscription is required to participate.",
    note: "Raised by interviewees who tried paid tools and stopped."
  },
  {
    barrier: "Time pressure during the semester",
    fact: "≤ 90 min / session",
    resolution:
      "Each checkpoint runs under 90 minutes and can be done asynchronously, in pieces, around your other obligations.",
    note: "Raised across the interview group, especially by students balancing work hours."
  },
  {
    barrier: "An unclear starting point",
    fact: "Your topic",
    resolution:
      "You pick the project topic from your own career area, with checkpoints and a clear next step at every stage.",
    note: "The single most common reason interviewees said they hadn't gotten started."
  }
] as const;

export function GroundedPanel() {
  return (
    <div>
      <h2 className="serif-roman text-3xl md:text-4xl leading-tight max-w-3xl">
        Four reasons students said they hadn't started — and what we did about each one.
      </h2>
      <p className="mt-4 text-ink/80 max-w-2xl">
        These came up by name in our formative interviews. We list them here so you can decide for yourself whether the
        program is set up around the constraints you actually have.
      </p>

      <ol className="mt-10 grid gap-px bg-rule border border-rule md:grid-cols-2">
        {ENTRIES.map((e, i) => (
          <li
            key={e.barrier}
            className="bg-paper p-6 md:p-8 flex flex-col gap-4"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="mono text-warm-gray text-xs uppercase tracking-widest">
                Barrier {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mono text-terracotta text-sm">{e.fact}</span>
            </div>
            <p className="serif-roman text-2xl md:text-3xl leading-tight">{e.barrier}</p>
            <p className="text-ink/80">{e.resolution}</p>
            <p className="mt-auto text-warm-gray text-sm italic">{e.note}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
