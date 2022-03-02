import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  #root {
    min-height: 100vh;
    height: 100%;
  }

  body {
    height: 100%;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bebas Neue', cursive;
  }
  
  button {
    cursor: pointer;
  }
`

export default GlobalStyle
