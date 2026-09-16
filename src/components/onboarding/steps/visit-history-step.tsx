"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";
import { VisitHistory } from "@/lib/onboarding/types";

const OPTIONS: { id: VisitHistory; label: string; description: string }[] = [
  {
    id: "first-time",
    label: "First time",
    description: "This is our first Walt Disney World trip — walk us through the basics.",
  },
  {
    id: "a-few-times",
    label: "Been a few times",
    description: "We know the basics, but we're not experts. A bit of guidance still helps.",
  },
  {
    id: "veteran",
    label: "Veteran",
    description: "We've done this many times — skip the basics and get to the good stuff.",
  },
];

export function VisitHistoryStep() {
  const { profile, setVisitHistory } = useOnboardingStore();
  return (
    <StepShell
      title="How many times have you visited Walt Disney World?"
      subtitle="This shapes how much explanation you get and whether we lean toward classics or hidden gems."
    >
      <RadioGroup
        value={profile.visitHistory ?? ""}
        onValueChange={(value) => setVisitHistory(value as VisitHistory)}
        className="gap-3"
      >
        {OPTIONS.map((option) => (
          <label
            key={option.id}
            className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
              profile.visitHistory === option.id
                ? "border-primary bg-primary/10 shadow-sm shadow-primary/10"
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
