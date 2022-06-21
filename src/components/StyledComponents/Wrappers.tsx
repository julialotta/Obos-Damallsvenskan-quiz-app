import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { colors } from "./Styling/Mixins";

export const FlexDiv = styled.div`
  display: flex;
  position: ${(props: IStylingProps) => props.position || ""};
  flex-direction: ${(props: IStylingProps) => props.dir || "row"};
  align-items: ${(props: IStylingProps) => props.align || "center"};
  justify-content: ${(props: IStylingProps) => props.justify || "center"};
  flex-wrap: ${(props: IStylingProps) => props.wrap || "nowrap"};
  background-color: ${(props: IStylingProps) => props.background || "none"};
  width: ${(props: IStylingProps) => props.width || "100%"};
  height: ${(props: IStylingProps) => props.height || "100%"};
  gap: ${(props: IStylingProps) => props.gap || "0"};
  margin: ${(props: IStylingProps) => props.margin || "0"};
  padding: ${(props: IStylingProps) => props.padding || "0"};
  border-radius: ${(props: IStylingProps) => props.borderRad || "0"};
  z-index: ${(props: IStylingProps) => props.z || "auto"};
  bottom: ${(props: IStylingProps) => props.bottom || 0};
  box-shadow: ${(props: IStylingProps) => props.shadow || 0};
  min-height: ${(props: IStylingProps) => props.minHeight || 0};
`;

export const AppWrapper = styled.div`
  background-color: ${colors.DarkBlue};
  min-height: 100vh;
  padding: 0;
  overflow-x: hidden;
`;
