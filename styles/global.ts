import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --cyan: hsl(180, 66%, 49%);
    --dark-violet: hsl(257, 27%, 26%);

    --red: hsl(0, 87%, 67%);

    --gray: hsl(0, 0%, 75%);
    --grayish-violet: hsl(257, 7%, 63%);
    --very-dark-blue: hsl(255, 11%, 22%);
    --very-dark-violet: hsl(260, 8%, 14%);

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 18px;

    @media (max-width: 1080px) {
      font-size: 83.33% // 15px
    }

    @media (max-width: 720px) {
      font-size: 77.77% // 14px
    }
  }

  body {
    background: white;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`