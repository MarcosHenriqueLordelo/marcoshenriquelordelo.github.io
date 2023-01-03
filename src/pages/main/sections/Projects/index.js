import React from "react";

import Card from "../../../../components/card";

import { Container, Content, ProjectsTitle } from "./styles";

import socialEp from "../../../../assets/socialep.png";
import count8 from "../../../../assets/count8.png";
import ehobaba from "../../../../assets/ehobaba.png";

const Projects = () => {
  return (
    <Container>
      <ProjectsTitle>Projetos</ProjectsTitle>
      <Content>
        <Card
          title="SocialEp"
          backTitle="FullStack Developer"
          body="O SocialEp foi um projeto criado com a intenção de aproximar as ongs
          dos trabalhadores voluntários. Uma plataforma que proporciona ao
          voluntário procurar as vagas baseado em seus interesses e habilidades,
          fornecia as ongs uma plataforma web onde eram capazes de criar novas
          vagas e gerenciar as suas inscrições."
          logo={socialEp}
          technologies={["React JS", "React Native", "Typescript", "Firebase"]}
        />
        <Card
          title="Count 8"
          backTitle="Android Developer"
          body="Game desenvolvido por um grupo de amigos que tinham
          o interesse em aprender e evoluir juntos, o jogo dispõe de
          um teclado onde o jogador deve digitar uma sequencia de números crescentes,
          caso erre ou demore muito ele perde e tem de recomeçar."
          logo={count8}
          technologies={["Android", "Java", "XML", "Firebase"]}
        />
        <Card
          title="Ehobaba"
          backTitle="FullStack Developer"
          body="Aplicação de gerênciamento de partidas de futebol,
          permite aos seus úsuarios criar partidas, adicionar os eventos
          que ocorren durante ela e a pontuação de cada jogador em tempo real.
          Utilizando os dados das partidas a aplicação fornece aos seus usuários um
          card personalizado de jogador com todas suas estatisticas."
          logo={ehobaba}
          technologies={["React Native", "Typescript", "Firebase"]}
        />
      </Content>
    </Container>
  );
};

export default Projects;
