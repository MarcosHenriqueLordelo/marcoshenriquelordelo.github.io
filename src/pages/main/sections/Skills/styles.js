import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const SkillsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.larger};
  text-transform: uppercase;
  border-bottom: 3px solid ${({ theme }) => theme.colors.action};
  width: fit-content;
  align-self: center;
  margin-top: 2.2rem;
  letter-spacing: 3px;
`;

export const SkillsContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 2.8rem 3rem;
`;

export const SkillsRow = styled.div`
  width: 100%;
  display: flex;
  padding: 3rem;
  flex-direction: column;
`;
