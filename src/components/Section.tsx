import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Separator } from "@/components/ui/separator";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, number, title, children }: SectionProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={`pt-14 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <h2 className="font-sans font-bold text-[1.5rem] -tracking-tight mb-1 leading-tight flex items-baseline gap-2.5">
        <span className="font-mono text-[0.72rem] text-primary font-medium shrink-0 relative -top-px">
          {number}
        </span>
        {title}
        <Separator className="flex-1 ml-3 relative -top-0.5" />
      </h2>
      {children}
    </section>
  );
}
