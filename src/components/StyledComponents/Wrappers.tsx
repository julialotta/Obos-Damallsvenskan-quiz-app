import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";

export const FlexDiv = styled.div`
  display: flex;
  position: ${(props: IStylingProps) => props.position || ""};
  flex-direction: ${(props: IStylingProps) => props.dir || "row"};
  align-items: ${(props: IStylingProps) => props.align || "center"};
  justify-content: ${(props: IStylingProps) => props.justify || "center"};
  flex-wrap: ${(props: IStylingProps) => props.wrap || "nowrap"};
  background-color: ${(props: IStylingProps) => props.background || "none"};
  width: ${(props: IStylingProps) => props.width || "100%"};
  min-width: ${(props: IStylingProps) => props.minWidth || ""};
  min-height: ${(props: IStylingProps) => props.minHeight || ""};
  height: ${(props: IStylingProps) => props.height || "100%"};
  gap: ${(props: IStylingProps) => props.gap || "0"};
  margin: ${(props: IStylingProps) => props.margin || "0"};
  padding: ${(props: IStylingProps) => props.padding || "0"};
  border-radius: ${(props: IStylingProps) => props.borderRad || "0"};
  z-index: ${(props: IStylingProps) => props.z || "auto"};
`;

export const BubbleDiv = styled.div`
  &:after {
    content: "";
    border-top-left-radius: 125% 45%;
    border-top-right-radius: 125% 45%;
    position: absolute;
    bottom: -50px;
    z-index: 0;
    width: 100%;
    background-color: white;
    height: ${(props: IStylingProps) => props.height || "53%"};
    padding: 100px 0 0 0;
  }
`;

export const AppWrapper = styled.div`
  background-color: black;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;
