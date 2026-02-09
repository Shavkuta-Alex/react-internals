import { Section } from "@/components/Section";
import { CodeBlock } from "@/components/CodeBlock";
import { Diagram } from "@/components/Diagram";
import { FurtherReading } from "@/components/FurtherReading";

export function HooksSection() {
  return (
    <Section id="hooks" number="05" title="How Hooks Work">
      <p>
        Hooks are a linked list stored on <code>fiber.memoizedState</code>. No
        magic — just pointers.
      </p>

      <h3>The Linked List</h3>
      <p>
        Each hook call during render either creates a new node (mount) or
        advances to the next existing one (update). This is why hooks must be
        called in the same order every render — React uses call order, not names.
      </p>

      <Diagram
        content={`<span class="hl">fiber.memoizedState</span> → <span class="hl2">hook1</span> <span class="dim">(useState)</span>
                          <span class="dim">↓ next</span>
                        <span class="hl2">hook2</span> <span class="dim">(useEffect)</span>
                          <span class="dim">↓ next</span>
                        <span class="hl2">hook3</span> <span class="dim">(useMemo)</span>
                          <span class="dim">↓ next</span>
                        <span class="hl3">null</span>`}
      />

      <h3>useState is useReducer</h3>
      <p>
        <code>useState</code> is implemented as <code>useReducer</code> with a
        trivial reducer. When you call <code>setState</code>, React enqueues an
        update on the hook's circular queue, marks lanes on the Fiber, and
        schedules a re-render. All queued updates are processed together — this
        is batching.
      </p>

      <CodeBlock
        code={`<span class="kw">function</span> <span class="fn">basicStateReducer</span>(state, action) {
  <span class="kw">return typeof</span> action === <span class="str">'function'</span> ? <span class="fn">action</span>(state) : action;
}

<span class="cm">// useState(initialValue) ≡ useReducer(basicStateReducer, initialValue)</span>`}
      />

      <h3>useEffect Execution</h3>
      <p>
        Effects are stored as a separate linked list on{" "}
        <code>fiber.updateQueue</code>. Dependency comparison uses{" "}
        <code>Object.is()</code> on each element — shallow, reference-based.{" "}
        <code>useEffect</code> runs asynchronously after paint.{" "}
        <code>useLayoutEffect</code> runs synchronously after DOM mutation,
        before paint.
      </p>

      <h3>useMemo / useCallback</h3>
      <p>
        Simpler than you'd expect. <code>useMemo</code> stores{" "}
        <code>[value, deps]</code> and recomputes only if deps change.{" "}
        <code>useCallback(fn, deps)</code> is literally{" "}
        <code>{"useMemo(() => fn, deps)"}</code>.
      </p>

      <h3>useRef</h3>
      <p>
        The simplest hook. Stores <code>{"{ current: initialValue }"}</code> on
        mount, returns the same object forever. Same identity = no re-renders on
        mutation.
      </p>

      <FurtherReading
        links={[
          {
            href: "https://www.youtube.com/watch?v=KJP1E-Y-xyo",
            title: "Getting Closure on React Hooks",
            type: "video",
            note: "— swyx builds hooks from scratch in 29 minutes using closures",
          },
          {
            href: "https://the-guild.dev/blog/react-hooks-system",
            title: "Under the Hood of React Hooks",
            type: "article",
            note: "— Written companion to the swyx talk; walks the hooks linked list",
          },
          {
            href: "https://overreacted.io/a-complete-guide-to-useeffect/",
            title: "A Complete Guide to useEffect",
            type: "article",
            note: "— Dan Abramov on the mental model effects are built on",
          },
          {
            href: "https://jser.dev/2023-06-19-how-does-usestate-work/",
            title: "How Does useState Work Internally?",
            type: "deep dive",
            note: "— jser.dev traces useState through mount, update, and the dispatch queue",
          },
          {
            href: "https://jser.dev/2023-06-26-how-does-useeffect-work/",
            title: "How Does useEffect Work Internally?",
            type: "deep dive",
            note: "— jser.dev on effect creation, deps comparison, and flush timing",
          },
          {
            href: "https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js",
            title: "ReactFiberHooks.js",
            type: "source",
            note: "— The complete hooks implementation. ~3000 lines, but well-structured",
          },
        ]}
      />
    </Section>
  );
}
