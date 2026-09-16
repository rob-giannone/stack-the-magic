"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTripsStore } from "@/lib/trips/store";
import { defaultTripName } from "@/lib/trips/types";

export function NewTripDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const createTrip = useTripsStore((state) => state.createTrip);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (next) {
      setName(defaultTripName());
    }
  };

  const handleCreate = () => {
    createTrip(name);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button size="sm">+ New Trip</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Trip</DialogTitle>
          <DialogDescription>
            Give this trip a name so you can find it later.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <Label htmlFor="new-trip-name">Trip Name</Label>
          <Input
            id="new-trip-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreate}>Create Trip</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
