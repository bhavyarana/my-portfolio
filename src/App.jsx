import Skills from "./components/Skills";
import Work from "./components/Work";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};

export default App;
