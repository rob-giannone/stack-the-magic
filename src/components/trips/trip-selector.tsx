"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTripsStore } from "@/lib/trips/store";

export function TripSelector() {
  const trips = useTripsStore((state) => state.trips);
  const activeTripId = useTripsStore((state) => state.activeTripId);
  const selectTrip = useTripsStore((state) => state.selectTrip);

  if (trips.length === 0) {
    return null;
  }

  return (
    <Select value={activeTripId ?? ""} onValueChange={(value) => selectTrip(value as string)}>
      <SelectTrigger className="w-[160px] sm:w-[220px]">
        <SelectValue placeholder="Select a trip">
          {(value: string | null) => trips.find((trip) => trip.id === value)?.name ?? "Select a trip"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {trips.map((trip) => (
          <SelectItem key={trip.id} value={trip.id}>
            {trip.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
