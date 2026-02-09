import { Section } from "@/components/Section";
import { FurtherReading } from "@/components/FurtherReading";

export function EventSystemSection() {
  return (
    <Section id="events" number="08" title="Event System">
      <p>
        React doesn't attach listeners to individual DOM nodes. It uses{" "}
        <strong>event delegation</strong> — a single listener on the root
        container for each event type, registered during{" "}
        <code>createRoot()</code>.
      </p>
      <p>
        When a native event fires and bubbles to the root, React constructs a{" "}
        <strong>SyntheticEvent</strong>, walks the Fiber tree from target to root
        collecting handlers, and dispatches them in order (capture then bubble).
        Different events get different priorities: discrete events (click,
        keydown) → <code>SyncLane</code>, continuous events (mousemove, scroll)
        → <code>InputContinuousLane</code>.
      </p>

      <FurtherReading
        links={[
          {
            href: "https://jser.dev/2023-08-07-how-does-react-bindfiber-bindfiber/",
            title: "How React's Event System Works",
            type: "deep dive",
            note: "— jser.dev on delegation, SyntheticEvent pooling, and priority assignment",
          },
          {
            href: "https://legacy.reactjs.org/blog/2020/08/10/react-v17-rc.html#changes-to-event-delegation",
            title: "Changes to Event Delegation in React 17",
            type: "blog",
            note: "— React team explains moving delegation from document to root container",
          },
          {
            href: "https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/ReactDOMEventListener.js",
            title: "ReactDOMEventListener.js",
            type: "source",
            note: "— Where native events enter React's system; priority mapping lives here",
          },
        ]}
      />
    </Section>
  );
}
