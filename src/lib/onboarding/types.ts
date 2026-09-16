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

export type DiningPreference = "quick-service" | "table-service" | "mix" | "no-preference";

export type BudgetTier = "value" | "moderate" | "deluxe" | "no-limit";

export type Pace = "chill" | "balanced" | "maximizer";

export type TransportTolerance = "bus-is-fine" | "minimize-bus" | "avoid-bus" | "unsure";

export type VisitHistory = "first-time" | "a-few-times" | "veteran";

export type AccessibilityNeed =
  | "wheelchair-ecv"
  | "sensory-sensitivity"
  | "service-animal"
  | "cognitive-developmental"
  | "other";

export type ArrivalMethod = "flying" | "driving" | "other";

export interface Kid {
  id: string;
  age: number;
}

export interface OnboardingProfile {
  visitHistory: VisitHistory | null;
  adults: number;
  kids: Kid[];
  tripStartDate: string | null;
  tripEndDate: string | null;
  parkDays: number | null;
  parkHopper: boolean | null;
  onProperty: boolean | null;
  hotelName: string;
  arrivalMethod: ArrivalMethod | null;
  flyingFromAirportCode: string;
  accessibilityNeeds: AccessibilityNeed[];
  accessibilityNotes: string;
  thrillLevel: ThrillLevel;
  characterPreferences: CharacterPreference[];
  favoriteExperiences: string;
  dietaryRestrictions: DietaryRestriction[];
  dietaryNotes: string;
  diningPreference: DiningPreference | null;
  budgetTier: BudgetTier | null;
  pace: Pace | null;
  transportTolerance: TransportTolerance | null;
}

export const DEFAULT_PROFILE: OnboardingProfile = {
  visitHistory: null,
  adults: 2,
  kids: [],
  tripStartDate: null,
  tripEndDate: null,
  parkDays: 4,
  parkHopper: null,
  onProperty: null,
  hotelName: "",
  arrivalMethod: null,
  flyingFromAirportCode: "",
  accessibilityNeeds: [],
  accessibilityNotes: "",
  thrillLevel: 3,
  characterPreferences: [],
  favoriteExperiences: "",
  dietaryRestrictions: [],
  dietaryNotes: "",
  diningPreference: null,
  budgetTier: null,
  pace: null,
  transportTolerance: null,
};
