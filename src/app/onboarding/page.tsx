"use client";

import { useEffect } from "react";
import { TripWorkspace } from "@/components/trips/trip-workspace";
import { useTripsStore } from "@/lib/trips/store";

export default function OnboardingPage() {
  useEffect(() => {
    const state = useTripsStore.getState();
    if (state.trips.length === 0) {
      state.createTrip("My Disney Trip");
    } else if (!state.activeTripId) {
      state.selectTrip(state.trips[0].id);
    }
  }, []);

  return <TripWorkspace />;
}
