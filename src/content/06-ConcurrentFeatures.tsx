import { Section } from "@/components/Section";
import { CodeBlock } from "@/components/CodeBlock";
import { FurtherReading } from "@/components/FurtherReading";

export function ConcurrentFeaturesSection() {
  return (
    <Section id="concurrent" number="06" title="Concurrent Features">
      <p>
        React 18+ can prepare multiple UI versions simultaneously and interrupt
        low-priority work for urgent updates.
      </p>

      <h3>The Lane Model</h3>
      <p>
        A 31-bit bitmask where each bit is a priority level. Lanes replaced
        expiration times because bitmasks let React group updates (OR bits
        together), process subsets per render, and skip irrelevant work with a
        bitwise AND.
      </p>

      <CodeBlock
        label="ReactFiberLane.js"
        code={`<span class="kw">const</span> SyncLane          = <span class="num">0b0000000000000000000000000000010</span>;  <span class="cm">// Discrete events</span>
<span class="kw">const</span> InputContinuousLane = <span class="num">0b0000000000000000000000000001000</span>;  <span class="cm">// Drag, scroll</span>
<span class="kw">const</span> DefaultLane       = <span class="num">0b0000000000000000000000000100000</span>;  <span class="cm">// Normal updates</span>
<span class="kw">const</span> TransitionLane1   = <span class="num">0b0000000000000000000001000000000</span>;  <span class="cm">// startTransition</span>
<span class="kw">const</span> IdleLane          = <span class="num">0b0100000000000000000000000000000</span>;  <span class="cm">// Lowest</span>`}
      />

      <h3>startTransition</h3>
      <p>
        Wrapping a state update in <code>startTransition</code> assigns it a
        Transition Lane. If a high-priority update arrives (like keyboard input),
        React interrupts the transition, handles the urgent update, and restarts
        later.
      </p>

      <h3>Time Slicing</h3>
      <p>
        React's scheduler divides work into ~5ms chunks and yields back to the
        browser between them via <code>MessageChannel</code> (not{" "}
        <code>requestIdleCallback</code>, which is too unpredictable). This
        keeps animations smooth and inputs responsive.
      </p>

      <h3>Suspense</h3>
      <p>
        When a component throws a Promise, React catches it, renders the nearest{" "}
        <code>&lt;Suspense&gt;</code> fallback, attaches a <code>.then()</code>{" "}
        to the Promise, and retries when it resolves. In concurrent mode, it can
        keep showing old UI during transitions instead of flashing spinners.
      </p>

      <FurtherReading
        links={[
          {
            href: "https://github.com/reactwg/react-18/discussions",
            title: "React 18 Working Group Discussions",
            type: "forum",
            note: "— Core team explanations of automatic batching, Suspense, and transitions",
          },
          {
            href: "https://www.youtube.com/watch?v=FZ0cG47msEk",
            title: "What is Concurrent React?",
            type: "video",
            note: "— Andrew Clark at React Conf 2021 on the concurrent model",
          },
          {
            href: "https://jser.dev/2023-05-19-how-does-usetransition-work/",
            title: "How Does useTransition Work?",
            type: "deep dive",
            note: "— jser.dev traces startTransition through lane assignment and interruption",
          },
          {
            href: "https://jser.dev/2023-04-17-how-does-react-scheduler-work/",
            title: "How Does the React Scheduler Work?",
            type: "deep dive",
            note: "— jser.dev on the priority queue, 5ms time slices, and MessageChannel",
          },
          {
            href: "https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberLane.js",
            title: "ReactFiberLane.js",
            type: "source",
            note: "— The full lane model: bitmask definitions, merging, subset checks",
          },
          {
            href: "https://jser.dev/2023-04-23-how-does-suspense-work/",
            title: "How Does Suspense Work Internally?",
            type: "deep dive",
            note: "— Promise throwing, fallback rendering, ping mechanism, and retries",
          },
        ]}
      />
    </Section>
  );
}
