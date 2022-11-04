import { Link } from "react-router-dom";
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
  text-transform: ${(props: IStylingProps) => props.textTransform || "none"};
  font-size: ${(props: IStylingProps) => props.fontSize || "30px"};
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
  margin: ${(props: IStylingProps) => props.margin || "5px"};
  line-height: ${(props: IStylingProps) => props.lineheight || "default"};
`;

export const StyledHeadingh5 = styled.h5`
  color: ${(props: IStylingProps) => props.color || colors.White};
  text-align: center;
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
  text-transform: ${(props: IStylingProps) => props.textTransform || "none"};
  margin: ${(props: IStylingProps) => props.margin || "5px"};
  font-family: "GothamBookRegular";
  font-weight: bold;
  text-align: ${(props: IStylingProps) => props.textAlign || "center"};
  font-size: ${(props: IStylingProps) => props.fontSize || "default"};
`;

export const StyledP = styled.p`
  color: ${(props: IStylingProps) => props.color || colors.White};
  text-align: center;
  line-height: 22px;
  margin: ${(props: IStylingProps) => props.margin || "5px"};
  font-size: ${(props: IStylingProps) => props.fontSize || "15px"};
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
  font-family: ${(props: IStylingProps) => props.font || "GothamLight"};
  text-transform: ${(props: IStylingProps) => props.textTransform || "none"};
`;

export const StyledLink = styled(Link)`
  font-family: ${(props: IStylingProps) => props.font || "GothamLight"};
  color: ${(props: IStylingProps) => props.color || colors.White};
  text-align: center;
  line-height: 22px;
  margin: ${(props: IStylingProps) => props.margin || "5px"};
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
  text-decoration: ${(props: IStylingProps) => props.decoration || "none"};
  h3 {
    text-decoration: none;
  }
`;

export const StyledAnchor = styled.a`
  font-family: ${(props: IStylingProps) => props.font || "GothamLight"};
  color: ${(props: IStylingProps) => props.color || colors.White};
  text-align: center;
  line-height: 22px;
  margin: ${(props: IStylingProps) => props.margin || "5px"};
  text-shadow: ${(props: IStylingProps) => props.shadow || 0};
  text-decoration: ${(props: IStylingProps) => props.decoration || "none"};
  button {
    text-decoration: none;
  }
`;
