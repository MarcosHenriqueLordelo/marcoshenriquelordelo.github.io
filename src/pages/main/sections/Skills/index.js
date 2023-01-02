import React from "react";

import SkillBar from "../../../../components/skillBar";

import { Container, SkillsContent, SkillsRow, SkillsTitle } from "./styles";

const Skills = () => {
  return (
    <Container>
      <SkillsTitle>Minhas Habilidades</SkillsTitle>
      <SkillsContent>
        <SkillsRow>
          <SkillBar label="Firebase" value={77} />
          <SkillBar label="Javascript" value={87} />
          <SkillBar label="Python" value={64} />
          <SkillBar label="Typescript" value={85} />
          <SkillBar label="C" value={46} />
        </SkillsRow>
        <SkillsRow>
          <SkillBar label="Mobile Developer" value={90} />
          <SkillBar label="UI / UX" value={46} />
          <SkillBar label="Web Developer" value={76} />
          <SkillBar label="Back-End Developer" value={66} />
          <SkillBar label="Arduino" value={55} />
        </SkillsRow>
      </SkillsContent>
    </Container>
  );
};

export default Skills;
