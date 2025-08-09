import { createGlobalStyle } from "styled-components";

const myGlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
  }
`;

export default myGlobalStyles;