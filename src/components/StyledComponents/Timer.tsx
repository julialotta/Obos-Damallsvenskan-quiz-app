import styled from "styled-components";
import { colors } from "./Styling/Mixins";

export const Timerwrapper = styled.div`
  position: relative;
  height: 17px;
  width: 63%;
  border: 2px solid #192b41;
  border-radius: 11px;
  display: flex;
  align-items: center;

  .bar {
    position: absolute;
    right: 0;
    width: 0px;
    height: 17px;
    margin: 0;
    border-radius: 10px;
  }

  .ballanimation {
    position: relative;
    z-index: 100;
    background-color: black;
    border-radius: 30px;
    border: none;
    left: -6px;
    animation: ball 20s linear;
  }
  .baranimation {
    animation: bar 20s linear;
  }
  .resetbar {
    background-color: ${colors.White};
    width: 100%;
  }

  .resetball {
    display: none;
  }

  @keyframes ball {
    0% {
      left: 0%;
    }

    100% {
      left: 92.5%;
    }
  }

  @keyframes bar {
    0% {
      background-color: ${colors.ButtonBlue};
      width: 100%;
    }
    69% {
      background-color: ${colors.ButtonBlue};
    }
    70% {
      background-color: ${colors.WronglyRed};
    }

    100% {
      background-color: ${colors.WronglyRed};
      width: 7.5%;
    }
  } ;
`;
