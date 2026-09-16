"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";

export function PartyStep() {
  const { profile, setAdults, addKid, removeKid, updateKidAge } = useOnboardingStore();

  return (
    <StepShell
      title="Who's in your party?"
      subtitle="This helps us tailor ride heights, dining reservations, and stroller needs."
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between rounded-lg border bg-card shadow-sm p-4">
          <div>
            <Label className="text-base">Adults</Label>
            <p className="text-sm text-muted-foreground">13 and up</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setAdults(Math.max(1, profile.adults - 1))}
            >
              -
            </Button>
            <span className="w-6 text-center font-medium">{profile.adults}</span>
            <Button variant="outline" size="icon" onClick={() => setAdults(profile.adults + 1)}>
              +
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base">Kids</Label>
            <Button variant="outline" size="sm" onClick={addKid}>
              Add a kid
            </Button>
          </div>
          {profile.kids.length === 0 && (
            <p className="text-sm text-muted-foreground">No kids in this party yet.</p>
          )}
          <div className="space-y-2">
            {profile.kids.map((kid, index) => (
              <div key={kid.id} className="flex items-center gap-3 rounded-lg border bg-card shadow-sm p-3">
                <span className="w-14 text-sm text-muted-foreground">Kid {index + 1}</span>
                <Input
                  type="number"
                  min={0}
                  max={17}
                  value={kid.age}
                  onChange={(e) => updateKidAge(kid.id, Number(e.target.value))}
                  className="w-20"
                />
                <span className="text-sm text-muted-foreground">years old</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto"
                  onClick={() => removeKid(kid.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
          {profile.kids.some((kid) => kid.age <= 3) && (
            <p className="text-sm text-primary">
              We&apos;ll flag stroller-friendly routes and rentals for your littlest ones.
            </p>
          )}
        </div>
      </div>
    </StepShell>
  );
}
