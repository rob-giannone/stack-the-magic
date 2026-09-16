"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";

export function TripDatesStep() {
  const { profile, setTripStartDate, setTripEndDate, setParkDays, setParkHopper } =
    useOnboardingStore();

  return (
    <StepShell
      title="When are you headed to Disney World?"
      subtitle="Dates shape crowd levels, weather, and what's running while you're there. A best guess is fine if you're not locked in yet."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="trip-start">Arrival</Label>
            <Input
              id="trip-start"
              type="date"
              value={profile.tripStartDate ?? ""}
              onChange={(e) => setTripStartDate(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="trip-end">Departure</Label>
            <Input
              id="trip-end"
              type="date"
              value={profile.tripEndDate ?? ""}
              onChange={(e) => setTripEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="park-days">How many park days are you paying for?</Label>
          <Input
            id="park-days"
            type="number"
            min={1}
            max={14}
            value={profile.parkDays ?? ""}
            onChange={(e) => setParkDays(Number(e.target.value))}
            className="w-24"
          />
          <p className="text-sm text-muted-foreground">
            Doesn&apos;t have to match your trip length — a pool day or a Disney Springs day
            doesn&apos;t need a ticket.
          </p>
        </div>

        <div className="space-y-2">
          <Label className="text-base">Park Hopper?</Label>
          <RadioGroup
            value={profile.parkHopper === null ? "" : profile.parkHopper ? "yes" : "no"}
            onValueChange={(value) => setParkHopper(value === "yes")}
            className="flex flex-wrap gap-3"
          >
            <label
              className={`flex flex-1 cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                profile.parkHopper === true
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <RadioGroupItem value="yes" />
              <span>Yes, we want to hop parks</span>
            </label>
            <label
              className={`flex flex-1 cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                profile.parkHopper === false
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <RadioGroupItem value="no" />
              <span>No, one park a day</span>
            </label>
          </RadioGroup>
        </div>
      </div>
    </StepShell>
  );
}
