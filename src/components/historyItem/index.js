import React, { useRef, useState, useEffect } from "react";

import useIntersection from "../../utils/useIntersection";

import { Container, Label, Period, Subtitle } from "./styles";

const HistoryItem = ({
  label,
  enterprise,
  location,
  start,
  end,
  position = "left",
}) => {
  const ref = useRef();

  const inViewport = useIntersection(ref, "0px");

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible && inViewport) setVisible(true);
  }, [inViewport, visible]);

  return (
    <Container ref={ref} visible={visible} position={position}>
      <Label>{label}</Label>
      <Subtitle>
        {enterprise} - {location}
      </Subtitle>
      <Period>
        {start}
        {end && `- ${end}`}
      </Period>
    </Container>
  );
};

export default HistoryItem;
