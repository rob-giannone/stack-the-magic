export const STEP_IDS = [
  "welcome",
  "party",
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
