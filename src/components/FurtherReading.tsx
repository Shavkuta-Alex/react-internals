import { Badge } from "@/components/ui/badge";

interface FurtherReadingLink {
  href: string;
  title: string;
  type: string;
  note: string;
}

export function FurtherReading({ links }: { links: FurtherReadingLink[] }) {
  return (
    <div className="mt-8 pt-5 border-t border-dashed border-border">
      <div className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-[var(--fg-faint)] mb-2.5 font-medium">
        Further Reading
      </div>
      <ul className="list-none">
        {links.map((link, i) => (
          <li key={i} className="py-1.5 text-[0.84rem] leading-relaxed flex gap-2">
            <span className="text-[var(--fg-faint)] shrink-0 font-mono text-[0.75rem] leading-[1.75]">
              →
            </span>
            <span>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>{" "}
              <Badge
                variant="outline"
                className="font-mono text-[0.62rem] text-[var(--fg-faint)] bg-[var(--code-bg)] border-[var(--code-border)] rounded-sm px-1.5 py-px align-[1px] whitespace-nowrap ml-1"
              >
                {link.type}
              </Badge>{" "}
              <span className="text-muted-foreground text-[0.8rem]">
                {link.note}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
