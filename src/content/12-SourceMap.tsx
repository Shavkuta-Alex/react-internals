import { Section } from "@/components/Section";
import { FileTable } from "@/components/FileTable";
import { FurtherReading } from "@/components/FurtherReading";

export function SourceMapSection() {
  return (
    <Section id="source" number="12" title="Source Map">
      <p>
        Key files in the React monorepo (
        <code>packages/react-reconciler/src/</code>):
      </p>

      <FileTable
        files={[
          {
            file: "ReactFiberWorkLoop.js",
            description: "The render/commit loop — start here",
          },
          {
            file: "ReactFiberBeginWork.js",
            description: "How each Fiber type is processed going down",
          },
          {
            file: "ReactFiberCompleteWork.js",
            description: "How work is completed going up",
          },
          {
            file: "ReactFiberHooks.js",
            description: "The entire hooks implementation",
          },
          {
            file: "ReactChildFiber.js",
            description: "List diffing / key reconciliation",
          },
          {
            file: "ReactFiberLane.js",
            description: "The lane priority model",
          },
          {
            file: "Scheduler.js",
            description: "Userspace scheduler (independent of React)",
          },
        ]}
      />

      <FurtherReading
        links={[
          {
            href: "https://jser.dev/internals",
            title: "React Internals Explorer",
            type: "tool",
            note: "— Interactive visualizer showing Fiber tree construction and hook state step by step",
          },
          {
            href: "https://jser.dev/2023-07-11-overall-of-react-internals/",
            title: "Overall of React Internals",
            type: "deep dive",
            note: "— jser.dev road map for navigating the React codebase",
          },
          {
            href: "https://www.youtube.com/playlist?list=PLxRVWC-K96b0ktvhd16l9F9TFDhKpN5br",
            title: "React Internals Deep Dive",
            type: "video series",
            note: "— Philip Fabianek walks through source code file by file",
          },
        ]}
      />
    </Section>
  );
}
