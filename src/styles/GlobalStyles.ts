import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --white: #FFFFFF;

    --gray-150: #E3DEDA;
    --gray-350: #ADADAC;

    --red-600: #CD0C1F;

    --orange-400: #F36225;

    --teal-200:#81BCB8;
    --teal-350: #28A3AA;
  }



  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
   
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Open Sans',  sans-serif; 
  }

  #root {
    max-height: 100vh;
    max-width: 100vw;
  }

  button {
    cursor: pointer;
  }

`;
