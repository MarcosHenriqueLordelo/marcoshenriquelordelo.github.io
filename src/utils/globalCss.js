import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
}
html {
    color: ${({ theme }) => theme.colors.font};
    font-family: 'Roboto';
    font-size: 62.5%;
    
    @media(max-width:1200px){ //width < 1200
        font-size: 56.25%; //1rem = 9px, 9/16 = 56.25%
    }
    @media(max-width:900px) { //width < 900
        font-size: 50%; //1rem = 8px, 8/18 = 50%
    }
    @media(min-width:1800px) {
        font-size: 100%; //1rem = 12, 12/16 = 75%
    }
}

body {
    background-color: ${({ theme }) => theme.colors.background};
    @media(max-width:900px) { 
        padding: 0;
    }
}

::selection {
    background-color: ${({ theme }) => theme.colors.action};
    color: ${({ theme }) => theme.colors.section};
}`;
