import React, { useState } from "react";
import styled from "styled-components";

import ToggleBtn from "../../components/ToggleBtn";
import Navigation from "../../components/navigation";

import About from "./sections/About";
import Footer from "./sections/footer";
import History from "./sections/History";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const Content = styled.main`
  transition: all 0.5s;

  &.active {
    transform: translate(-400px);
  }
`;

const Main = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <ToggleBtn onClick={() => setNavbar(!navbar)} active={navbar} />
      <Navigation active={navbar} onCloseNav={() => setNavbar(false)} />
      <Content className={navbar && "active"}>
        <About />
        <Skills />
        <History />
        <Projects />
        <Footer />
      </Content>
    </div>
  );
};

export default Main;
