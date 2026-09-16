import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_PROFILE } from "@/lib/onboarding/types";
import { createEmptyTrip, defaultTripName, Trip } from "./types";

interface TripsState {
  trips: Trip[];
  activeTripId: string | null;
  createTrip: (name?: string, description?: string) => string;
  selectTrip: (id: string) => void;
  renameTrip: (id: string, name: string, description?: string) => void;
  deleteTrip: (id: string) => void;
  updateActiveTrip: (updater: (trip: Trip) => Trip) => void;
}

export const useTripsStore = create<TripsState>()(
  persist(
    (set) => ({
      trips: [],
      activeTripId: null,

      createTrip: (name, description = "") => {
        const trip = createEmptyTrip(name?.trim() || defaultTripName(), description);
        set((state) => ({ trips: [...state.trips, trip], activeTripId: trip.id }));
        return trip.id;
      },

      selectTrip: (id) => set(() => ({ activeTripId: id })),

      renameTrip: (id, name, description) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === id
              ? {
                  ...trip,
                  name,
                  description: description ?? trip.description,
                  updatedAt: new Date().toISOString(),
                }
              : trip
          ),
        })),

      deleteTrip: (id) =>
        set((state) => {
          const trips = state.trips.filter((trip) => trip.id !== id);
          const activeTripId =
            state.activeTripId === id ? trips[0]?.id ?? null : state.activeTripId;
          return { trips, activeTripId };
        }),

      updateActiveTrip: (updater) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === state.activeTripId
              ? { ...updater(trip), updatedAt: new Date().toISOString() }
              : trip
          ),
        })),
    }),
    {
      name: "stm-trips",
      merge: (persistedState, currentState) => {
        const persisted = (persistedState ?? {}) as Partial<TripsState>;
        return {
          ...currentState,
          ...persisted,
          trips: (persisted.trips ?? []).map((trip) => ({
            ...trip,
            profile: { ...DEFAULT_PROFILE, ...trip.profile },
          })),
        };
      },
    }
  )
);
