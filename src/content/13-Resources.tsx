import { Section } from "@/components/Section";
import { ResourceList } from "@/components/ResourceList";

export function ResourcesSection() {
  return (
    <Section id="resources" number="13" title="Resources">
      <h3>Essential Reading</h3>
      <ResourceList
        resources={[
          {
            href: "https://github.com/facebook/react",
            title: "React Source Code",
            description: (
              <>
                Start with <code>ReactFiberWorkLoop.js</code>. The real thing.
              </>
            ),
          },
          {
            href: "https://pomb.us/build-your-own-react/",
            title: "Build Your Own React (Didact)",
            description:
              "Build a mini React from scratch — Fiber, hooks, concurrent mode. The single best learning exercise.",
          },
          {
            href: "https://github.com/acdlite/react-fiber-architecture",
            title: "React Fiber Architecture",
            description:
              "Andrew Clark's founding document. The original design for Fiber.",
          },
          {
            href: "https://www.youtube.com/watch?v=ZCuYPiUIONs",
            title: "A Cartoon Intro to Fiber — Lin Clark",
            description:
              "React Conf 2017. Best visual explanation of the work loop and interruptibility.",
          },
        ]}
      />

      <h3>Deep Dives by Topic</h3>
      <ResourceList
        resources={[
          {
            href: "https://indepth.dev/posts/1008/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react",
            title: "Inside Fiber — inDepthDev",
            description:
              "Detailed walkthrough of the Fiber algorithm with source code references.",
          },
          {
            href: "https://www.youtube.com/watch?v=KJP1E-Y-xyo",
            title: "Getting Closure on Hooks — swyx",
            description:
              "JSConf talk. Builds hooks from scratch in 29 minutes using closures.",
          },
          {
            href: "https://overreacted.io/a-complete-guide-to-useeffect/",
            title: "A Complete Guide to useEffect — Dan Abramov",
            description: "The mental model that effects are built on.",
          },
          {
            href: "https://github.com/reactwg/react-18/discussions",
            title: "React 18 Working Group",
            description:
              "Core team explanations of batching, Suspense, transitions.",
          },
          {
            href: "https://github.com/reactwg/server-components/discussions/5",
            title: "RSC From Scratch — Dan Abramov",
            description:
              "Building Server Components from zero. Flight protocol, streaming, boundaries.",
          },
          {
            href: "https://www.plasmic.app/blog/how-react-server-components-work",
            title: "How RSCs Work — Plasmic",
            description:
              "Visual breakdown of the Flight wire format and rendering pipeline.",
          },
        ]}
      />

      <h3>Blogs & Series</h3>
      <ResourceList
        resources={[
          {
            href: "https://overreacted.io/",
            title: "overreacted.io — Dan Abramov",
            description:
              'Former core team. "Elements of UI Engineering", "Before You memo()".',
          },
          {
            href: "https://jser.dev/",
            title: "jser.dev",
            description:
              "Dedicated to React internals. Interactive Fiber visualizer, annotated source walkthroughs.",
          },
          {
            href: "https://blog.isquaredsoftware.com/",
            title: "Mark Erikson's Blog",
            description:
              "Redux maintainer. Rendering behavior, Context performance, state management.",
          },
          {
            href: "https://www.developerway.com/",
            title: "Developer Way — Nadia Makarevich",
            description:
              "Re-renders, composition, performance, and advanced patterns.",
          },
          {
            href: "https://www.youtube.com/playlist?list=PLxRVWC-K96b0ktvhd16l9F9TFDhKpN5br",
            title: "React Internals Deep Dive — Philip Fabianek",
            description:
              "Multi-part YouTube series walking through React source code.",
          },
        ]}
      />

      <h3>Build Your Own</h3>
      <ResourceList
        resources={[
          {
            href: "https://pomb.us/build-your-own-react/",
            title: "Didact — Rodrigo Pombo",
            description:
              "Mini React with Fiber, reconciliation, hooks, and concurrent mode.",
          },
          {
            href: "https://jser.dev/2023-07-11-overall-of-react-internals/",
            title: "Build Your Own React in 400 Lines — jser.dev",
            description:
              "More faithful to actual React internals than Didact.",
          },
          {
            href: "https://playground.react.dev/",
            title: "React Compiler Playground",
            description:
              "See exactly what the compiler outputs for any input.",
          },
        ]}
      />
    </Section>
  );
}
