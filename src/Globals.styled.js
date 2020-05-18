import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }


  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5 {
    margin: 0 0 20px 0;
    padding: 0px;
  }
  .base-layout {
    display: flex;
    font-family: 'Raleway', sans-serif;
    max-width: 900px;
    margin: 0 auto;
    line-height: 26px;
    height: 100%;
  }
  .nav {
      flex-shrink: 1;
      padding: 30px;
  }

  @media only screen and (max-width: 900px) {
      .base-layout {
          justify-content: space-between;
          flex-direction: column;
      }
      .nav { display: none; }
  }
  .nav > div {
      padding-bottom: 10px;
  }

  .profile-pic {
      max-width: 120px;
  }

  .main-content {
      flex-grow: 4;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 30px;
      height: 100%;
  }

  .mobile-nav {
      display: flex;
      padding: 5px 0px;
      justify-content: flex-start;
  }
  .mobile-nav__links a {
      padding: 0px 15px;
      line-height:30px;
  }

  .mobile-nav__links {
      -webkit-transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      display: inline-block;
      overflow: hidden;
      height: 30px;
  }

  .mobile-nav__toggle {
      flex-shrink: 1;
      height: 30px;
      font-size: 30px;
      text-align: center;
      cursor: pointer;
      padding: 0px 0px;
  }
`
