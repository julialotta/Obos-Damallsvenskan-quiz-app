import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { colors } from "./Styling/Mixins";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: IStylingProps) => props.color || colors.White};
  background-color: ${(props: IStylingProps) =>
    props.background || colors.BackgroundBlue};
  margin: ${(props: IStylingProps) => props.margin || "10px"};
  width: ${(props: IStylingProps) => props.width || "150px"};
  height: ${(props: IStylingProps) => props.height || "40px"};
  padding: ${(props: IStylingProps) => props.padding || "15px"};
  border: ${(props: IStylingProps) => props.border || "none"};
  border-radius: ${(props: IStylingProps) => props.borderRad || "11pt"};
  box-shadow: ${(props: IStylingProps) => props.shadow || 0};
  color: ${(props: IStylingProps) => props.hoverColor || colors.White};
  @media (hover: hover) {
    :hover {
      background-color: ${(props: IStylingProps) =>
        props.hoverBackground || colors.BackgroundBlue};

      cursor: ${(props: IStylingProps) => props.hover || "pointer"};
      transform: ${(props: IStylingProps) => props.transform || "scale(1.05)"};
      transition: transform 330ms ease-in-out;
      color: ${(props: IStylingProps) => props.hoverColor || colors.White};
      a {
        color: ${(props: IStylingProps) => props.hoverColor || colors.White};
      }
    }
  }
  a {
    text-decoration: none;
    color: ${(props: IStylingProps) => props.color || colors.White};
  }
  h3 {
    text-decoration: none;
  }
`;
