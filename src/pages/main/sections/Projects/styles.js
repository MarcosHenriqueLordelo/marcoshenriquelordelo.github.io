import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    height: fit-content;
  }
`;

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ProjectsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.larger};
  text-transform: uppercase;
  border-bottom: 3px solid ${({ theme }) => theme.colors.action};
  width: fit-content;
  align-self: center;
  letter-spacing: 3px;
  margin-top: 2.6rem;

  @media (max-width: 900px) {
    margin-bottom: 6rem;
  }
`;
