export const STEP_IDS = [
  "welcome",
  "visit-history",
  "party",
  "trip-dates",
  "lodging",
  "accessibility",
  "thrill",
  "characters",
  "dietary",
  "budget",
  "pace",
  "transportation",
  "summary",
] as const;

export type StepId = (typeof STEP_IDS)[number];

export const TOTAL_STEPS = STEP_IDS.length;

export const STEP_LABELS: Record<StepId, string> = {
  welcome: "Welcome",
  "visit-history": "Visit History",
  party: "Party",
  "trip-dates": "Trip Dates",
  lodging: "Lodging & Arrival",
  accessibility: "Accessibility",
  thrill: "Thrill Level",
  characters: "Characters",
  dietary: "Dietary",
  budget: "Budget",
  pace: "Pace",
  transportation: "Transportation",
  summary: "Summary",
};
