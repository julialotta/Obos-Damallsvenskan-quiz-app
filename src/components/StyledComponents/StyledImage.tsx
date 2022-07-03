import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";

export const StyledImage = styled.img`
  width: ${(props: IStylingProps) => props.width || "100%"};
  height: ${(props: IStylingProps) => props.height || "100%"};
  object-fit: ${(props: IStylingProps) => props.objectFit || "fill"};
  border-radius: ${(props: IStylingProps) => props.borderRad || "0"};
  filter: drop-shadow(${(props: IStylingProps) => props.shadow || 0});
  -webkit-filter: drop-shadow(${(props: IStylingProps) => props.shadow || 0});

  :hover {
    transform: ${(props: IStylingProps) => props.transform || "scale(1)"};
    transition: transform 330ms ease-in-out;
  }
`;
