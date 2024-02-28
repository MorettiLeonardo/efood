import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  beige: '#FFF8F2',
  darkBeige: '#FFEBD9',
  salmon: '#E66767',
  black: '#000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${colors.beige};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
      width: 100%;
    }
  }
`

export default GlobalCss
