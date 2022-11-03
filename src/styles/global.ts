import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  outline: none;
}

body{
  background: ${props => props.theme["base-background"]};
  color: ${props => props.theme["base-text"]};
  -webkit-font-smoothing: antialiased;
}

body,input, textarea, button{
  font-weight: 400;
  font-size: 1.6rem;
  font-family: 'Nunito', sans-serif;
}
button {
  cursor: pointer;
}

html{
    font-size: 62.5%;
  }

`