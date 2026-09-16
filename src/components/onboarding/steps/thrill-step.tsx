"use client";

import { Slider } from "@/components/ui/slider";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";
import { ThrillLevel } from "@/lib/onboarding/types";

const LABELS: Record<ThrillLevel, string> = {
  1: "Kiddie rides only",
  2: "Mild — nothing too fast",
  3: "Balanced mix",
  4: "Bring on the coasters",
  5: "Maximum thrill, every time",
};

export function ThrillStep() {
  const { profile, setThrillLevel } = useOnboardingStore();
  return (
    <StepShell
      title="How much thrill are you after?"
      subtitle="We'll weight ride recommendations toward this level for the whole party."
    >
      <div className="space-y-6 rounded-lg border bg-card shadow-sm p-6">
        <Slider
          min={1}
          max={5}
          step={1}
          value={[profile.thrillLevel]}
          onValueChange={(value) =>
            setThrillLevel((Array.isArray(value) ? value[0] : value) as ThrillLevel)
          }
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Kiddie</span>
          <span>Thrill-seeker</span>
        </div>
        <p className="text-center text-lg font-medium text-primary">
          {LABELS[profile.thrillLevel]}
        </p>
      </div>
    </StepShell>
  );
}
