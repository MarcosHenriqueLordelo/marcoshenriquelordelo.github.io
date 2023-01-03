import React from "react";

import {
  BackContent,
  Body,
  CardSide,
  Container,
  Image,
  Technology,
  Title,
} from "./styles";

const Card = ({ logo, title, body, backTitle, technologies }) => {
  return (
    <Container>
      <CardSide className="front">
        <Image src={logo} />
        <Title>{title}</Title>
        <Body>{body}</Body>
      </CardSide>
      <CardSide className="back">
        <Title>{backTitle}</Title>
        <BackContent>
          {technologies.map((item, index) => (
            <Technology key={index}>{item}</Technology>
          ))}
        </BackContent>
      </CardSide>
    </Container>
  );
};

export default Card;
