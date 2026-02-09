import { Section } from "@/components/Section";
import { CodeBlock } from "@/components/CodeBlock";
import { Diagram } from "@/components/Diagram";
import { Callout } from "@/components/Callout";
import { FurtherReading } from "@/components/FurtherReading";

export function PipelineSection() {
  return (
    <Section id="pipeline" number="01" title="The Pipeline">
      <p>
        When you write <code>&lt;App /&gt;</code>, a chain of transformations
        runs before pixels reach the screen. Understanding this full pipeline is
        the key to understanding React.
      </p>

      <Diagram
        content={`<span class="hl">JSX</span> → <span class="hl3">React.createElement()</span> → <span class="hl2">React Element</span> <span class="dim">(plain object)</span>
    → <span class="hl">Reconciler</span> <span class="dim">(Fiber)</span> → <span class="hl3">Commit</span> → <span class="hl2">DOM</span> → <span class="dim">Browser Paint</span>`}
      />

      <p>
        <strong>JSX is not HTML.</strong> Babel (or SWC/esbuild) transforms it
        into <code>React.createElement()</code> calls — or the newer{" "}
        <code>jsx()</code> runtime from React 17. The result is a plain
        JavaScript object:
      </p>

      <CodeBlock
        code={`<span class="cm">// What you write:</span>
<span class="op">&lt;</span><span class="fn">div</span> <span class="prop">className</span><span class="op">=</span><span class="str">"app"</span><span class="op">&gt;</span>
  <span class="op">&lt;</span><span class="fn">Header</span> <span class="prop">title</span><span class="op">=</span><span class="str">"Hello"</span> <span class="op">/&gt;</span>
<span class="op">&lt;/</span><span class="fn">div</span><span class="op">&gt;</span>

<span class="cm">// What it becomes:</span>
{
  <span class="prop">$$typeof</span>: <span class="type">Symbol</span>(react.element),  <span class="cm">// Security: prevents JSON injection</span>
  <span class="prop">type</span>: <span class="str">'div'</span>,
  <span class="prop">props</span>: {
    <span class="prop">className</span>: <span class="str">'app'</span>,
    <span class="prop">children</span>: {
      <span class="prop">$$typeof</span>: <span class="type">Symbol</span>(react.element),
      <span class="prop">type</span>: Header,    <span class="cm">// Reference to the function</span>
      <span class="prop">props</span>: { <span class="prop">title</span>: <span class="str">'Hello'</span> },
    }
  },
}`}
      />

      <Callout>
        <p>
          The <code>$$typeof: Symbol(react.element)</code> field is a security
          measure. Since Symbols can't be serialized to JSON, a server can't be
          tricked into returning a malicious element from user input.
        </p>
      </Callout>

      <FurtherReading
        links={[
          {
            href: "https://overreacted.io/why-do-react-elements-have-typeof-property/",
            title: "Why Do React Elements Have a $$typeof Property?",
            type: "article",
            note: "— Dan Abramov on the XSS protection mechanism",
          },
          {
            href: "https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html",
            title: "Introducing the New JSX Transform",
            type: "blog",
            note: "— React team on the jsx() runtime and why createElement was replaced",
          },
          {
            href: "https://jser.dev/2023-01-28-how-does-jsx-work/",
            title: "How Does JSX Work Internally?",
            type: "deep dive",
            note: "— jser.dev traces JSX from Babel to element objects to Fibers",
          },
          {
            href: "https://www.youtube.com/watch?v=CGpMlWVcHok",
            title: "Building a Custom React Renderer",
            type: "video",
            note: "— Sophie Alpert shows how elements flow into the reconciler",
          },
        ]}
      />
    </Section>
  );
}
