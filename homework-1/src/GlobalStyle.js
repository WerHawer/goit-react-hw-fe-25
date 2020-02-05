import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@font-face {
    font-family:'Roboto' ;
    src: url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');
}

html {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;

}

*,
*::before,
*::after {
    box-sizing: inherit;
}
* {
    margin: 0;
    padding: 0;
}

body {
    padding-top: 40px;
}
`;
