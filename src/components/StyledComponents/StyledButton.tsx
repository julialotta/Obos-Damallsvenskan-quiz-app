import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { fonts } from "./Styling/Mixins";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: IStylingProps) => props.color || "white"};
  background-color: ${(props: IStylingProps) => props.background || "darkblue"};
  margin: ${(props: IStylingProps) => props.margin || "10px"};
  width: ${(props: IStylingProps) => props.width || "150px"};
  height: ${(props: IStylingProps) => props.height || "40px"};
  padding: ${(props: IStylingProps) => props.padding || "15px"};
  border: none;
  border-radius: 5px;
  font-family: ${fonts.thick};
  :hover {
    background-color: ${(props: IStylingProps) =>
      props.hoverBackground || "darkblue"};
    color: ${(props: IStylingProps) => props.hoverColor || "white"};
    cursor: ${(props: IStylingProps) => props.hover || "pointer"};
  }
  a {
    font-family: ${fonts.thick};
    text-decoration: none;
    color: ${(props: IStylingProps) => props.color || "white"};
  }
`;
