import { Section } from "@/components/Section";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { FurtherReading } from "@/components/FurtherReading";

export function RenderPhaseSection() {
  return (
    <Section id="render" number="03" title="Render Phase">
      <p>
        The render phase is where React figures out <em>what changed</em>. It's
        pure computation — no DOM mutations. This phase is interruptible in
        concurrent mode.
      </p>

      <h3>The Work Loop</h3>
      <CodeBlock
        label="ReactFiberWorkLoop.js"
        code={`<span class="kw">function</span> <span class="fn">workLoopConcurrent</span>() {
  <span class="kw">while</span> (workInProgress !== <span class="kw">null</span> && !<span class="fn">shouldYield</span>()) {
    <span class="fn">performUnitOfWork</span>(workInProgress);
  }
}

<span class="kw">function</span> <span class="fn">performUnitOfWork</span>(unitOfWork) {
  <span class="kw">const</span> next = <span class="fn">beginWork</span>(unitOfWork);  <span class="cm">// Process, return first child</span>
  <span class="kw">if</span> (next === <span class="kw">null</span>) {
    <span class="fn">completeUnitOfWork</span>(unitOfWork);    <span class="cm">// No children → sibling or parent</span>
  } <span class="kw">else</span> {
    workInProgress = next;
  }
}`}
      />

      <p>
        <code>shouldYield()</code> checks if the browser needs the main thread
        back (via <code>MessageChannel</code>). If so, React pauses and resumes
        later exactly where it left off.
      </p>

      <h3>beginWork</h3>
      <p>
        Called for each Fiber going <em>down</em> the tree. Behavior depends on
        the Fiber's tag: <strong>FunctionComponent</strong> → calls the function
        (runs hooks); <strong>ClassComponent</strong> → calls{" "}
        <code>render()</code>; <strong>HostComponent</strong> → diffs props;{" "}
        <strong>ContextProvider</strong> → pushes new value onto internal stack.
      </p>

      <h3>completeWork</h3>
      <p>
        Called going <em>back up</em>. Creates actual DOM nodes (but doesn't
        insert them), bubbles effect flags from children into{" "}
        <code>subtreeFlags</code>, and builds the effect list of Fibers needing
        DOM mutations.
      </p>

      <h3>The Diffing Algorithm</h3>
      <p>
        Instead of O(n³) general tree diff, React uses two heuristics for O(n):
      </p>
      <p>
        <strong>Heuristic 1:</strong> Different types produce different trees — a{" "}
        <code>&lt;div&gt;</code> changing to <code>&lt;span&gt;</code> tears down
        the entire subtree.
      </p>
      <p>
        <strong>Heuristic 2:</strong> Keys identify stable elements. For list
        children, React builds a Map keyed by <code>key</code> (or index), then
        walks the new list matching against it.
      </p>

      <Callout>
        <p>
          <strong>Why index keys are bad:</strong> inserting at the beginning
          shifts every index, so React thinks every element changed — causing
          unnecessary unmounts and lost state.
        </p>
      </Callout>

      <FurtherReading
        links={[
          {
            href: "https://jser.dev/2023-07-11-how-does-react-bindfiber/",
            title: "How beginWork() Processes Each Fiber Type",
            type: "deep dive",
            note: "— jser.dev annotated source walkthrough of the beginWork switch",
          },
          {
            href: "https://legacy.reactjs.org/docs/reconciliation.html",
            title: "Reconciliation — React Docs",
            type: "docs",
            note: "— Official explanation of the two heuristics and O(n) diffing",
          },
          {
            href: "https://overreacted.io/react-as-a-ui-runtime/",
            title: "React as a UI Runtime",
            type: "article",
            note: "— Dan Abramov covers host trees, reconciliation, and the rendering model",
          },
          {
            href: "https://www.developerway.com/posts/reconciliation-and-keys",
            title: "Reconciliation and Keys in Depth",
            type: "article",
            note: "— Nadia Makarevich on key behavior, index pitfalls, and reset patterns",
          },
          {
            href: "https://jser.dev/2023-07-21-how-does-react-diff-list/",
            title: "How React Diffs Lists Internally",
            type: "deep dive",
            note: "— Step-by-step trace of ReactChildFiber.js key matching algorithm",
          },
        ]}
      />
    </Section>
  );
}
