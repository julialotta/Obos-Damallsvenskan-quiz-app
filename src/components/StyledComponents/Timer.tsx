import styled from "styled-components";
// tanke - gör om animationerna till props så att de körs im vid varje ny rendering?

// https://linguinecode.com/post/how-to-add-react-animation

export const Timerwrapper = styled.div`
  position: relative;
  height: 17px;
  width: 70%;
  border: 2px solid #192b41;
  border-radius: 11px;
  display: flex;
  align-items: center;

  .bar {
    position: absolute;
    right: 0;
    background-color: #192b41;
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
    //top: 0;
    left: -6px;
    animation: ball 25s;
  }
  .baranimation {
    animation: bar 25s;
  }
  .resetbar {
    background-color: white;
    //background-color: #c1c4ca;
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
      width: 100%;
    }

    100% {
      width: 7.5%;
    }
  } ;
`;
