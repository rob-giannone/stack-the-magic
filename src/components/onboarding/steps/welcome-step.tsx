import { StepShell } from "../step-shell";

export function WelcomeStep() {
  return (
    <StepShell
      title="Let's plan your magic."
      subtitle="Answer a few quick questions so we can build a park plan tailored to your group. Takes about 2 minutes."
    >
      <ul className="space-y-3 text-sm text-muted-foreground">
        <li>• Who&apos;s coming, and any little ones in the group</li>
        <li>• How much thrill you&apos;re after</li>
        <li>• Favorite characters and dietary needs</li>
        <li>• Budget and pace, so we don&apos;t overbook your days</li>
      </ul>
    </StepShell>
  );
}
