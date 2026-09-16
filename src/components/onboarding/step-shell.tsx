import { Sparkles } from "lucide-react";
import { ReactNode } from "react";

interface StepShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function StepShell({ title, subtitle, children }: StepShellProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="size-5 shrink-0 text-accent" strokeWidth={2} />
          <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
        </div>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
