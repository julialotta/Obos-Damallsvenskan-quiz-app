import styled from "styled-components";
import { colors } from "./Styling/Mixins";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 20px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${colors.TextBlue};
`;
export const Input = styled.input`
  border: 2px solid ${colors.ButtonBlue};
  background-color: ${colors.White};
  padding: 7px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.TextBlue};
  :active {
    border: 2px solid ${colors.ButtonBlue};
  }
  :hover {
    cursor: pointer;
  }
`;
