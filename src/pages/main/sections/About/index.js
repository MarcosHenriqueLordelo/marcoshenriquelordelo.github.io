import React from "react";
import {
  Container,
  Presentation,
  PresentationContainer,
  Icon,
  IconsContainer,
  Gradient,
  ProfileImage,
  ActionSpan,
  ImageContainer,
  Title,
} from "./styles";

import profileImg from "../../../../assets/profileImg.jpg";
import linkedin from "../../../../assets/linkedin.png";
import discord from "../../../../assets/discord.png";
import github from "../../../../assets/github.png";

const About = () => {
  return (
    <Container>
      <PresentationContainer>
        <Title>
          Hello World,
          <br />
          Eu sou <ActionSpan>Marcos Marques</ActionSpan>
        </Title>
        <Presentation>
          Formado no curso de engenharia da computação, sou um desenvolvedor web
          e mobile. Moro em Salvador, mas ainda tenho muitos lugares para
          conhecer. Com a minha ajuda, suas idéias podem se tornar realidade.
        </Presentation>
        <IconsContainer>
          <a href="https://discord.com/users/Marcos%20The%20Great#4543/">
            <Icon src={discord} />
          </a>
          <a href="https://github.com/MarcosHenriqueLordelo">
            <Icon src={github} />
          </a>
          <a href="https://www.linkedin.com/in/marcos-marques-681167146/">
            <Icon src={linkedin} />
          </a>
        </IconsContainer>
      </PresentationContainer>
      <ImageContainer>
        <Gradient />
        <ProfileImage src={profileImg} />
      </ImageContainer>
    </Container>
  );
};

export default About;
