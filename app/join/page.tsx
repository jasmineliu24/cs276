import type { Metadata } from "next";
import Link from "next/link";
import { JoinForm } from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Personalize your start · AIPath",
  description:
    "Share a few details so AIPath can tailor your starting point — career direction, AI experience, learning approach."
};

export default function JoinPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-6">
        <Link
          href="/"
          className="mono text-xs uppercase tracking-widest text-warm-gray hover:text-ink"
        >
          ← Back home
        </Link>
        <p className="section-mark">§ Personalize</p>
        <h1 className="serif text-5xl md:text-6xl leading-[1.02] tracking-tight">
          Five short questions, then we route you.
        </h1>
        <p className="text-lg text-ink/80 leading-relaxed max-w-2xl">
          Nothing here is screening. Your answers help us point you at the right project examples, the right level of
          guidance, and the right starting module. The program stays free either way.
        </p>
      </header>

      <JoinForm />

      <p className="serif italic text-warm-gray text-sm border-t border-rule pt-6">
        Prefer to look around first?{" "}
        <Link href="/curriculum" className="text-ink underline-offset-4 hover:underline">
          See the curriculum
        </Link>
        {" "}or{" "}
        <Link href="/projects" className="text-ink underline-offset-4 hover:underline">
          browse the project gallery
        </Link>
        .
      </p>
    </div>
  );
}
