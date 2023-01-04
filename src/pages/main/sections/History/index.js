import React from "react";

import {
  Container,
  DividerLine,
  EmptySpace,
  HistoryLeft,
  HistoryContent,
  HistoryRight,
  HistoryTitle,
  UpArrow,
} from "./styles";

import HistoryItem from "../../../../components/historyItem";

const History = () => {
  return (
    <Container id="history">
      <HistoryTitle>Minha Trajetória</HistoryTitle>
      <HistoryContent>
        <HistoryLeft>
          <EmptySpace height={36} />
          <HistoryItem
            label="Application Developer"
            enterprise="IBM"
            location="Remote"
            start="2021"
          />
          <EmptySpace height={250} />
          <HistoryItem
            label="React Native Developer"
            enterprise="Social Époque"
            location="Salvador"
            start="2019"
            end="2022"
          />
          <EmptySpace height={250} />
          <HistoryItem
            label="Android Developer"
            enterprise="Black Hole Development"
            location="Salvador"
            start="2016"
            end="2019"
          />
        </HistoryLeft>
        <DividerLine>
          <UpArrow />
        </DividerLine>
        <HistoryRight>
          <EmptySpace height={150} />
          <HistoryItem
            label="Web Developer"
            enterprise="IT Inteligencia e Tecnologia"
            location="Salvador"
            start="2021"
            end="2021"
            position="right"
          />
          <EmptySpace height={250} />
          <HistoryItem
            label="Application Developer"
            enterprise="MDS Tecnologia da informação"
            location="Salvador"
            start="2019"
            end="2021"
            position="right"
          />
        </HistoryRight>
      </HistoryContent>
    </Container>
  );
};

export default History;
