import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  transition: all 1s linear;
  ${({ visible, position }) =>
    visible
      ? `opacity:1;
         transform: translateX(0);`
      : `opacity:0;
         transform: translateX(${position === "left" ? -100 : 100}%);`}
  transition-delay: .3s;
`;

export const Label = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  text-transform: capitalize;
  margin-top: 0.3rem;

  max-width: 26rem;
`;

export const Period = styled.span`
  margin-top: 0.3rem;
`;
