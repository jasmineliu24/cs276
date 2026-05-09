import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-med-1",
    title: "Plain-language clinic handouts",
    summary:
      "Convert dense patient-education PDFs into clear handouts at a 6th-grade reading level, with a side-by-side check against the original.",
    domainId: "medicine",
    complexity: "no-code",
    tools: ["Claude", "Google Docs"],
    builderNote: "Built with a single guided prompt and a manual verification pass.",
    illustrative: true
  },
  {
    id: "proj-med-2",
    title: "Symptom-history triage notes",
    summary:
      "Turn a free-text symptom log into a structured chronological note a clinician can scan in under a minute.",
    domainId: "medicine",
    complexity: "no-code",
    tools: ["ChatGPT", "Notion"],
    builderNote: "Template prompt, no code required.",
    illustrative: true
  },
  {
    id: "proj-law-1",
    title: "Tenant-rights statute comparison",
    summary:
      "A side-by-side comparison of tenant-rights statutes across three states for a campus legal-aid group, with citations checked against source text.",
    domainId: "law",
    complexity: "minimal-code",
    tools: ["ChatGPT", "Python", "Pandas"],
    builderNote: "About 40 lines of Python; the rest is structured prompting.",
    illustrative: true
  },
  {
    id: "proj-law-2",
    title: "Immigration memo first-drafter",
    summary:
      "Generate a structured first draft of an asylum-claim memo from a fact pattern, leaving citation-checking to a human reviewer.",
    domainId: "law",
    complexity: "no-code",
    tools: ["Claude", "Google Docs"],
    builderNote: "Single guided prompt with reviewer checklist.",
    illustrative: true
  },
  {
    id: "proj-edu-1",
    title: "Differentiated word-problem generator",
    summary:
      "From one Algebra I word problem, produce three versions at different reading levels plus a teacher-facing answer key.",
    domainId: "education",
    complexity: "no-code",
    tools: ["ChatGPT"],
    builderNote: "Prompt template; no code required.",
    illustrative: true
  },
  {
    id: "proj-edu-2",
    title: "ESL reading-level rewriter",
    summary:
      "Rewrite short news articles for intermediate ESL readers with vocabulary callouts pulled out as a side panel.",
    domainId: "education",
    complexity: "no-code",
    tools: ["Notion AI"],
    builderNote: "Set up directly inside a Notion workflow.",
    illustrative: true
  },
  {
    id: "proj-soc-1",
    title: "Housing-affordability evidence brief",
    summary:
      "Scope the empirical literature on rent control, then compress notes into a 3-page memo for an undergraduate policy journal.",
    domainId: "social-science",
    complexity: "no-code",
    tools: ["Perplexity", "Claude"],
    builderNote: "Two-tool workflow; first scope, then compress.",
    illustrative: true
  },
  {
    id: "proj-soc-2",
    title: "Interview transcript first-pass coding",
    summary:
      "Use a structured prompt to suggest first-pass thematic codes for a small qualitative corpus, then refine by hand.",
    domainId: "social-science",
    complexity: "minimal-code",
    tools: ["Claude API", "Python"],
    builderNote: "Short Python script that fans the prompt across each transcript.",
    illustrative: true
  },
  {
    id: "proj-biz-1",
    title: "Earnings-call summarizer",
    summary:
      "Turn quarterly earnings-call transcripts into a structured 1-page summary with the segment data pulled out into a table.",
    domainId: "business",
    complexity: "minimal-code",
    tools: ["OpenAI API", "Python"],
    builderNote: "About 60 lines of Python in a notebook.",
    illustrative: true
  },
  {
    id: "proj-biz-2",
    title: "Voice-of-customer themes",
    summary:
      "Pull recent reviews for a small business and surface recurring themes and complaints in a one-page recommendation.",
    domainId: "business",
    complexity: "no-code",
    tools: ["Claude", "Google Sheets"],
    builderNote: "Reviews pasted into Sheets, themes drafted with Claude.",
    illustrative: true
  },
  {
    id: "proj-biz-3",
    title: "Cold-email rewriter for outreach",
    summary:
      "Take a single cold-email draft and produce three audience-specific variants with subject lines tested for clarity.",
    domainId: "business",
    complexity: "no-code",
    tools: ["ChatGPT"],
    builderNote: "Prompt template with three audience profiles.",
    illustrative: true
  },
  {
    id: "proj-edu-3",
    title: "Office-hours FAQ generator",
    summary:
      "Pull a semester of office-hours questions and turn them into a tiered FAQ with quick answers and longer explainers.",
    domainId: "education",
    complexity: "no-code",
    tools: ["ChatGPT", "Google Docs"],
    builderNote: "Single workflow, runs in under an hour.",
    illustrative: true
  }
];
