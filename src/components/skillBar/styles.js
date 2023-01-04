import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 2rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: .3rem;
`;

export const Bar = styled.div`
  border-radius: 20px;
  ${({ visible, value }) => (visible ? `width:${value}%` : `width:0%`)};
  transition: all 1s linear;
  background-color: ${({ theme }) => theme.colors.action};
`;

export const BarContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.font};
  width: 100%;
  height: 1.3rem;
  border-radius: 20px;
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  text-transform: capitalize;
`;
