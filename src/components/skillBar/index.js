import React, { useRef, useState, useEffect } from "react";
import useIntersection from "../../utils/useIntersection";
import { Bar, BarContainer, Container, InfoContainer, Label } from "./styles";

const SkillBar = ({ label, value }) => {
  const ref = useRef();

  const inViewport = useIntersection(ref, "0px");

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible && inViewport) setVisible(true);
  }, [inViewport, visible]);

  return (
    <Container ref={ref}>
      <InfoContainer>
        <Label>{label}</Label>
        <Label>{value}%</Label>
      </InfoContainer>
      <BarContainer>
        <Bar value={value} visible={visible} />
      </BarContainer>
    </Container>
  );
};

export default SkillBar;
