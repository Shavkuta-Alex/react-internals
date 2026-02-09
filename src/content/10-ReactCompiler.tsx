import { Section } from "@/components/Section";
import { CodeBlock } from "@/components/CodeBlock";
import { FurtherReading } from "@/components/FurtherReading";

export function ReactCompilerSection() {
  return (
    <Section id="compiler" number="10" title="React Compiler">
      <p>
        The React Compiler (originally "React Forget") is an AOT compiler that
        automatically memoizes components and hooks at build time. It tracks
        which variables depend on which reactive inputs and groups them into
        reactive scopes:
      </p>

      <CodeBlock
        code={`<span class="cm">// What you write:</span>
<span class="kw">function</span> <span class="fn">TodoList</span>({ todos, filter }) {
  <span class="kw">const</span> filtered = todos.<span class="fn">filter</span>(<span class="fn">t</span> <span class="op">=&gt;</span> t.status === filter);
  <span class="kw">return</span> <span class="op">&lt;</span><span class="fn">List</span> <span class="prop">items</span>={filtered} <span class="op">/&gt;</span>;
}

<span class="cm">// What the compiler outputs (conceptually):</span>
<span class="kw">function</span> <span class="fn">TodoList</span>({ todos, filter }) {
  <span class="kw">const</span> $ = <span class="fn">useMemoCache</span>(<span class="num">4</span>);
  <span class="kw">if</span> ($[<span class="num">0</span>] !== todos || $[<span class="num">1</span>] !== filter) {
    $[<span class="num">2</span>] = todos.<span class="fn">filter</span>(<span class="fn">t</span> <span class="op">=&gt;</span> t.status === filter);
    $[<span class="num">0</span>] = todos;
    $[<span class="num">1</span>] = filter;
  }
  <span class="kw">return</span> $[<span class="num">2</span>];
}`}
      />

      <FurtherReading
        links={[
          {
            href: "https://react.dev/learn/react-compiler",
            title: "React Compiler — Official Docs",
            type: "docs",
            note: "— Setup guide, rules, and how the compiler understands your code",
          },
          {
            href: "https://www.youtube.com/watch?v=lyEKhv8-3n0",
            title: "React Compiler Talk — React Conf 2024",
            type: "video",
            note: "— Core team on reactive scopes, analysis passes, and useMemoCache",
          },
          {
            href: "https://playground.react.dev/",
            title: "React Compiler Playground",
            type: "tool",
            note: "— Paste any component and see the compiled output in real time",
          },
          {
            href: "https://www.developerway.com/posts/react-compiler-in-depth",
            title: "React Compiler In Depth",
            type: "article",
            note: "— Nadia Makarevich on what the compiler can and cannot optimize",
          },
          {
            href: "https://github.com/facebook/react/tree/main/compiler",
            title: "React Compiler Source",
            type: "source",
            note: "— The compiler implementation in the React monorepo",
          },
        ]}
      />
    </Section>
  );
}
