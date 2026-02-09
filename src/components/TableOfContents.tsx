const tocItems = [
  { id: "pipeline", num: "01", title: "The Pipeline" },
  { id: "fiber", num: "02", title: "Fiber Architecture" },
  { id: "render", num: "03", title: "Render Phase" },
  { id: "commit", num: "04", title: "Commit Phase" },
  { id: "hooks", num: "05", title: "How Hooks Work" },
  { id: "concurrent", num: "06", title: "Concurrent Features" },
  { id: "context", num: "07", title: "Context Internals" },
  { id: "events", num: "08", title: "Event System" },
  { id: "rsc", num: "09", title: "Server Components" },
  { id: "compiler", num: "10", title: "React Compiler" },
  { id: "misconceptions", num: "11", title: "Misconceptions" },
  { id: "source", num: "12", title: "Source Map" },
  { id: "resources", num: "13", title: "Resources" },
];

export function TableOfContents() {
  return (
    <nav className="max-w-[740px] mx-auto px-8 py-10 border-b border-border max-sm:px-5 max-sm:py-8">
      <div className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-[var(--fg-faint)] mb-4 font-medium">
        Contents
      </div>
      <ol className="list-none columns-2 gap-8 max-sm:columns-1">
        {tocItems.map((item) => (
          <li key={item.id} className="break-inside-avoid mb-1.5">
            <a
              href={`#${item.id}`}
              className="font-[var(--font-content)] text-[0.82rem] text-muted-foreground no-underline hover:text-primary transition-colors inline-flex items-baseline gap-2"
            >
              <span className="num font-mono text-[0.7rem] text-[var(--fg-faint)] min-w-[1.4rem]">
                {item.num}
              </span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
