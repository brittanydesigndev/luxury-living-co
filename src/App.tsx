import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Analyze } from "./components/Analyze";
import { Design } from "./components/Design";
import { Develop } from "./components/Develop";
import { Evaluate, Implement } from "./components/ImplementEvaluate";
import { Experience, Footer, NextSteps } from "./components/Closing";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Analyze />
        <Design />
        <Develop />
        <Implement />
        <Evaluate />
        <NextSteps />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
