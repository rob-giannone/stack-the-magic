"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";
import { DietaryRestriction, DiningPreference } from "@/lib/onboarding/types";

const OPTIONS: { id: DietaryRestriction; label: string }[] = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten-free" },
  { id: "nut-allergy", label: "Nut allergy" },
  { id: "dairy-free", label: "Dairy-free" },
  { id: "other", label: "Other" },
];

const DINING_PREFERENCE_OPTIONS: { id: DiningPreference; label: string }[] = [
  { id: "quick-service", label: "Mostly quick service" },
  { id: "table-service", label: "Mostly table service" },
  { id: "mix", label: "A mix of both" },
  { id: "no-preference", label: "No preference" },
];

export function DietaryStep() {
  const { profile, toggleDietary, setDietaryNotes, setDiningPreference } = useOnboardingStore();
  return (
    <StepShell
      title="Any dietary restrictions?"
      subtitle="We'll flag dining options and filter out anything risky."
    >
      <div className="space-y-6">
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
        <div className="space-y-3">
          <Label className="text-base">How do you like to eat on a park day?</Label>
          <RadioGroup
            value={profile.diningPreference ?? ""}
            onValueChange={(value) => setDiningPreference(value as DiningPreference)}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {DINING_PREFERENCE_OPTIONS.map((option) => (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                  profile.diningPreference === option.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <RadioGroupItem value={option.id} />
                <span>{option.label}</span>
              </label>
            ))}
          </RadioGroup>
        </div>
      </div>
    </StepShell>
  );
}
