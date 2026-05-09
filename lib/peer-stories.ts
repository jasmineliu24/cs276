import { PeerStory } from "@/types";

export const peerStories: PeerStory[] = [
  {
    id: "story-med-1",
    name: "Amaru",
    concentration: "Human Developmental & Regenerative Biology",
    careerGoal: "Pre-med, planning to apply to medical school",
    domainId: "medicine",
    projectTitle: "Plain-language asthma handouts for the campus health clinic",
    projectSummary:
      "Built a Claude-based prompt that turns dense patient-education PDFs into clear handouts at a 6th-grade reading level, then verified the output against the original sources.",
    durationWeeks: 4,
    complexity: "no-code",
    illustrative: true
  },
  {
    id: "story-med-2",
    name: "Tasha",
    concentration: "Sociology, on a public health track",
    careerGoal: "Master of Public Health, then community health work",
    domainId: "medicine",
    projectTitle: "A literature scan of food-insecurity interventions",
    projectSummary:
      "Used Perplexity and a custom GPT to map peer-reviewed work on SNAP outreach, then wrote a 2-page brief she shared with a campus food-pantry director.",
    durationWeeks: 5,
    complexity: "no-code",
    illustrative: true
  },
  {
    id: "story-law-1",
    name: "Jordan",
    concentration: "Government",
    careerGoal: "Pre-law, considering public defender work",
    domainId: "law",
    projectTitle: "A statute-comparison tool for tenant rights",
    projectSummary:
      "Used ChatGPT to draft side-by-side summaries of tenant-rights statutes across three states for a campus legal-aid group, with each output checked against the cited source text.",
    durationWeeks: 6,
    complexity: "minimal-code",
    illustrative: true
  },
  {
    id: "story-law-2",
    name: "Rosa",
    concentration: "History & Literature",
    careerGoal: "Paralegal experience after graduation, then law school",
    domainId: "law",
    projectTitle: "First-pass memo drafter for an immigration legal clinic",
    projectSummary:
      "Built a guided Claude prompt that produces a structured first draft of an asylum-claim memo from a fact pattern, leaving citation-checking to the human reviewer.",
    durationWeeks: 4,
    complexity: "no-code",
    illustrative: true
  },
  {
    id: "story-edu-1",
    name: "Devon",
    concentration: "Mathematics, secondary-education concentration",
    careerGoal: "Public-school math teacher",
    domainId: "education",
    projectTitle: "Differentiated word-problem generator",
    projectSummary:
      "Designed a no-code workflow that takes one Algebra I word problem and produces three versions at different reading levels, plus a teacher-facing answer key.",
    durationWeeks: 3,
    complexity: "no-code",
    illustrative: true
  },
  {
    id: "story-edu-2",
    name: "Priya",
    concentration: "Linguistics",
    careerGoal: "ESL curriculum design",
    domainId: "education",
    projectTitle: "Reading-level rewriter for ESL learners",
    projectSummary:
      "Used a Notion-AI workflow to rewrite short news articles for intermediate ESL readers, with vocabulary callouts pulled out as a side panel.",
    durationWeeks: 4,
    complexity: "no-code",
    illustrative: true
  },
  {
    id: "story-soc-1",
    name: "Marcus",
    concentration: "Economics",
    careerGoal: "Public-policy research, eventually a master's in policy",
    domainId: "social-science",
    projectTitle: "Synthesis of housing-affordability evidence",
    projectSummary:
      "Used Perplexity to scope the empirical literature on rent control, then used Claude to compress notes into a 3-page memo for an undergraduate policy journal.",
    durationWeeks: 5,
    complexity: "no-code",
    illustrative: true
  },
  {
    id: "story-soc-2",
    name: "Imani",
    concentration: "Sociology",
    careerGoal: "Nonprofit research and program evaluation",
    domainId: "social-science",
    projectTitle: "Coding interview transcripts for a class project",
    projectSummary:
      "Used a structured Claude prompt to suggest first-pass thematic codes on a small interview corpus, then refined them by hand and wrote up the final coding scheme.",
    durationWeeks: 4,
    complexity: "minimal-code",
    illustrative: true
  },
  {
    id: "story-biz-1",
    name: "Leo",
    concentration: "Applied Math, considering economics",
    careerGoal: "Consulting after graduation",
    domainId: "business",
    projectTitle: "Earnings-call summarizer for an investing club",
    projectSummary:
      "Used the OpenAI API in a short Python notebook to turn quarterly earnings transcripts into a structured 1-page summary with the segment data pulled out.",
    durationWeeks: 6,
    complexity: "minimal-code",
    illustrative: true
  },
  {
    id: "story-biz-2",
    name: "Sade",
    concentration: "Sociology, with a secondary in business",
    careerGoal: "Marketing and brand strategy",
    domainId: "business",
    projectTitle: "Voice-of-customer themes from a coffee-shop's reviews",
    projectSummary:
      "Pulled Yelp reviews for a family-owned coffee shop and used Claude to surface recurring complaints, then wrote a one-page recommendation for the owner.",
    durationWeeks: 3,
    complexity: "no-code",
    illustrative: true
  }
];
