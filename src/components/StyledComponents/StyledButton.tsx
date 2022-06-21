import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { fonts } from "./Styling/Mixins";
import { colors } from "./Styling/Mixins";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: IStylingProps) => props.color || colors.White};
  background-color: ${(props: IStylingProps) =>
    props.background || colors.DarkBlue};
  margin: ${(props: IStylingProps) => props.margin || "10px"};
  width: ${(props: IStylingProps) => props.width || "150px"};
  height: ${(props: IStylingProps) => props.height || "40px"};
  padding: ${(props: IStylingProps) => props.padding || "15px"};
  border: none;
  border-radius: ${(props: IStylingProps) => props.borderRad || "5px"};
  font-family: ${fonts.thick};
  :hover {
    background-color: ${(props: IStylingProps) =>
      props.hoverBackground || colors.DarkBlue};
    color: ${(props: IStylingProps) => props.hoverColor || colors.White};
    cursor: ${(props: IStylingProps) => props.hover || "pointer"};
    transform: ${(props: IStylingProps) => props.transform || "scale(1.05)"};
    transition: transform 330ms ease-in-out;
  }
  a {
    font-family: ${fonts.thick};
    text-decoration: none;
    color: ${(props: IStylingProps) => props.color || colors.White};
  }
`;
