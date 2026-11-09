import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Analyze } from "./components/Analyze";
import { Upcoming } from "./components/Upcoming";
import { Experience, Footer, Resources } from "./components/Closing";

// Earlier drafts of the Design, Develop, Implement, Evaluate and Next steps
// sections are kept in src/components (Design.tsx, Develop.tsx,
// ImplementEvaluate.tsx, Closing.tsx > NextSteps) to pull from as we build.

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Analyze />
        <Upcoming />
        <Experience />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
