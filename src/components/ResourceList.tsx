import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Resource {
  href: string;
  title: string;
  description: ReactNode;
}

export function ResourceList({ resources }: { resources: Resource[] }) {
  return (
    <div className="my-3">
      {resources.map((r, i) => (
        <Card
          key={i}
          className="shadow-none py-0 border-x-0 border-t-0 rounded-none last:border-b-0"
        >
          <CardContent className="px-0 py-2.5 text-[0.88rem]">
            <div className="font-[var(--font-content)] font-medium text-[0.88rem]">
              <a href={r.href} target="_blank" rel="noopener noreferrer">
                {r.title}
              </a>
            </div>
            <div className="text-muted-foreground text-[0.82rem] mt-0.5">
              {r.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
