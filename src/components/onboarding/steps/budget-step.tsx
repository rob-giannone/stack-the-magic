"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";
import { BudgetTier } from "@/lib/onboarding/types";

const OPTIONS: { id: BudgetTier; label: string; description: string }[] = [
  { id: "value", label: "Value", description: "Value resorts, quick service, counting every dollar." },
  { id: "moderate", label: "Moderate", description: "Moderate resorts, mix of quick and table service." },
  {
    id: "deluxe",
    label: "Deluxe",
    description: "Deluxe resorts, table service dining, Lightning Lane Premier.",
  },
  {
    id: "no-limit",
    label: "Money's no object",
    description: "Whatever makes the trip best — cost isn't the constraint.",
  },
];

export function BudgetStep() {
  const { profile, setBudgetTier } = useOnboardingStore();
  return (
    <StepShell
      title="What's your budget tier?"
      subtitle="This shapes resort, dining, and Lightning Lane suggestions."
    >
      <RadioGroup
        value={profile.budgetTier ?? ""}
        onValueChange={(value) => setBudgetTier(value as BudgetTier)}
        className="gap-3"
      >
        {OPTIONS.map((option) => (
          <label
            key={option.id}
            className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
              profile.budgetTier === option.id ? "border-primary bg-primary/5" : "border-border bg-card"
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
