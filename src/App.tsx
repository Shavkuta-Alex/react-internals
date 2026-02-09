import { Header } from "@/components/Header";
import { TableOfContents } from "@/components/TableOfContents";
import { PipelineSection } from "@/content/01-Pipeline";
import { FiberArchitectureSection } from "@/content/02-FiberArchitecture";
import { RenderPhaseSection } from "@/content/03-RenderPhase";
import { CommitPhaseSection } from "@/content/04-CommitPhase";
import { HooksSection } from "@/content/05-Hooks";
import { ConcurrentFeaturesSection } from "@/content/06-ConcurrentFeatures";
import { ContextInternalsSection } from "@/content/07-ContextInternals";
import { EventSystemSection } from "@/content/08-EventSystem";
import { ServerComponentsSection } from "@/content/09-ServerComponents";
import { ReactCompilerSection } from "@/content/10-ReactCompiler";
import { MisconceptionsSection } from "@/content/11-Misconceptions";
import { SourceMapSection } from "@/content/12-SourceMap";
import { ResourcesSection } from "@/content/13-Resources";

function App() {
  return (
    <>
      <Header />
      <TableOfContents />
      <main className="max-w-[740px] mx-auto px-8 pb-24 max-sm:px-5 max-sm:pb-16">
        <PipelineSection />
        <FiberArchitectureSection />
        <RenderPhaseSection />
        <CommitPhaseSection />
        <HooksSection />
        <ConcurrentFeaturesSection />
        <ContextInternalsSection />
        <EventSystemSection />
        <ServerComponentsSection />
        <ReactCompilerSection />
        <MisconceptionsSection />
        <SourceMapSection />
        <ResourcesSection />
      </main>
      <footer className="max-w-[740px] mx-auto px-8 pt-8 pb-16 border-t border-border font-mono text-[0.65rem] text-[var(--fg-faint)] tracking-wide">
        React Internals Reference — Based on React 18/19 source code
      </footer>
    </>
  );
}

export default App;
