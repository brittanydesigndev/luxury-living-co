import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Analyze } from "./components/Analyze";
import { DesignPhase, DevelopPhase, EvaluatePhase, ImplementPhase } from "./components/Phases";
import { Upcoming } from "./components/Upcoming";
import { Experience, Footer, Resources } from "./components/Closing";

// Earlier, longer drafts of each phase are kept in src/components
// (Design.tsx, Develop.tsx, ImplementEvaluate.tsx, Closing.tsx > NextSteps).

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Analyze />
        <DesignPhase />
        <DevelopPhase />
        <ImplementPhase />
        <EvaluatePhase />
        <Upcoming />
        <Experience />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
