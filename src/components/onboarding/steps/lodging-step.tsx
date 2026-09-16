"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";
import { ArrivalMethod } from "@/lib/onboarding/types";

const ARRIVAL_OPTIONS: { id: ArrivalMethod; label: string }[] = [
  { id: "flying", label: "Flying in" },
  { id: "driving", label: "Driving" },
  { id: "other", label: "Other" },
];

export function LodgingStep() {
  const { profile, setOnProperty, setHotelName, setArrivalMethod, setFlyingFromAirportCode } =
    useOnboardingStore();

  return (
    <StepShell
      title="Where are you staying, and how are you getting there?"
      subtitle="This shapes transportation and parking guidance."
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label className="text-base">Staying on Disney property?</Label>
          <RadioGroup
            value={profile.onProperty === null ? "" : profile.onProperty ? "yes" : "no"}
            onValueChange={(value) => setOnProperty(value === "yes")}
            className="flex flex-wrap gap-3"
          >
            <label
              className={`flex flex-1 cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                profile.onProperty === true
                  ? "border-primary bg-primary/10 shadow-sm shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              <RadioGroupItem value="yes" />
              <span>Yes, a Disney resort</span>
            </label>
            <label
              className={`flex flex-1 cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                profile.onProperty === false
                  ? "border-primary bg-primary/10 shadow-sm shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              <RadioGroupItem value="no" />
              <span>No, off-property</span>
            </label>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hotel-name">Hotel</Label>
          <Input
            id="hotel-name"
            placeholder="Grand Floridian, Pop Century, a nearby Airbnb, etc."
            value={profile.hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-base">How are you getting to Orlando?</Label>
          <RadioGroup
            value={profile.arrivalMethod ?? ""}
            onValueChange={(value) => setArrivalMethod(value as ArrivalMethod)}
            className="flex flex-wrap gap-3"
          >
            {ARRIVAL_OPTIONS.map((option) => (
              <label
                key={option.id}
                className={`flex flex-1 cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                  profile.arrivalMethod === option.id
                    ? "border-primary bg-primary/10 shadow-sm shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                <RadioGroupItem value={option.id} />
                <span>{option.label}</span>
              </label>
            ))}
          </RadioGroup>
        </div>

        {profile.arrivalMethod === "flying" && (
          <div className="space-y-2">
            <Label htmlFor="flying-from">Flying from (airport code)</Label>
            <Input
              id="flying-from"
              placeholder="JFK, LAX, ORD..."
              maxLength={4}
              className="w-32 uppercase"
              value={profile.flyingFromAirportCode}
              onChange={(e) => setFlyingFromAirportCode(e.target.value.toUpperCase())}
            />
            <p className="text-sm text-muted-foreground">
              We&apos;ll help you compare Mears Connect, rideshare, and rental car options from
              MCO.
            </p>
          </div>
        )}
      </div>
    </StepShell>
  );
}
