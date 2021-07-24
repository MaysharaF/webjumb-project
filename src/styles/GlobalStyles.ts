import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --white: #FFFFFF;

    --gray-150: #E3DEDA;
    --gray-350: #ADADAC;

    --red-600: #CD0C1F;

    --orange-400: #F36225;

    --brown-900: #231F20;

    --teal-200:#81BCB8;
    --teal-350: #28A3AA;
  }



  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;


    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
  }

  body {
   background: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Open Sans',  sans-serif; 
    border: 0;
    background: none;
    outline: none;
  
  }

  #root {
    height: 100vh;
    width: 100vw;
  }

  button {
    cursor: pointer;
  }

`;
