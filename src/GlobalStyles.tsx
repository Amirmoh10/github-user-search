import { createGlobalStyle } from "styled-components";
import { LightColors } from "./Components/App/Styles/Colors/LightColors";

export const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, p {
    margin: 0;
    padding: 0;
    font-family: "Space Mono";
    font-weight: normal;
  }

  input, button {
    font-family: "Space Mono";
  }

  body{
    background-color: ${LightColors.ghostWhite};
    padding: 0 calc((100vw - 730px) / 2 );
    @media only screen and (max-width: 375px) {
      & {
        display: flex;
        
      }
    }
  }
`;
