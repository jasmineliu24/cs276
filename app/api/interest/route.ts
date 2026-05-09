import { NextRequest, NextResponse } from "next/server";
import { isCareerDomainId } from "@/lib/careers";

type InterestBody = {
  name?: string;
  email?: string;
  school?: string;
  demographics?: string[];
  hopeToLearn?: string;
  careerDirection?: string;
  aiExperience?: string;
  learningApproach?: string;
};

const DEMO_LABELS: Record<string, string> = {
  "first-gen": "First-gen",
  "low-income": "Low income",
  bipoc: "BIPOC"
};

const AI_EXPERIENCE_LABELS: Record<string, string> = {
  none: "Has not used AI tools yet",
  occasional: "Uses chatbots occasionally",
  regular: "Uses AI regularly, has not built a project",
  built: "Has built something with AI before"
};

const LEARNING_APPROACH_LABELS: Record<string, string> = {
  guided: "Step-by-step guided",
  project: "Project-driven from the start",
  mix: "Mix of both"
};

export async function POST(request: NextRequest) {
  let body: InterestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const school = typeof body.school === "string" ? body.school.trim() : "";
  const hopeToLearn = typeof body.hopeToLearn === "string" ? body.hopeToLearn.trim() : "";
  const rawDemographics = Array.isArray(body.demographics)
    ? body.demographics.filter((d): d is string => typeof d === "string")
    : [];
  const demographics = rawDemographics.map((id) => DEMO_LABELS[id]).filter(Boolean);

  const careerRaw = typeof body.careerDirection === "string" ? body.careerDirection : "";
  const careerDirection = isCareerDomainId(careerRaw) || careerRaw === "exploring" ? careerRaw : "";
  const aiExperience =
    typeof body.aiExperience === "string" && AI_EXPERIENCE_LABELS[body.aiExperience]
      ? AI_EXPERIENCE_LABELS[body.aiExperience]
      : "";
  const learningApproach =
    typeof body.learningApproach === "string" && LEARNING_APPROACH_LABELS[body.learningApproach]
      ? LEARNING_APPROACH_LABELS[body.learningApproach]
      : "";

  if (!name || !email || !school) {
    return NextResponse.json({ error: "Name, email, and school are required." }, { status: 400 });
  }

  const baseId = process.env.AIRTABLE_BASE_ID;
  const apiKey = process.env.AIRTABLE_API_KEY;
  const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Interest";

  if (!baseId || !apiKey) {
    return NextResponse.json(
      {
        error:
          "Interest sign-ups are not configured yet. Please email your teaching team or try again later."
      },
      { status: 503 }
    );
  }

  const fields: Record<string, string | string[]> = {
    Name: name,
    Email: email,
    School: school,
    Source: "AIPath Site"
  };

  if (hopeToLearn) {
    fields.HopeToLearn = hopeToLearn;
  }

  if (demographics.length > 0) {
    fields.Demographics = demographics;
  }

  if (careerDirection) {
    fields.CareerDirection = careerDirection;
  }

  if (aiExperience) {
    fields.AIExperience = aiExperience;
  }

  if (learningApproach) {
    fields.LearningApproach = learningApproach;
  }

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  const airtableRes = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ records: [{ fields }] })
  });

  if (!airtableRes.ok) {
    const detail = await airtableRes.text().catch(() => "");
    console.error("Airtable error", airtableRes.status, detail);
    return NextResponse.json({ error: "We could not save your submission. Please try again in a moment." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
