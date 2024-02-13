import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  beige: '#FFF8F2',
  darkBeige: '#FFEBD9',
  salmon: '#E66767'
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

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalCss
