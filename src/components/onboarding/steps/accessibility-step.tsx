"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";
import { AccessibilityNeed } from "@/lib/onboarding/types";

const OPTIONS: { id: AccessibilityNeed; label: string }[] = [
  { id: "wheelchair-ecv", label: "Wheelchair or ECV user in our party" },
  { id: "sensory-sensitivity", label: "Sensory sensitivities (noise, crowds, bright lights)" },
  { id: "service-animal", label: "Traveling with a service animal" },
  { id: "cognitive-developmental", label: "Cognitive or developmental accommodation needs" },
  { id: "other", label: "Other mobility or medical accommodation" },
];

export function AccessibilityStep() {
  const { profile, toggleAccessibilityNeed, setAccessibilityNotes } = useOnboardingStore();
  return (
    <StepShell
      title="Does anyone in your party need accommodations?"
      subtitle="This helps us route around what won't work, not just around what you'd prefer. Skip this if nothing applies — nothing here is required."
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {OPTIONS.map((option) => {
            const checked = profile.accessibilityNeeds.includes(option.id);
            return (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                  checked ? "border-primary bg-primary/10 shadow-sm shadow-primary/10" : "border-border bg-card"
                }`}
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={() => toggleAccessibilityNeed(option.id)}
                />
                <Label className="cursor-pointer">{option.label}</Label>
              </label>
            );
          })}
        </div>
        <div className="space-y-2">
          <Label htmlFor="accessibility-notes">Anything else that would help us plan?</Label>
          <Input
            id="accessibility-notes"
            placeholder="Optional — as much or as little detail as you'd like to share"
            value={profile.accessibilityNotes}
            onChange={(e) => setAccessibilityNotes(e.target.value)}
          />
        </div>
      </div>
    </StepShell>
  );
}
