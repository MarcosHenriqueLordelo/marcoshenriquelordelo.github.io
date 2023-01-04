import React from "react";
import { Container, Item } from "./styles";

const Navigation = ({ active, onCloseNav }) => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onCloseNav();
    }
  };

  return (
    <Container className={active && "active"}>
      <Item onClick={() => handleClickScroll("about")}>Sobre</Item>
      <Item onClick={() => handleClickScroll("skills")}>Habilidades</Item>
      <Item onClick={() => handleClickScroll("history")}>Trajetória</Item>
      <Item onClick={() => handleClickScroll("projects")}>Projetos</Item>
    </Container>
  );
};

export default Navigation;
