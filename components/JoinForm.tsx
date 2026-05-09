"use client";

import { FormEvent, Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { careerDomains, isCareerDomainId } from "@/lib/careers";

const DEMO_OPTIONS = [
  { id: "first-gen", label: "First-generation college student" },
  { id: "low-income", label: "Low-income background" },
  { id: "bipoc", label: "BIPOC" }
] as const;

const AI_EXPERIENCE_OPTIONS = [
  { id: "none", label: "I haven't used AI tools yet" },
  { id: "occasional", label: "I use ChatGPT or similar occasionally" },
  { id: "regular", label: "I use AI tools regularly but haven't built a project" },
  { id: "built", label: "I've built something with AI before" }
] as const;

const LEARNING_APPROACH_OPTIONS = [
  { id: "guided", label: "Step-by-step guided" },
  { id: "project", label: "Project-driven from the start" },
  { id: "mix", label: "A mix of both" }
] as const;

const CAREER_OPTIONS = [
  ...careerDomains.map((d) => ({ id: d.id, label: d.shortLabel })),
  { id: "exploring", label: "Still exploring" }
];

function FormBody() {
  const params = useSearchParams();
  const prefillDomain = params?.get("domain") ?? null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [hopeToLearn, setHopeToLearn] = useState("");
  const [demographics, setDemographics] = useState<string[]>([]);
  const [careerDirection, setCareerDirection] = useState("");
  const [aiExperience, setAiExperience] = useState("");
  const [learningApproach, setLearningApproach] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (prefillDomain && isCareerDomainId(prefillDomain) && !careerDirection) {
      setCareerDirection(prefillDomain);
    }
    // intentional: only on first mount with prefill
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDemo = (id: string) => {
    setDemographics((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          school,
          hopeToLearn,
          demographics,
          careerDirection,
          aiExperience,
          learningApproach
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(typeof data.error === "string" ? data.error : "Something went wrong.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-rule p-10" role="status" aria-live="polite">
        <p className="mono text-xs uppercase tracking-widest text-warm-gray">Received</p>
        <h2 className="serif text-3xl mt-4">Thanks — we have your details.</h2>
        <p className="mt-4 text-ink/80">
          Your starting point will be tailored to the answers you shared. Someone from the team may follow up with updates;
          there's no obligation, and you can keep learning at your own pace anytime.
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full bg-paper border border-rule px-3 py-3 text-ink placeholder:text-warm-gray focus:bg-white focus:border-terracotta";

  return (
    <form onSubmit={onSubmit} className="space-y-12" noValidate>
      {/* 01 — Career direction */}
      <section className="grid md:grid-cols-[8rem_1fr] gap-6 md:gap-12">
        <div>
          <p className="mono text-warm-gray text-xs uppercase tracking-widest">01 / Direction</p>
          <p className="serif italic text-warm-gray text-sm mt-1">required for routing</p>
        </div>
        <fieldset>
          <legend className="serif-roman text-2xl">What career area are you considering?</legend>
          <p className="mt-2 text-warm-gray text-sm">You can change this later. Pick the closest fit.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {CAREER_OPTIONS.map((opt) => {
              const active = careerDirection === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setCareerDirection(active ? "" : opt.id)}
                  aria-pressed={active}
                  className={
                    active
                      ? "border border-terracotta bg-terracotta text-paper px-4 py-2 text-sm"
                      : "border border-rule text-ink px-4 py-2 text-sm hover:bg-white"
                  }
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </fieldset>
      </section>

      <hr className="rule" />

      {/* 02 — AI experience */}
      <section className="grid md:grid-cols-[8rem_1fr] gap-6 md:gap-12">
        <div>
          <p className="mono text-warm-gray text-xs uppercase tracking-widest">02 / Experience</p>
        </div>
        <fieldset>
          <legend className="serif-roman text-2xl">Where are you with AI tools today?</legend>
          <div className="mt-5 space-y-3">
            {AI_EXPERIENCE_OPTIONS.map((opt) => (
              <label key={opt.id} className="flex items-start gap-3 text-ink cursor-pointer">
                <input
                  type="radio"
                  name="aiExperience"
                  value={opt.id}
                  checked={aiExperience === opt.id}
                  onChange={() => setAiExperience(opt.id)}
                  className="mt-1.5 h-3.5 w-3.5 accent-terracotta"
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </section>

      <hr className="rule" />

      {/* 03 — Learning approach */}
      <section className="grid md:grid-cols-[8rem_1fr] gap-6 md:gap-12">
        <div>
          <p className="mono text-warm-gray text-xs uppercase tracking-widest">03 / Approach</p>
        </div>
        <fieldset>
          <legend className="serif-roman text-2xl">How do you prefer to learn?</legend>
          <div className="mt-5 space-y-3">
            {LEARNING_APPROACH_OPTIONS.map((opt) => (
              <label key={opt.id} className="flex items-start gap-3 text-ink cursor-pointer">
                <input
                  type="radio"
                  name="learningApproach"
                  value={opt.id}
                  checked={learningApproach === opt.id}
                  onChange={() => setLearningApproach(opt.id)}
                  className="mt-1.5 h-3.5 w-3.5 accent-terracotta"
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </section>

      <hr className="rule" />

      {/* 04 — Contact */}
      <section className="grid md:grid-cols-[8rem_1fr] gap-6 md:gap-12">
        <div>
          <p className="mono text-warm-gray text-xs uppercase tracking-widest">04 / Contact</p>
          <p className="serif italic text-warm-gray text-sm mt-1">we'll only use this to follow up</p>
        </div>
        <div className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="join-name" className="text-sm text-ink">
                Name <span className="text-terracotta">*</span>
              </label>
              <input
                id="join-name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="join-email" className="text-sm text-ink">
                Email <span className="text-terracotta">*</span>
              </label>
              <input
                id="join-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="join-school" className="text-sm text-ink">
              School <span className="text-terracotta">*</span>
            </label>
            <input
              id="join-school"
              type="text"
              autoComplete="organization"
              required
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className={fieldClass}
            />
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* 05 — Optional */}
      <section className="grid md:grid-cols-[8rem_1fr] gap-6 md:gap-12">
        <div>
          <p className="mono text-warm-gray text-xs uppercase tracking-widest">05 / Optional</p>
          <p className="serif italic text-warm-gray text-sm mt-1">helps us report on who the program reaches</p>
        </div>
        <div className="space-y-6">
          <fieldset>
            <legend className="text-sm text-ink">Identity (any that apply)</legend>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {DEMO_OPTIONS.map((opt) => (
                <label key={opt.id} className="inline-flex items-center gap-2 text-sm text-ink cursor-pointer">
                  <input
                    type="checkbox"
                    checked={demographics.includes(opt.id)}
                    onChange={() => toggleDemo(opt.id)}
                    className="h-3.5 w-3.5 accent-terracotta"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </fieldset>
          <div>
            <label htmlFor="join-hope" className="text-sm text-ink">
              Anything else that would help us tailor your starting point?
            </label>
            <textarea
              id="join-hope"
              rows={3}
              value={hopeToLearn}
              onChange={(e) => setHopeToLearn(e.target.value)}
              placeholder="e.g., short weekly prompts, more examples in my field..."
              className={fieldClass}
            />
          </div>
        </div>
      </section>

      {status === "error" ? (
        <p className="text-sm text-terracotta" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className="flex items-baseline gap-6 pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-ink text-paper px-7 py-4 mono text-sm uppercase tracking-widest hover:bg-terracotta transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Sending…" : "Submit personalization →"}
        </button>
        <p className="serif italic text-warm-gray text-sm">
          You can update later — nothing is locked in.
        </p>
      </div>
    </form>
  );
}

export function JoinForm() {
  return (
    <Suspense fallback={null}>
      <FormBody />
    </Suspense>
  );
}
