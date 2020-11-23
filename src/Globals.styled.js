import { createGlobalStyle } from 'styled-components'
import breakpoints from './breakpoints'
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 120%;
    line-height: 1.75;
    --mobile-width: 400px;
    font-family: 'Raleway', sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }


  html, body, #root {
    overflow: hidden;
    height: 100vh;
  }

  h1, h2, h3, h4, h5 {
    margin: 0 0 20px 0;
    padding: 0px;
  }

  #root {
    opacity: 1;
    @media(min-width: ${breakpoints.mobile}){
      display: grid;
      grid-template-areas: 'nav main';
      grid-template-columns: 500px 1fr;
    }
    @media(max-width: ${breakpoints.mobile}){
      display: grid;
      grid-template-areas: 'main' 'nav';
      grid-template-rows: 1fr auto;
    }

  }

  .vert-scroll {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
  }
`
