"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";
import { DietaryRestriction } from "@/lib/onboarding/types";

const OPTIONS: { id: DietaryRestriction; label: string }[] = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten-free" },
  { id: "nut-allergy", label: "Nut allergy" },
  { id: "dairy-free", label: "Dairy-free" },
  { id: "other", label: "Other" },
];

export function DietaryStep() {
  const { profile, toggleDietary, setDietaryNotes } = useOnboardingStore();
  return (
    <StepShell
      title="Any dietary restrictions?"
      subtitle="We'll flag dining options and filter out anything risky."
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {OPTIONS.map((option) => {
            const checked = profile.dietaryRestrictions.includes(option.id);
            return (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                  checked ? "border-primary bg-primary/5" : "border-border bg-card"
                }`}
              >
                <Checkbox checked={checked} onCheckedChange={() => toggleDietary(option.id)} />
                <Label className="cursor-pointer">{option.label}</Label>
              </label>
            );
          })}
        </div>
        <div className="space-y-2">
          <Label htmlFor="dietary-notes">Anything else we should know?</Label>
          <Input
            id="dietary-notes"
            placeholder="e.g. severe shellfish allergy, kosher, etc."
            value={profile.dietaryNotes}
            onChange={(e) => setDietaryNotes(e.target.value)}
          />
        </div>
      </div>
    </StepShell>
  );
}
