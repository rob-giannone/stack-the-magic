"use client";

import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard";
import { TripProgressSidebar } from "./trip-progress-sidebar";
import { TripTopBar } from "./trip-top-bar";

export function TripWorkspace() {
  return (
    <div className="min-h-screen">
      <TripTopBar />
      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-xl border bg-card p-6 sm:p-8">
          <OnboardingWizard />
        </div>
        <aside>
          <TripProgressSidebar />
        </aside>
      </main>
    </div>
  );
}
