import { DEFAULT_PROFILE, OnboardingProfile } from "@/lib/onboarding/types";

export interface Trip {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  step: number;
  profile: OnboardingProfile;
}

export function defaultTripName(): string {
  const date = new Date().toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  return `Disney Trip ${date}`;
}

export function createEmptyTrip(name: string, description = ""): Trip {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    name,
    description,
    createdAt: now,
    updatedAt: now,
    step: 0,
    profile: DEFAULT_PROFILE,
  };
}
