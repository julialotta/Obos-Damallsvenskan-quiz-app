import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { colors } from "./Styling/Mixins";

export const StyledTopHeading = styled.h1`
  color: ${(props: IStylingProps) => props.color || colors.White};
  text-decoration: none;
  text-align: center;
  font-size: 44px;
  margin: ${(props: IStylingProps) => props.margin || "0px"};
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
`;

export const StyledHeadingh3 = styled.h3`
  color: ${(props: IStylingProps) => props.color || colors.White};
  font-size: 18px;
  text-align: center;
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
`;
export const StyledHeadingh5 = styled.h5`
  color: ${(props: IStylingProps) => props.color || colors.White};
  font-size: 20px;
  text-align: center;
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
`;

export const StyledP = styled.p`
  color: ${(props: IStylingProps) => props.color || colors.White};
  text-align: center;
  line-height: 22px;
  margin: ${(props: IStylingProps) => props.margin || "5px"};
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
`;
