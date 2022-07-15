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

  .color {
    position: absolute;
    right: 0;
    background-color: #192b41;
    width: 0px;
    height: 17px;
    margin: 0;
    border-radius: 10px;
    animation: progres 20s infinite;
  }
  .ball {
    position: relative;
    animation: ball 20s infinite;
    z-index: 100;
    top: 0;
  }

  @keyframes ball {
    0% {
      left: 0%;
    }
    10% {
      left: 10%;
    }
    20% {
      left: 20%;
    }
    30% {
      left: 30%;
    }
    40% {
      left: 40%;
    }
    50% {
      left: 50%;
    }
    60% {
      left: 60%;
    }
    70% {
      left: 70%;
    }
    80% {
      left: 80%;
    }
    90% {
      left: 90%;
    }
    100% {
      left: 95%;
    }
  }
  @keyframes progres {
    0% {
      width: 100%;
    }
    10% {
      width: 90%;
    }
    20% {
      width: 80%;
    }
    30% {
      width: 70%;
    }
    40% {
      width: 60%;
    }
    50% {
      width: 50%;
    }
    60% {
      width: 40%;
    }
    70% {
      width: 30%;
    }
    80% {
      width: 20%;
    }
    90% {
      width: 10%;
    }
    100% {
      width: 5%;
    }
  } ;
`;
