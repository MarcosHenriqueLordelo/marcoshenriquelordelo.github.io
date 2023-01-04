import React from "react";
import styled from "styled-components";

const Button = styled.div`
  position: fixed;
  top: 3rem;
  right: 3rem;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 10;

  transition: all 1s ease;

  &::before {
    transition: all 0.5s ease;
    content: "";
    position: absolute;
    top: 7px;
    width: 100%;
    height: 2px;
    background-color: #f2f2f2;
  }

  &::after {
    transition: all 0.5s ease;
    content: "";
    position: absolute;
    bottom: 7px;
    width: 100%;
    height: 2px;
    background-color: #f2f2f2;
  }

  &.active::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &.active::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  @media (max-width: 900px) {
    left: 1rem;
    top: 1rem;
  }
`;

const ToggleBtn = ({ onClick, active }) => {
  return <Button className={active && "active"} onClick={onClick} />;
};

export default ToggleBtn;
