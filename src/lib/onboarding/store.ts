import { useTripsStore } from "@/lib/trips/store";
import { Trip } from "@/lib/trips/types";
import { TOTAL_STEPS } from "./steps";
import {
  AccessibilityNeed,
  ArrivalMethod,
  BudgetTier,
  CharacterPreference,
  DEFAULT_PROFILE,
  DietaryRestriction,
  DiningPreference,
  OnboardingProfile,
  Pace,
  ThrillLevel,
  TransportTolerance,
  VisitHistory,
} from "./types";

/**
 * Thin adapter over the active trip's profile/step. Every onboarding step
 * component reads and writes through this hook, so the multi-trip data
 * model underneath (src/lib/trips/store.ts) can change without touching
 * any step component.
 */
export function useOnboardingStore() {
  const trips = useTripsStore((state) => state.trips);
  const activeTripId = useTripsStore((state) => state.activeTripId);
  const updateActiveTrip = useTripsStore((state) => state.updateActiveTrip);

  const activeTrip = trips.find((trip) => trip.id === activeTripId);
  const profile = activeTrip?.profile ?? DEFAULT_PROFILE;
  const step = activeTrip?.step ?? 0;

  const updateProfile = (updater: (profile: OnboardingProfile) => OnboardingProfile) =>
    updateActiveTrip((trip: Trip) => ({ ...trip, profile: updater(trip.profile) }));

  return {
    step,
    profile,

    next: () =>
      updateActiveTrip((trip) => ({ ...trip, step: Math.min(trip.step + 1, TOTAL_STEPS - 1) })),
    back: () => updateActiveTrip((trip) => ({ ...trip, step: Math.max(trip.step - 1, 0) })),
    goTo: (step: number) =>
      updateActiveTrip((trip) => ({
        ...trip,
        step: Math.max(0, Math.min(step, TOTAL_STEPS - 1)),
      })),
    reset: () => updateActiveTrip((trip) => ({ ...trip, step: 0, profile: DEFAULT_PROFILE })),

    setVisitHistory: (visitHistory: VisitHistory) => updateProfile((p) => ({ ...p, visitHistory })),

    setAdults: (adults: number) => updateProfile((p) => ({ ...p, adults })),

    addKid: () =>
      updateProfile((p) => ({
        ...p,
        kids: [...p.kids, { id: crypto.randomUUID(), age: 5 }],
      })),

    removeKid: (id: string) =>
      updateProfile((p) => ({ ...p, kids: p.kids.filter((kid) => kid.id !== id) })),

    updateKidAge: (id: string, age: number) =>
      updateProfile((p) => ({
        ...p,
        kids: p.kids.map((kid) => (kid.id === id ? { ...kid, age } : kid)),
      })),

    setTripStartDate: (tripStartDate: string) => updateProfile((p) => ({ ...p, tripStartDate })),

    setTripEndDate: (tripEndDate: string) => updateProfile((p) => ({ ...p, tripEndDate })),

    setParkDays: (parkDays: number) => updateProfile((p) => ({ ...p, parkDays })),

    setParkHopper: (parkHopper: boolean) => updateProfile((p) => ({ ...p, parkHopper })),

    setOnProperty: (onProperty: boolean) => updateProfile((p) => ({ ...p, onProperty })),

    setHotelName: (hotelName: string) => updateProfile((p) => ({ ...p, hotelName })),

    setArrivalMethod: (arrivalMethod: ArrivalMethod) =>
      updateProfile((p) => ({ ...p, arrivalMethod })),

    setFlyingFromAirportCode: (flyingFromAirportCode: string) =>
      updateProfile((p) => ({ ...p, flyingFromAirportCode })),

    toggleAccessibilityNeed: (need: AccessibilityNeed) =>
      updateProfile((p) => {
        const current = p.accessibilityNeeds;
        const accessibilityNeeds = current.includes(need)
          ? current.filter((n) => n !== need)
          : [...current, need];
        return { ...p, accessibilityNeeds };
      }),

    setAccessibilityNotes: (accessibilityNotes: string) =>
      updateProfile((p) => ({ ...p, accessibilityNotes })),

    setThrillLevel: (thrillLevel: ThrillLevel) => updateProfile((p) => ({ ...p, thrillLevel })),

    toggleCharacter: (preference: CharacterPreference) =>
      updateProfile((p) => {
        const current = p.characterPreferences;
        const characterPreferences = current.includes(preference)
          ? current.filter((c) => c !== preference)
          : [...current, preference];
        return { ...p, characterPreferences };
      }),

    setFavoriteExperiences: (favoriteExperiences: string) =>
      updateProfile((p) => ({ ...p, favoriteExperiences })),

    toggleDietary: (restriction: DietaryRestriction) =>
      updateProfile((p) => {
        const current = p.dietaryRestrictions;
        const dietaryRestrictions = current.includes(restriction)
          ? current.filter((d) => d !== restriction)
          : [...current, restriction];
        return { ...p, dietaryRestrictions };
      }),

    setDietaryNotes: (dietaryNotes: string) => updateProfile((p) => ({ ...p, dietaryNotes })),

    setDiningPreference: (diningPreference: DiningPreference) =>
      updateProfile((p) => ({ ...p, diningPreference })),

    setBudgetTier: (budgetTier: BudgetTier) => updateProfile((p) => ({ ...p, budgetTier })),

    setPace: (pace: Pace) => updateProfile((p) => ({ ...p, pace })),

    setTransportTolerance: (transportTolerance: TransportTolerance) =>
      updateProfile((p) => ({ ...p, transportTolerance })),
  };
}
