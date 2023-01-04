import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.action};
  transition-duration: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &.active {
    transform: translateX(-400px);
  }

  z-index: 1;
`;

export const Item = styled.span`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.sizes.larger};
  margin-bottom: 20px;
  transition: all 1s;

  border-bottom: 6px solid transparent;

  &:hover {
    border-bottom: 6px solid ${({ theme }) => theme.colors.background};
  }
`;
