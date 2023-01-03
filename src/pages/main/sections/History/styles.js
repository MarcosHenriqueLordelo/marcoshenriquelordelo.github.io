import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const HistoryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.larger};
  text-transform: uppercase;
  border-bottom: 3px solid ${({ theme }) => theme.colors.action};
  width: fit-content;
  align-self: center;
  margin-top: 30px;
  letter-spacing: 3px;
`;

export const HistoryContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px;
`;

export const UpArrow = styled.div`
  border-radius: 100%;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 30px solid ${({ theme }) => theme.colors.action};
  position: absolute;
  left: 50%;
  top: -10px;
  transform: translateX(-50%);
`;

export const DividerLine = styled.div`
  width: 10px;
  background-color: ${({ theme }) => theme.colors.action};
  border-radius: 10px;
  margin: 0px 36px;
  position: relative;
`;

export const HistoryLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HistoryRight = styled.div`
  flex: 1;
`;

export const EmptySpace = styled.div`
  width: auto;
  height: ${({ height }) => height}px;
`;
