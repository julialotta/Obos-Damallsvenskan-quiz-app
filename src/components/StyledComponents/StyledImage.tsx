import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";

export const StyledImage = styled.img`
  width: ${(props: IStylingProps) => props.width || "100px"};
  height: ${(props: IStylingProps) => props.height || "100px"};
  object-fit: ${(props: IStylingProps) => props.objectFit || "cover"};
  border-radius: 50%;
  filter: brightness(90%) contrast(75%);
  border-radius: ${(props: IStylingProps) => props.borderRad || "0"};
`;
