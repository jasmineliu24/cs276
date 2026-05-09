import { CareerDomain, CareerDomainId } from "@/types";

export const careerDomains: CareerDomain[] = [
  {
    id: "medicine",
    label: "Medicine & health",
    shortLabel: "Medicine",
    blurb:
      "Used by clinicians and researchers to summarize literature, draft patient-facing explanations, and screen records faster.",
    exampleRoles: ["Pre-med", "Public health", "Nursing", "Health policy"]
  },
  {
    id: "law",
    label: "Law & legal services",
    shortLabel: "Law",
    blurb:
      "Used by legal teams to compare statutes, draft first-pass memos, and pull patterns out of long case records.",
    exampleRoles: ["Pre-law", "Paralegal work", "Public defender support", "Legal aid"]
  },
  {
    id: "education",
    label: "Education & teaching",
    shortLabel: "Education",
    blurb:
      "Used by educators to differentiate materials, draft lesson plans for varied reading levels, and give faster feedback on student writing.",
    exampleRoles: ["Pre-K–12 teaching", "Curriculum design", "Tutoring", "Ed-tech"]
  },
  {
    id: "social-science",
    label: "Social science & policy",
    shortLabel: "Social science",
    blurb:
      "Used by analysts to synthesize qualitative data, summarize policy documents, and prepare evidence for memos.",
    exampleRoles: ["Policy analysis", "Nonprofit research", "Government", "Sociology / economics"]
  },
  {
    id: "business",
    label: "Business & finance",
    shortLabel: "Business",
    blurb:
      "Used by analysts and operators to draft client-ready documents, structure spreadsheets, and turn raw notes into briefings.",
    exampleRoles: ["Consulting", "Finance", "Marketing", "Operations"]
  }
];

const byId = new Map(careerDomains.map((d) => [d.id, d]));

export function getCareerDomain(id: CareerDomainId | string | null | undefined): CareerDomain | undefined {
  if (!id) return undefined;
  return byId.get(id as CareerDomainId);
}

export function isCareerDomainId(value: unknown): value is CareerDomainId {
  return typeof value === "string" && byId.has(value as CareerDomainId);
}
