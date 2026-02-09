import { Section } from "@/components/Section";
import { CodeBlock } from "@/components/CodeBlock";
import { Diagram } from "@/components/Diagram";
import { FurtherReading } from "@/components/FurtherReading";

export function FiberArchitectureSection() {
  return (
    <Section id="fiber" number="02" title="Fiber Architecture">
      <p>
        Fiber is React's internal reconciliation engine, introduced in React 16
        as a complete rewrite. It's the most important architectural concept in
        modern React.
      </p>

      <h3>Why Fiber Exists</h3>
      <p>
        The old Stack Reconciler processed the tree recursively and
        synchronously. Once it started, it couldn't stop — a large update could
        block the main thread for hundreds of milliseconds, causing jank. Fiber
        makes rendering <strong>interruptible</strong> by breaking work into
        small units that can be paused, resumed, or aborted.
      </p>

      <h3>What Is a Fiber?</h3>
      <p>
        A Fiber is a plain JavaScript object representing a unit of work.
        There's one for every component instance, DOM element, or React node in
        your tree — a mutable, linked-list-based work-in-progress tree.
      </p>

      <CodeBlock
        code={`<span class="cm">// Simplified Fiber node</span>
{
  <span class="cm">// Identity</span>
  <span class="prop">tag</span>: FunctionComponent | HostComponent | ...,
  <span class="prop">type</span>: App,
  <span class="prop">key</span>: <span class="kw">null</span>,

  <span class="cm">// Tree structure (linked list, not array children)</span>
  <span class="prop">return</span>: parentFiber,
  <span class="prop">child</span>: firstChildFiber,
  <span class="prop">sibling</span>: nextSiblingFiber,

  <span class="cm">// State &amp; Props</span>
  <span class="prop">memoizedState</span>: { <span class="prop">count</span>: <span class="num">0</span> },  <span class="cm">// Head of hooks linked list</span>
  <span class="prop">pendingProps</span>: { <span class="prop">title</span>: <span class="str">'World'</span> },

  <span class="cm">// Effects</span>
  <span class="prop">flags</span>: Update | Placement | Deletion,  <span class="cm">// Bitmask</span>
  <span class="prop">subtreeFlags</span>: Update,                  <span class="cm">// Bubbled from children</span>

  <span class="cm">// Scheduling</span>
  <span class="prop">lanes</span>: <span class="num">0b0000000000000000001</span>,  <span class="cm">// Priority bitmask</span>

  <span class="cm">// Double buffering</span>
  <span class="prop">alternate</span>: workInProgressFiber,
}`}
      />

      <h3>Linked List Traversal</h3>
      <p>
        Unlike typical trees with arrays of children, Fiber uses{" "}
        <strong>child → sibling → return</strong> pointers. This lets React
        traverse iteratively with a while loop instead of recursively — which is
        what makes work interruptible. At any point, React knows exactly where
        it left off.
      </p>

      <Diagram
        content={`       <span class="hl">App</span>
        <span class="dim">│  (child)</span>
      <span class="hl2">Header</span> <span class="dim">──→</span> <span class="hl2">Content</span> <span class="dim">──→</span> <span class="hl2">Footer</span>  <span class="dim">(sibling links)</span>
        <span class="dim">│</span>          <span class="dim">│</span>
      <span class="hl3">Logo</span>      <span class="hl3">Article</span> <span class="dim">──→</span> <span class="hl3">Sidebar</span>`}
      />

      <h3>Double Buffering</h3>
      <p>
        React maintains <strong>two</strong> Fiber trees at all times. The{" "}
        <strong>current</strong> tree reflects what's on screen. The{" "}
        <strong>workInProgress</strong> tree is where changes are applied. Each
        Fiber has an <code>alternate</code> pointer to its counterpart. On
        commit, React swaps — the WIP becomes current. This is double buffering,
        borrowed from graphics.
      </p>

      <Diagram
        content={`<span class="hl">current tree</span>:           <span class="hl2">workInProgress tree</span>:
  App <span class="dim">(count: 0)</span>  <span class="dim">←→</span>  App <span class="dim">(count: 1)</span>      <span class="dim">← alternate pointers</span>
   <span class="dim">│</span>                    <span class="dim">│</span>
  Div              →  Div
   <span class="dim">│</span>                    <span class="dim">│</span>
  Span <span class="str">"0"</span>         →  Span <span class="str">"1"</span>             <span class="dim">← Update flag</span>`}
      />

      <FurtherReading
        links={[
          {
            href: "https://github.com/acdlite/react-fiber-architecture",
            title: "React Fiber Architecture",
            type: "gist",
            note: "— Andrew Clark's founding document; the original Fiber design",
          },
          {
            href: "https://www.youtube.com/watch?v=ZCuYPiUIONs",
            title: "A Cartoon Intro to Fiber",
            type: "video",
            note: "— Lin Clark, React Conf 2017. Best visual overview of the architecture",
          },
          {
            href: "https://indepth.dev/posts/1008/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react",
            title: "Inside Fiber: In-Depth Overview",
            type: "deep dive",
            note: "— Max Koretskyi walks through every Fiber field with source references",
          },
          {
            href: "https://jser.dev/2023-07-18-how-react-fiber-tree-is-constructed/",
            title: "How the Fiber Tree Is Constructed",
            type: "deep dive",
            note: "— jser.dev traces tree building step by step with interactive visualizer",
          },
          {
            href: "https://pomb.us/build-your-own-react/",
            title: "Build Your Own React (Didact)",
            type: "tutorial",
            note: "— Implement Fiber from scratch; best for hands-on understanding",
          },
        ]}
      />
    </Section>
  );
}
