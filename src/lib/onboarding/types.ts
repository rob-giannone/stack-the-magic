export type ThrillLevel = 1 | 2 | 3 | 4 | 5;

export type CharacterPreference =
  | "princesses"
  | "starwars"
  | "marvel"
  | "pixar"
  | "classic-mickey"
  | "winnie-the-pooh";

export type DietaryRestriction =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "nut-allergy"
  | "dairy-free"
  | "other";

export type BudgetTier = "value" | "moderate" | "deluxe" | "no-limit";

export type Pace = "chill" | "balanced" | "maximizer";

export type TransportTolerance = "bus-is-fine" | "minimize-bus" | "avoid-bus" | "unsure";

export interface Kid {
  id: string;
  age: number;
}

export interface OnboardingProfile {
  adults: number;
  kids: Kid[];
  thrillLevel: ThrillLevel;
  characterPreferences: CharacterPreference[];
  dietaryRestrictions: DietaryRestriction[];
  dietaryNotes: string;
  budgetTier: BudgetTier | null;
  pace: Pace | null;
  transportTolerance: TransportTolerance | null;
}

export const DEFAULT_PROFILE: OnboardingProfile = {
  adults: 2,
  kids: [],
  thrillLevel: 3,
  characterPreferences: [],
  dietaryRestrictions: [],
  dietaryNotes: "",
  budgetTier: null,
  pace: null,
  transportTolerance: null,
};
