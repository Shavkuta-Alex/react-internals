export function Header() {
  return (
    <header className="max-w-[740px] mx-auto px-8 pt-24 pb-12 border-b border-border max-sm:px-5 max-sm:pt-16 max-sm:pb-8">
      <div className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-primary font-medium mb-5">
        Technical Reference
      </div>
      <h1 className="font-sans font-bold text-[2.6rem] leading-[1.18] -tracking-wide mb-4 max-sm:text-[2rem]">
        React Internals
      </h1>
      <p className="font-[var(--font-content)] text-[0.92rem] text-muted-foreground leading-relaxed max-w-[540px]">
        From JSX to pixels — Fiber architecture, reconciliation, hooks,
        concurrent rendering, and every layer between your code and the DOM.
      </p>
    </header>
  );
}
