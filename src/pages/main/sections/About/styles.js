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

  @media (max-width: 900px) {
    padding: 1rem;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export const PresentationContainer = styled.div`
  max-width: 50vw;

  @media (max-width: 900px) {
    max-width: 90%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Gradient = styled.div`
  position: absolute;
  width: 6rem;
  height: 6rem;
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
  text-align: center;
  margin-bottom: 1rem;
`;

export const ActionSpan = styled.span`
  color: ${({ theme }) => theme.colors.action};
`;

export const Presentation = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 100%;
  max-width: 26rem;
  height: auto;
  border-radius: 100%;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  a:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

export const Icon = styled.img`
  width: 2.8rem;
  height: auto;
`;
