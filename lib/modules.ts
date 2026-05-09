import { Module } from "@/types";

export const modules: Module[] = [
  {
    id: "1",
    title: "What Even Is AI?",
    time: "~45 min",
    description:
      "Demystify the buzzwords. Learn what a model actually is, what 'training' means, and why AI is suddenly everywhere.",
    keyConcepts: ["LLMs", "neural networks", "generative AI", "AI vs. automation"],
    activities: [
      { id: "glossary", title: "Interactive glossary", description: "Match key terms to plain-language definitions." },
      { id: "reading", title: "Short readings", description: "Read two short explainers about modern AI systems." },
      { id: "quiz", title: "5-question quiz", description: "Check your understanding before moving forward." }
    ],
    learningGoals: [
      "Explain the difference between AI, machine learning, and automation",
      "Define common terms without jargon",
      "Describe why AI adoption accelerated recently"
    ],
    overview:
      "You are not behind. You just have not had a chance to learn the language yet. This module builds a shared vocabulary so you can follow conversations in class, internships, and interviews.",
    lessonMarkdown: `### Start with the big picture\n\nAI is a broad field. Most tools students use today are built on machine learning models trained on large datasets.\n\n> [!KEY_TERM]\n> **Model**: A model is a system that learns patterns from examples so it can make predictions or generate outputs on new inputs.\n\n> [!COMMON_MISCONCEPTION]\n> AI is not magic and it is not always correct. Strong users verify outputs, compare sources, and keep humans in the loop.\n\n> [!TRY_IT]\n> Open ChatGPT and ask it to explain one concept from your major at three reading levels: middle school, high school, and college. Compare the differences.`,
    reflectionPrompt: "What AI term felt intimidating before this lesson, and how would you explain it now to a friend?",
    whatsNext: "Next, we will help you identify a project idea that matters to you personally."
  },
  {
    id: "2",
    title: "Finding Your Project Idea",
    time: "~1 hour",
    description:
      "The hardest part of any AI project is knowing where to start. We'll help you connect AI capabilities to problems you actually care about.",
    keyConcepts: ["problem framing", "use-case mapping", "feasibility"],
    activities: [
      { id: "brainstorm", title: "Guided brainstorm worksheet", description: "Map your interests to community or career pain points." },
      { id: "board", title: "Peer idea-sharing board", description: "Post your concept and review at least one peer idea." },
      { id: "feedback", title: "1:1 feedback prompt", description: "Write one question you would ask a mentor before building." }
    ],
    learningGoals: [
      "Turn broad interests into specific project questions",
      "Evaluate whether an AI approach is practical",
      "Draft a simple project scope for Module 4"
    ],
    overview:
      "FGLI students often receive less informal coaching on project selection. This module gives you scaffolding so you can move from vague ideas to a clear, realistic plan.",
    lessonMarkdown: `### Start from your context\n\nYour best project ideas often come from classes, campus jobs, family responsibilities, or community needs you understand deeply.\n\n> [!KEY_TERM]\n> **Problem framing**: Defining a problem clearly enough that you can test whether your solution helps.\n\n> [!COMMON_MISCONCEPTION]\n> Bigger is not better. A narrow project you can finish beats a huge idea that never ships.\n\n> [!TRY_IT]\n> Write one sentence: *"I want to help [who] do [what] better by using AI to [action]."*`,
    reflectionPrompt: "What project idea are you choosing, and what makes it meaningful to your goals?",
    whatsNext: "Next, you will learn to quickly map the research landscape behind your idea.",
    note: "Draws from research finding that FGLI students need structured scaffolding for self-directed exploration."
  },
  {
    id: "3",
    title: "Conducting a Literature Review with AI",
    time: "~1.5 hours",
    description:
      "Learn to use AI tools like Perplexity to scope a research landscape fast - then go deeper with primary sources.",
    keyConcepts: ["research scoping", "source evaluation", "synthesis"],
    activities: [
      { id: "walkthrough", title: "Guided Perplexity walkthrough", description: "Generate a map of major themes and citations." },
      { id: "bibliography", title: "Annotated bibliography template", description: "Summarize and evaluate at least five sources." },
      { id: "peer-review", title: "Peer review round", description: "Exchange bibliographies and suggest one improvement." }
    ],
    learningGoals: [
      "Use AI tools to scope literature responsibly",
      "Check source credibility and relevance",
      "Synthesize evidence into a concise insight brief"
    ],
    overview:
      "You can use AI to move faster, but quality still depends on your judgment. This module teaches a workflow that combines speed and rigor.",
    lessonMarkdown: `### Use AI as a research assistant, not a replacement\n\nStart broad with AI summaries, then verify with primary sources and peer-reviewed material.\n\n> [!KEY_TERM]\n> **Synthesis**: Combining evidence from multiple sources into a coherent argument.\n\n> [!COMMON_MISCONCEPTION]\n> If an AI tool provides citations, that does not automatically mean the claim is trustworthy. Always open and verify sources.\n\n> [!TRY_IT]\n> Run a prompt in Perplexity: *"What are the top unresolved questions in [your topic]? Include sources from the last 5 years."*`,
    reflectionPrompt: "What did your literature scan change about your initial project assumptions?",
    whatsNext: "Next, you will build your first working prototype.",
    note: "Directly incorporates interviewee suggestion that 'a summary of existing literature would be very helpful as a starting point'."
  },
  {
    id: "4",
    title: "Building Your Project",
    time: "~2-3 hours (split across sessions)",
    description:
      "Put it together. We'll walk you through prototyping an AI-powered project - no coding background required for most tracks.",
    keyConcepts: ["prototyping", "iteration", "tool selection"],
    activities: [
      { id: "track", title: "Choose a track", description: "No-code, low-code, or code based on your comfort level." },
      { id: "checkpoint", title: "Checkpoint reviews", description: "Submit milestones and refine based on feedback." },
      { id: "walkthrough", title: "Video walkthroughs", description: "Follow guided build videos for your selected track." }
    ],
    learningGoals: [
      "Select an implementation path that matches your skills",
      "Build a prototype that demonstrates real user value",
      "Document decisions for your portfolio narrative"
    ],
    overview:
      "This module is flexible for busy schedules. You can complete build steps asynchronously across multiple short sessions.",
    lessonMarkdown: `### Pick the path that fits your bandwidth\n\nYou are balancing coursework, work, and family. The best track is the one you can finish with confidence.\n\n> [!KEY_TERM]\n> **Prototype**: A first version built to test an idea quickly, not a final polished product.\n\n> [!COMMON_MISCONCEPTION]\n> You do not need to write full software from scratch to demonstrate strong AI literacy.\n\n> [!TRY_IT]\n> Choose one track:\n> - No-code: ChatGPT, Claude, Perplexity, Notion AI\n> - Low-code: APIs with minimal Python\n> - Code: Python pipeline with a model API`,
    reflectionPrompt: "What trade-offs did you make in your prototype, and what would you improve next?",
    whatsNext: "Next, you will improve your work through peer critique."
  },
  {
    id: "5",
    title: "Peer Review & Critique",
    time: "~45 min",
    description:
      "Share what you've built and get constructive feedback. This is where most of the actual learning happens.",
    keyConcepts: ["technical communication", "iteration", "constructive critique"],
    activities: [
      { id: "form", title: "Structured peer review form", description: "Evaluate clarity, usefulness, and reliability." },
      { id: "threads", title: "Async comment threads", description: "Respond to peers with actionable suggestions." },
      { id: "revision", title: "Revision round", description: "Update your project based on feedback." }
    ],
    learningGoals: [
      "Give concrete, respectful feedback",
      "Interpret critique without losing momentum",
      "Use feedback to strengthen your final project"
    ],
    overview:
      "Many students say this is where growth accelerates. Feedback helps you notice blind spots and communicate your work more clearly.",
    lessonMarkdown: `### Critique is a growth tool\n\nProfessional AI work is collaborative. Learning to give and receive useful feedback is part of technical fluency.\n\n> [!KEY_TERM]\n> **Constructive criticism**: Feedback that identifies a clear improvement and suggests a path forward.\n\n> [!COMMON_MISCONCEPTION]\n> Critical feedback is not a judgment of your potential. It is a map for your next iteration.\n\n> [!TRY_IT]\n> Share your project summary on the class board below and leave two comments on peers' work.`,
    reflectionPrompt: "Which piece of feedback will most improve your project, and how will you apply it?",
    whatsNext: "Next, you will package your project for resumes, interviews, and applications.",
    note: "Directly from interviewee: 'Working with peers - if you ask me where I learn most from, it's constructive criticism.'"
  },
  {
    id: "6",
    title: "Presenting & Positioning Your Work",
    time: "~1 hour",
    description:
      "How do you talk about your AI project in a cover letter? An interview? A research application? We'll help you frame it.",
    keyConcepts: ["professional storytelling", "resume writing", "interview framing"],
    activities: [
      { id: "resume", title: "Resume snippet generator", description: "Draft measurable impact bullet points." },
      { id: "pitch", title: "Elevator pitch practice", description: "Record and refine a 60-second project story." },
      { id: "reflection", title: "Final reflection", description: "Document growth and next learning goals." }
    ],
    learningGoals: [
      "Translate project work into career-relevant language",
      "Craft concise project narratives for interviews",
      "Identify a realistic next step in your AI journey"
    ],
    overview:
      "Technical work matters more when you can explain why it matters. This final module helps you position your project with confidence.",
    lessonMarkdown: `### Tell the story behind your build\n\nEmployers and faculty evaluate both your technical choices and your reasoning.\n\n> [!KEY_TERM]\n> **Professional storytelling**: Communicating problem, approach, impact, and learning in a clear narrative.\n\n> [!COMMON_MISCONCEPTION]\n> You do not need a perfect project to present yourself strongly. You need honest reflection and clear evidence of growth.\n\n> [!TRY_IT]\n> Write a three-part interview answer: the problem, what you built, and what you learned.`,
    reflectionPrompt: "How would you describe your project as evidence of your readiness for AI-adjacent opportunities?",
    whatsNext: "You now have a portfolio-ready foundation. Keep iterating and stay connected to peer feedback."
  }
];

export function getModuleById(moduleId: string) {
  return modules.find((module) => module.id === moduleId);
}
