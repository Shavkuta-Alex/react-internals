import { Section } from "@/components/Section";
import { Callout } from "@/components/Callout";
import { FurtherReading } from "@/components/FurtherReading";

export function ContextInternalsSection() {
  return (
    <Section id="context" number="07" title="Context Internals">
      <p>
        When a Provider re-renders with a new value, React runs{" "}
        <code>propagateContextChange</code>: it walks the subtree, checks each
        Fiber's <code>dependencies</code> for this context, and marks matches
        with <code>ForceUpdate</code> — even through memoized ancestors.
      </p>

      <Callout>
        <p>
          <strong>Context is all-or-nothing.</strong> Any change to the value
          re-renders <em>every</em> consumer, regardless of which slice they
          read. There's no built-in selector. This is what libraries like Zustand
          and Jotai solve.
        </p>
      </Callout>

      <FurtherReading
        links={[
          {
            href: "https://jser.dev/2023-09-19-how-does-context-work/",
            title: "How Does Context Work Internally?",
            type: "deep dive",
            note: "— jser.dev on propagateContextChange, the dependency list, and forced updates",
          },
          {
            href: "https://blog.isquaredsoftware.com/2021/01/context-redux-differences/",
            title: "Context vs. Redux: Differences",
            type: "article",
            note: "— Mark Erikson on why Context isn't a state manager and when each is appropriate",
          },
          {
            href: "https://github.com/dai-shi/use-context-selector",
            title: "use-context-selector",
            type: "library",
            note: "— Daishi Kato's selector solution for Context; reveals the performance gap",
          },
          {
            href: "https://www.developerway.com/posts/react-context-performance",
            title: "React Context Performance Pitfalls",
            type: "article",
            note: "— Nadia Makarevich on splitting, memoizing, and composition patterns",
          },
        ]}
      />
    </Section>
  );
}
