import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Kanit", sans-serif;
        scroll-behavior: smooth;
    }
    :root {
        font-size:62.5%;
    }
    body{
      font-size:1.6rem;
      background: ${props => props.theme.HomeCorFundo};
      width: 100%;
      
    } 
    


    


`