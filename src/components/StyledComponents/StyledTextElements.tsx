import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { colors, fonts } from "./Styling/Mixins";

export const StyledTopHeading = styled.h1`
  color: ${colors.DarkBlue};
  font-family: ${fonts.thick};
  text-decoration: none;
  text-align: center;
  font-size: 44px;
`;

export const StyledHeadingh3 = styled.h3`
  font-family: ${fonts.thick};
  color: ${colors.DarkBlue};
  font-size: 18px;
  text-align: center;
`;
export const StyledHeadingh5 = styled.h5`
  font-family: ${fonts.thick};
  color: ${colors.White};
  font-size: 20px;
  text-align: center;
`;

export const StyledP = styled.p`
  color: ${colors.DarkBlue};
  font-family: ${fonts.thin};
  text-align: center;
  line-height: 22px;
  margin: ${(props: IStylingProps) => props.margin || "5px"};
`;
