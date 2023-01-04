import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.section};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.span`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
`;
