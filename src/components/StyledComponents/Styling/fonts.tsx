import GothamBlackRegular from "../../../fonts/Gotham-Black-Regular.ttf";
import GothamBookRegular from "../../../fonts/Gotham-Book-Regular.otf";
import GothamBook from "../../../fonts/Gotham-Book.ttf";
import GothamLight from "../../../fonts/Gotham-Light.otf";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GothamBlackRegular';
    src: url(${GothamBlackRegular}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'GothamBookRegular';
    src: url(${GothamBookRegular}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'GothamBook';
    src: url(${GothamBook}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'GothamLight';
    src: url(${GothamLight}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
  h1 {
    font-family: 'GothamBlackRegular';
    text-transform: uppercase;
}
  h3 {
    font-family: 'GothamBlackRegular';
}
p {
    font-family: 'GothamLight';
  }
a, button {
    font-family: 'GothamBlackRegular';
  }
`;
