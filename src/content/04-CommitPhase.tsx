import { Section } from "@/components/Section";
import { Diagram } from "@/components/Diagram";
import { FurtherReading } from "@/components/FurtherReading";

export function CommitPhaseSection() {
  return (
    <Section id="commit" number="04" title="Commit Phase">
      <p>
        The commit phase is <strong>synchronous</strong> — once started, it runs
        to completion. This prevents partially-updated UI. Three sub-phases:
      </p>

      <h3>1. Before Mutation</h3>
      <p>
        Calls <code>getSnapshotBeforeUpdate</code> for class components.
        Schedules passive effects (<code>useEffect</code>) but doesn't flush
        them yet.
      </p>

      <h3>2. Mutation</h3>
      <p>
        Actual DOM operations: insertions, updates, deletions. Runs{" "}
        <code>componentWillUnmount</code>, <code>useLayoutEffect</code>{" "}
        cleanups, and detaches refs from old nodes.
      </p>

      <h3>3. Layout</h3>
      <p>
        Runs <code>componentDidMount</code>/<code>componentDidUpdate</code>,
        fires <code>useLayoutEffect</code> callbacks synchronously (before
        paint), and attaches refs to new DOM nodes.
      </p>

      <p>
        After layout, React swaps <code>root.current</code> to the WIP tree.
        Then <em>asynchronously</em>, after the browser paints, it flushes
        passive effects.
      </p>

      <Diagram
        content={`<span class="hl">Render Phase</span> <span class="dim">(interruptible)</span>          <span class="hl2">Commit Phase</span> <span class="dim">(synchronous)</span>
┌─────────────────────────┐    ┌────────────────────────────────────┐
│ beginWork → completeWork│───→│ beforeMutation → mutation → layout │
│ <span class="dim">(builds WIP tree)</span>       │    │ <span class="dim">(applies changes to DOM)</span>           │
└─────────────────────────┘    └──────────────┬─────────────────────┘
                                              │
                                              ▼  <span class="dim">(async, after paint)</span>
                                     <span class="hl3">Passive Effects</span> (useEffect)`}
      />

      <FurtherReading
        links={[
          {
            href: "https://jser.dev/2023-07-14-how-does-react-bindfiber-binds/",
            title: "How the Commit Phase Works",
            type: "deep dive",
            note: "— jser.dev traces mutation, layout, and passive effect phases in source",
          },
          {
            href: "https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/",
            title: "A (Mostly) Complete Guide to React Rendering",
            type: "article",
            note: "— Mark Erikson covers the full render → commit pipeline and batching",
          },
          {
            href: "https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitWork.js",
            title: "ReactFiberCommitWork.js",
            type: "source",
            note: "— The actual commit phase implementation in the React repo",
          },
          {
            href: "https://overreacted.io/before-you-memo/",
            title: "Before You memo()",
            type: "article",
            note: "— Dan Abramov on render vs. commit costs and when optimization matters",
          },
        ]}
      />
    </Section>
  );
}
