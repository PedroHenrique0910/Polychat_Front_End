import { createGlobalStyle } from "styled-components";

const myGlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-image: linear-gradient(to right, #5D0382, #2C12A4, #07045D);

  }
`;

export default myGlobalStyles;