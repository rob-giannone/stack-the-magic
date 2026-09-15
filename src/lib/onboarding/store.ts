import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  BudgetTier,
  CharacterPreference,
  DEFAULT_PROFILE,
  DietaryRestriction,
  Kid,
  OnboardingProfile,
  Pace,
  ThrillLevel,
  TransportTolerance,
} from "./types";
import { TOTAL_STEPS } from "./steps";

interface OnboardingState {
  step: number;
  profile: OnboardingProfile;
  next: () => void;
  back: () => void;
  goTo: (step: number) => void;
  reset: () => void;
  setAdults: (adults: number) => void;
  addKid: () => void;
  removeKid: (id: string) => void;
  updateKidAge: (id: string, age: number) => void;
  setThrillLevel: (level: ThrillLevel) => void;
  toggleCharacter: (preference: CharacterPreference) => void;
  toggleDietary: (restriction: DietaryRestriction) => void;
  setDietaryNotes: (notes: string) => void;
  setBudgetTier: (tier: BudgetTier) => void;
  setPace: (pace: Pace) => void;
  setTransportTolerance: (tolerance: TransportTolerance) => void;
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      step: 0,
      profile: DEFAULT_PROFILE,

      next: () =>
        set((state) => ({ step: Math.min(state.step + 1, TOTAL_STEPS - 1) })),
      back: () => set((state) => ({ step: Math.max(state.step - 1, 0) })),
      goTo: (step) =>
        set(() => ({ step: Math.max(0, Math.min(step, TOTAL_STEPS - 1)) })),
      reset: () => set(() => ({ step: 0, profile: DEFAULT_PROFILE })),

      setAdults: (adults) =>
        set((state) => ({ profile: { ...state.profile, adults } })),

      addKid: () =>
        set((state) => {
          const kid: Kid = { id: crypto.randomUUID(), age: 5 };
          return { profile: { ...state.profile, kids: [...state.profile.kids, kid] } };
        }),

      removeKid: (id) =>
        set((state) => ({
          profile: {
            ...state.profile,
            kids: state.profile.kids.filter((kid) => kid.id !== id),
          },
        })),

      updateKidAge: (id, age) =>
        set((state) => ({
          profile: {
            ...state.profile,
            kids: state.profile.kids.map((kid) =>
              kid.id === id ? { ...kid, age } : kid
            ),
          },
        })),

      setThrillLevel: (thrillLevel) =>
        set((state) => ({ profile: { ...state.profile, thrillLevel } })),

      toggleCharacter: (preference) =>
        set((state) => {
          const current = state.profile.characterPreferences;
          const characterPreferences = current.includes(preference)
            ? current.filter((c) => c !== preference)
            : [...current, preference];
          return { profile: { ...state.profile, characterPreferences } };
        }),

      toggleDietary: (restriction) =>
        set((state) => {
          const current = state.profile.dietaryRestrictions;
          const dietaryRestrictions = current.includes(restriction)
            ? current.filter((d) => d !== restriction)
            : [...current, restriction];
          return { profile: { ...state.profile, dietaryRestrictions } };
        }),

      setDietaryNotes: (dietaryNotes) =>
        set((state) => ({ profile: { ...state.profile, dietaryNotes } })),

      setBudgetTier: (budgetTier) =>
        set((state) => ({ profile: { ...state.profile, budgetTier } })),

      setPace: (pace) => set((state) => ({ profile: { ...state.profile, pace } })),

      setTransportTolerance: (transportTolerance) =>
        set((state) => ({ profile: { ...state.profile, transportTolerance } })),
    }),
    {
      name: "stm-onboarding-draft",
    }
  )
);
