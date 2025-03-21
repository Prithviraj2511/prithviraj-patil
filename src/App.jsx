import { ReactLenis } from "lenis/react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Career from "./components/Career";

function App() {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Career />
        <Project />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
