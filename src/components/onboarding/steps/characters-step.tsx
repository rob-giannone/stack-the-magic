"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";
import { CharacterPreference } from "@/lib/onboarding/types";

const OPTIONS: { id: CharacterPreference; label: string }[] = [
  { id: "princesses", label: "Disney Princesses" },
  { id: "starwars", label: "Star Wars" },
  { id: "marvel", label: "Marvel" },
  { id: "pixar", label: "Pixar" },
  { id: "classic-mickey", label: "Classic Mickey & Friends" },
  { id: "winnie-the-pooh", label: "Winnie the Pooh" },
];

export function CharactersStep() {
  const { profile, toggleCharacter, setFavoriteExperiences } = useOnboardingStore();
  return (
    <StepShell
      title="Any favorite characters or lands?"
      subtitle="Pick as many as apply — we'll prioritize meet-and-greets and themed lands."
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {OPTIONS.map((option) => {
            const checked = profile.characterPreferences.includes(option.id);
            return (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                  checked ? "border-primary bg-primary/5" : "border-border bg-card"
                }`}
              >
                <Checkbox checked={checked} onCheckedChange={() => toggleCharacter(option.id)} />
                <Label className="cursor-pointer">{option.label}</Label>
              </label>
            );
          })}
        </div>
        <div className="space-y-2">
          <Label htmlFor="favorite-experiences">Anything else you&apos;re excited about?</Label>
          <Input
            id="favorite-experiences"
            placeholder="fireworks, thrill rides, a specific show..."
            value={profile.favoriteExperiences}
            onChange={(e) => setFavoriteExperiences(e.target.value)}
          />
        </div>
      </div>
    </StepShell>
  );
}
