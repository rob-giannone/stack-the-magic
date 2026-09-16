"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NewTripDialog } from "./new-trip-dialog";
import { TripSelector } from "./trip-selector";

export function TripTopBar() {
  const [justSaved, setJustSaved] = useState(false);

  const handleSaveClick = () => {
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 2000);
  };

  return (
    <header className="flex flex-wrap items-center gap-3 border-b bg-background px-4 py-4 sm:px-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        ← Back to Home
      </Link>
      <span className="h-4 w-px bg-border" />
      <span className="text-lg font-semibold text-foreground">Stack the Magic</span>

      <div className="ml-auto flex flex-wrap items-center gap-2">
        <TripSelector />
        <NewTripDialog />
        <Button variant="outline" size="sm" onClick={handleSaveClick}>
          {justSaved ? "Saved ✓" : "Save my trips"}
        </Button>
      </div>
    </header>
  );
}
