"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useOnboardingStore } from "@/lib/onboarding/store";
import { TOTAL_STEPS } from "@/lib/onboarding/steps";
import { WelcomeStep } from "./steps/welcome-step";
import { VisitHistoryStep } from "./steps/visit-history-step";
import { PartyStep } from "./steps/party-step";
import { AccessibilityStep } from "./steps/accessibility-step";
import { ThrillStep } from "./steps/thrill-step";
import { CharactersStep } from "./steps/characters-step";
import { DietaryStep } from "./steps/dietary-step";
import { BudgetStep } from "./steps/budget-step";
import { PaceStep } from "./steps/pace-step";
import { TransportationStep } from "./steps/transportation-step";
import { SummaryStep } from "./steps/summary-step";

const STEP_COMPONENTS = [
  WelcomeStep,
  VisitHistoryStep,
  PartyStep,
  AccessibilityStep,
  ThrillStep,
  CharactersStep,
  DietaryStep,
  BudgetStep,
  PaceStep,
  TransportationStep,
  SummaryStep,
];

const VISIT_HISTORY_STEP_INDEX = 1;
const BUDGET_STEP_INDEX = 7;
const PACE_STEP_INDEX = 8;
const TRANSPORTATION_STEP_INDEX = 9;

export function OnboardingWizard() {
  const { step, next, back, profile } = useOnboardingStore();
  const StepComponent = STEP_COMPONENTS[step];
  const isFirst = step === 0;
  const isLast = step === TOTAL_STEPS - 1;

  const canContinue =
    (step !== VISIT_HISTORY_STEP_INDEX || profile.visitHistory !== null) &&
    (step !== BUDGET_STEP_INDEX || profile.budgetTier !== null) &&
    (step !== PACE_STEP_INDEX || profile.pace !== null) &&
    (step !== TRANSPORTATION_STEP_INDEX || profile.transportTolerance !== null);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-12">
      <div className="space-y-2">
        <Progress value={((step + 1) / TOTAL_STEPS) * 100} />
        <p className="text-xs text-muted-foreground">
          Step {step + 1} of {TOTAL_STEPS}
        </p>
      </div>

      <StepComponent />

      <div className="flex justify-between">
        <Button variant="ghost" onClick={back} disabled={isFirst}>
          Back
        </Button>
        {!isLast && (
          <Button onClick={next} disabled={!canContinue}>
            Continue
          </Button>
        )}
      </div>
    </div>
  );
}
