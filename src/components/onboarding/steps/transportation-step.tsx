"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";
import { TransportTolerance } from "@/lib/onboarding/types";

const OPTIONS: { id: TransportTolerance; label: string; description: string }[] = [
  {
    id: "bus-is-fine",
    label: "Buses are fine",
    description: "We don't mind waiting — resort savings matter more to us than commute speed.",
  },
  {
    id: "minimize-bus",
    label: "Minimize bus time",
    description:
      "A little bus riding is okay, but we'd rather stay somewhere with monorail, Skyliner, or boat access when the budget allows.",
  },
  {
    id: "avoid-bus",
    label: "Avoid buses",
    description:
      "We'd rather pay more to stay monorail-, Skyliner-, or water taxi-connected and skip buses almost entirely.",
  },
  {
    id: "unsure",
    label: "Not sure yet",
    description: "We haven't done Disney transportation before — help us decide as we plan.",
  },
];

export function TransportationStep() {
  const { profile, setTransportTolerance } = useOnboardingStore();
  return (
    <StepShell
      title="How do you feel about riding the bus?"
      subtitle="Resort transportation has a bigger effect on your trip than most people expect."
    >
      <div className="space-y-3 rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Worth knowing before you choose:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Buses are usually the slowest way around Disney — traffic, multiple resort stops, and
            20+ minute waits between pickups are common, especially right after park close.
          </li>
          <li>
            Boarding is tighter than the monorail, Skyliner, or water taxis: strollers have to be
            folded and stowed, which slows everyone down and can be a squeeze with a double
            stroller and a tired toddler in tow.
          </li>
          <li>
            A round-trip bus commute can easily eat 30–45+ minutes that could&apos;ve gone toward
            rides, dining, or just resting — time that adds up fast over a multi-day trip.
          </li>
          <li>
            Monorail, Skyliner, and water taxi routes run more frequently, board faster, and skip
            road traffic entirely, so they tend to hand back more usable park time.
          </li>
        </ul>
      </div>
      <RadioGroup
        value={profile.transportTolerance ?? ""}
        onValueChange={(value) => setTransportTolerance(value as TransportTolerance)}
        className="gap-3"
      >
        {OPTIONS.map((option) => (
          <label
            key={option.id}
            className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
              profile.transportTolerance === option.id
                ? "border-primary bg-primary/5"
                : "border-border bg-card"
            }`}
          >
            <RadioGroupItem value={option.id} className="mt-1" />
            <div>
              <p className="font-medium">{option.label}</p>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </div>
          </label>
        ))}
      </RadioGroup>
    </StepShell>
  );
}
