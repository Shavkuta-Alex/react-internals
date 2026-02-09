import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MisconceptionProps {
  myth: string;
  reality: ReactNode;
}

export function Misconception({ myth, reality }: MisconceptionProps) {
  return (
    <Card className="shadow-none py-0 border-x-0 border-t-0 rounded-none last:border-b-0">
      <CardContent className="px-0 py-4">
        <div className="font-[var(--font-content)] font-semibold text-[0.88rem] mb-1">
          {myth}
        </div>
        <div className="text-[0.92rem] text-muted-foreground">{reality}</div>
      </CardContent>
    </Card>
  );
}
