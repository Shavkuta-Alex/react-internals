import type { ReactNode } from "react";
import { Info, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CalloutProps {
  children: ReactNode;
  variant?: "accent" | "neutral";
}

export function Callout({ children, variant = "accent" }: CalloutProps) {
  return (
    <Alert
      className={`border-y-0 border-r-0 border-l-[3px] rounded-none rounded-r px-5 py-3.5 my-5 text-[0.9rem] ${
        variant === "accent"
          ? "border-l-primary bg-[var(--accent-dim)]"
          : "border-l-border bg-[var(--code-bg)]"
      } [&_p:last-child]:mb-0`}
    >
      {variant === "accent" ? (
        <Info className="size-4 text-primary" />
      ) : (
        <AlertTriangle className="size-4 text-muted-foreground" />
      )}
      <AlertDescription className="text-foreground [&_p:last-child]:mb-0">
        {children}
      </AlertDescription>
    </Alert>
  );
}
