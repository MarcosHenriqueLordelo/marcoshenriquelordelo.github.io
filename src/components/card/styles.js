import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 35rem;

  --moz-perspective: 150rem;
  perspective: 150rem;
  position: relative;

  &:hover {
    .front {
      transform: rotateY(-180deg);
    }
    .back {
      transform: rotateY(0deg);
    }
  }
`;

export const CardSide = styled.div`
  width: 30rem;
  height: 35rem;

  display: flex;
  flex-direction: column;

  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  background-color: red;

  border-radius: 0.4rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

  transition: all 0.8s ease-out;

  backface-visibility: hidden;

  padding: 2rem 1.5rem;

  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  &.front {
    background-color: ${({ theme }) => theme.colors.section};
  }

  &.back {
    transform: rotateY(180deg);

    background-image: linear-gradient(
      to bottom right,
      ${({ theme }) => theme.colors.action},
      ${({ theme }) => theme.colors.section}
    );
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  font-weight: normal;
  letter-spacing: 0.1rem;
`;

export const Image = styled.img`
  width: 7rem;
  height: auto;
  margin-bottom: 1.6rem;
`;

export const Body = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  text-align: center;
  margin: 1.6rem;
  line-height: 1.6rem;
`;

export const BackContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Technology = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  &:not(:first-child) {
    margin-top: 1.8rem;
  }
`;
