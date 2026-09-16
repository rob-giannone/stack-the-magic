"use client";

import { useOnboardingStore } from "@/lib/onboarding/store";
import { STEP_IDS, STEP_LABELS, TOTAL_STEPS } from "@/lib/onboarding/steps";
import { cn } from "@/lib/utils";

export function TripProgressSidebar() {
  const { step, goTo } = useOnboardingStore();
  const percentComplete = Math.round(((step + 1) / TOTAL_STEPS) * 100);

  return (
    <div className="rounded-xl border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">Trip planning progress</span>
        <span className="text-xs text-muted-foreground">{percentComplete}% complete</span>
      </div>
      <ol className="space-y-1">
        {STEP_IDS.map((id, index) => {
          const isDone = index < step;
          const isCurrent = index === step;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => goTo(index)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
                  isCurrent
                    ? "bg-primary/10 font-medium text-foreground"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium",
                    isDone
                      ? "border-primary bg-primary text-primary-foreground"
                      : isCurrent
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground"
                  )}
                >
                  {isDone ? "✓" : index + 1}
                </span>
                {STEP_LABELS[id]}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
