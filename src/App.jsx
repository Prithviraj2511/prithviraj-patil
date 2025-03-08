import { ReactLenis } from "lenis/react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
