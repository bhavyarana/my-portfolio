import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="bg-[#ffffff] dark:bg-[#1e1e1e] overflow-x-hidden">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </>
  );
};

export default App;
