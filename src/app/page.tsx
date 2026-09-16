import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between px-6 py-5 sm:px-10">
        <span className="text-lg font-semibold text-foreground">Stack the Magic</span>
        <Button nativeButton={false} render={<Link href="/onboarding" />}>
          Start planning
        </Button>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Your virtual travel agent for Walt Disney World.
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Tell us who&apos;s coming, how fast you like to move, and what you care about.
            We&apos;ll build a park plan tailored to your group — rides, dining, and the
            little things veteran guests know to watch for.
          </p>
          <div className="flex justify-center">
            <Button size="lg" nativeButton={false} render={<Link href="/onboarding" />}>
              Start planning your trip
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
