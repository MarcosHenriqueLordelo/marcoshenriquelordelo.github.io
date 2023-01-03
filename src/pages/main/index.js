import React from "react";

import About from "./sections/About";
import History from "./sections/History";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const Main = () => {
  return (
    <main>
      <About />
      <Skills />
      <History />
      <Projects />
    </main>
  );
};

export default Main;
