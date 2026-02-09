import { Section } from "@/components/Section";
import { CodeBlock } from "@/components/CodeBlock";
import { FurtherReading } from "@/components/FurtherReading";

export function ServerComponentsSection() {
  return (
    <Section id="rsc" number="09" title="Server Components">
      <p>
        React Server Components execute on the server and stream a serialized
        format to the client — not HTML, but the{" "}
        <strong>Flight protocol</strong>:
      </p>

      <CodeBlock
        label="Flight wire format"
        code={`<span class="num">0</span>:[<span class="str">"$"</span>,<span class="str">"div"</span>,<span class="kw">null</span>,{<span class="str">"children"</span>:[[<span class="str">"$"</span>,<span class="str">"h1"</span>,<span class="kw">null</span>,{<span class="str">"children"</span>:<span class="str">"Hello"</span>}]]}]
<span class="num">1</span>:<span class="type">I</span>[<span class="str">"./ClientComponent.js"</span>,<span class="str">"ClientComponent"</span>]`}
      />

      <p>
        <code>"$"</code> marks React elements. <code>"$L1"</code> means a lazy
        reference to a Client Component. Server Components are pre-rendered —
        their code never ships to the client. The <code>"use client"</code>{" "}
        directive creates the boundary; props crossing it must be serializable.
      </p>

      <FurtherReading
        links={[
          {
            href: "https://github.com/reactwg/server-components/discussions/5",
            title: "RSC From Scratch",
            type: "tutorial",
            note: "— Dan Abramov builds RSC from zero. The definitive walkthrough",
          },
          {
            href: "https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md",
            title: "Server Components RFC",
            type: "rfc",
            note: "— The official proposal with motivation, semantics, and constraints",
          },
          {
            href: "https://www.plasmic.app/blog/how-react-server-components-work",
            title: "How React Server Components Work",
            type: "article",
            note: "— Plasmic's visual breakdown of the Flight wire format and streaming",
          },
          {
            href: "https://www.youtube.com/watch?v=TQQPAU21ZUw",
            title: "React Server Components — React Conf 2024",
            type: "video",
            note: '— Core team on RSC architecture, streaming, and the "use server" directive',
          },
          {
            href: "https://www.joshwcomeau.com/react/server-components/",
            title: "Making Sense of RSC",
            type: "article",
            note: "— Josh Comeau's beginner-friendly explanation with great diagrams",
          },
        ]}
      />
    </Section>
  );
}
