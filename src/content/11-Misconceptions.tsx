import { Section } from "@/components/Section";
import { Misconception } from "@/components/Misconception";
import { FurtherReading } from "@/components/FurtherReading";

export function MisconceptionsSection() {
  return (
    <Section id="misconceptions" number="11" title="Misconceptions">
      <Misconception
        myth={`"Virtual DOM diffing is fast."`}
        reality="Not inherently. Diffing has cost. React's real win is batching DOM writes and avoiding layout-thrashing reads. Svelte and SolidJS skip the VDOM entirely and can outperform React for fine-grained updates."
      />

      <Misconception
        myth={`"Re-renders mean DOM updates."`}
        reality={
          <>
            A re-render means React <em>calls your component function</em> and
            diffs the output. If nothing changed, no DOM mutations happen.
            Re-renders are computation, not necessarily DOM work.
          </>
        }
      />

      <Misconception
        myth={`"useCallback prevents re-renders."`}
        reality={
          <>
            <code>useCallback</code> stabilizes a function reference. It only
            prevents re-renders if the child is wrapped in{" "}
            <code>React.memo</code>. By itself, it does nothing.
          </>
        }
      />

      <Misconception
        myth={`"Context replaces state management."`}
        reality="Context is dependency injection, not a state manager. No selector mechanism — every consumer re-renders on any change. For high-frequency updates, use Zustand, Jotai, or Redux."
      />

      <Misconception
        myth={`"key is just for lists."`}
        reality={
          <>
            You can use <code>key</code> on any component to force a full
            unmount/remount: <code>{"<Profile key={userId} />"}</code>. Changing
            the key resets all state and effects.
          </>
        }
      />

      <FurtherReading
        links={[
          {
            href: "https://overreacted.io/before-you-memo/",
            title: "Before You memo()",
            type: "article",
            note: "— Dan Abramov on when memoization is overkill and what to do instead",
          },
          {
            href: "https://www.developerway.com/posts/react-re-renders-guide",
            title: "React Re-Renders Guide",
            type: "article",
            note: "— Nadia Makarevich's comprehensive guide to what triggers re-renders and why",
          },
          {
            href: "https://www.youtube.com/watch?v=7YhdqIR2Yzo",
            title: "Virtual DOM Is Pure Overhead",
            type: "video",
            note: "— Rich Harris (Svelte) on why VDOM diffing is a means, not an end",
          },
          {
            href: "https://tkdodo.eu/blog/why-you-want-react-query",
            title: "Why You Want React Query",
            type: "article",
            note: "— TkDodo on why state management for server data is a solved problem",
          },
        ]}
      />
    </Section>
  );
}
