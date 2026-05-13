import React from "react";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-inner">
          <span className="nav-brand">Will Parker</span>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
