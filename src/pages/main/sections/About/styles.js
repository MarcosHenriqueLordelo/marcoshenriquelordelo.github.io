import styled, { keyframes } from "styled-components";

const gradientAnim = keyframes`
    0%{
        transform:  translate(-50%, -50%) scale(7);
    };
    50%{
        transform:  translate(-50%, -50%) scale(10);
    };
    100%{
        transform:  translate(-50%, -50%) scale(7);
    };
`;

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const PresentationContainer = styled.div`
  max-width: 50vw;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-image: radial-gradient(
    circle at center,
    ${({ theme }) => theme.colors.action} 10%,
    ${({ theme }) => theme.colors.background} 70%
  );
  margin: 0;
  top: 50%;
  left: 50%;
  z-index: -1;
  animation: ${gradientAnim} 5s ease-in-out;
  animation-iteration-count: infinite;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes.larger};
`;

export const ActionSpan = styled.span`
  color: ${({ theme }) => theme.colors.action};
`;

export const Presentation = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
`;

export const ProfileImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 100%;
`;

export const IconsContainer = styled.div`
  margin-top: 100px;
  a:not(:last-child) {
    margin-right: 30px;
  }
`;

export const Icon = styled.img`
  width: 45px;
  height: auto;
`;
