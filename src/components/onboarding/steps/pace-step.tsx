"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";
import { Pace } from "@/lib/onboarding/types";

const OPTIONS: { id: Pace; label: string; description: string }[] = [
  { id: "chill", label: "Chill", description: "A couple of must-dos a day, lots of breaks and pool time." },
  {
    id: "balanced",
    label: "Balanced",
    description: "A solid plan each day without rope-drop-to-close grinding.",
  },
  { id: "maximizer", label: "Maximizer", description: "Rope drop to close, every minute mapped out." },
];

export function PaceStep() {
  const { profile, setPace } = useOnboardingStore();
  return (
    <StepShell title="What pace fits your group?" subtitle="We'll size each day's itinerary to match.">
      <RadioGroup
        value={profile.pace ?? ""}
        onValueChange={(value) => setPace(value as Pace)}
        className="gap-3"
      >
        {OPTIONS.map((option) => (
          <label
            key={option.id}
            className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
              profile.pace === option.id ? "border-primary bg-primary/5" : "border-border bg-card"
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
