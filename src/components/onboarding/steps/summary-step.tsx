"use client";

import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StepShell } from "../step-shell";
import { useOnboardingStore } from "@/lib/onboarding/store";

const CHARACTER_LABELS: Record<string, string> = {
  princesses: "Disney Princesses",
  starwars: "Star Wars",
  marvel: "Marvel",
  pixar: "Pixar",
  "classic-mickey": "Classic Mickey & Friends",
  "winnie-the-pooh": "Winnie the Pooh",
};

const DIETARY_LABELS: Record<string, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  "gluten-free": "Gluten-free",
  "nut-allergy": "Nut allergy",
  "dairy-free": "Dairy-free",
  other: "Other",
};

const TRANSPORT_LABELS: Record<string, string> = {
  "bus-is-fine": "Buses are fine",
  "minimize-bus": "Minimize bus time",
  "avoid-bus": "Avoid buses",
  unsure: "Not sure yet",
};

const VISIT_HISTORY_LABELS: Record<string, string> = {
  "first-time": "First time",
  "a-few-times": "Been a few times",
  veteran: "Veteran",
};

const ACCESSIBILITY_LABELS: Record<string, string> = {
  "wheelchair-ecv": "Wheelchair / ECV",
  "sensory-sensitivity": "Sensory sensitivities",
  "service-animal": "Service animal",
  "cognitive-developmental": "Cognitive / developmental",
  other: "Other accommodation",
};

export function SummaryStep() {
  const { profile, reset } = useOnboardingStore();

  return (
    <StepShell
      title="Here's your travel profile"
      subtitle="This is what we'll use to build your park plan. (Saving trips is coming soon.)"
    >
      <div className="space-y-4 rounded-lg border bg-card p-6">
        <Row label="Visited before?">
          {profile.visitHistory ? VISIT_HISTORY_LABELS[profile.visitHistory] : "Not set"}
        </Row>
        <Separator />
        <Row label="Party">
          {profile.adults} adult{profile.adults === 1 ? "" : "s"}
          {profile.kids.length > 0 &&
            `, ${profile.kids.length} kid${profile.kids.length === 1 ? "" : "s"} (ages ${profile.kids
              .map((kid) => kid.age)
              .join(", ")})`}
        </Row>
        <Separator />
        <Row label="Accessibility">
          {profile.accessibilityNeeds.length === 0 && !profile.accessibilityNotes ? (
            "None specified"
          ) : (
            <div className="flex flex-wrap gap-2">
              {profile.accessibilityNeeds.map((need) => (
                <Badge key={need} variant="secondary">
                  {ACCESSIBILITY_LABELS[need]}
                </Badge>
              ))}
              {profile.accessibilityNotes && (
                <Badge variant="outline">{profile.accessibilityNotes}</Badge>
              )}
            </div>
          )}
        </Row>
        <Separator />
        <Row label="Thrill level">{profile.thrillLevel} / 5</Row>
        <Separator />
        <Row label="Characters">
          {profile.characterPreferences.length === 0 ? (
            "No preference"
          ) : (
            <div className="flex flex-wrap gap-2">
              {profile.characterPreferences.map((c) => (
                <Badge key={c} variant="secondary">
                  {CHARACTER_LABELS[c]}
                </Badge>
              ))}
            </div>
          )}
        </Row>
        <Separator />
        <Row label="Dietary">
          {profile.dietaryRestrictions.length === 0 && !profile.dietaryNotes ? (
            "None"
          ) : (
            <div className="flex flex-wrap gap-2">
              {profile.dietaryRestrictions.map((d) => (
                <Badge key={d} variant="secondary">
                  {DIETARY_LABELS[d]}
                </Badge>
              ))}
              {profile.dietaryNotes && <Badge variant="outline">{profile.dietaryNotes}</Badge>}
            </div>
          )}
        </Row>
        <Separator />
        <Row label="Budget">{profile.budgetTier ?? "Not set"}</Row>
        <Separator />
        <Row label="Pace">{profile.pace ?? "Not set"}</Row>
        <Separator />
        <Row label="Transportation">
          {profile.transportTolerance ? TRANSPORT_LABELS[profile.transportTolerance] : "Not set"}
        </Row>
      </div>
      <Button variant="outline" onClick={reset}>
        Start over
      </Button>
    </StepShell>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
      <span className="text-sm font-medium text-muted-foreground sm:w-32">{label}</span>
      <div className="flex-1 text-sm">{children}</div>
    </div>
  );
}
