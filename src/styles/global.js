import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
  font-size: 66.5%;
  font-family: ${({ theme }) => theme.COLORS.FONT_TITLE};

  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }
  
  button:hover, a:hover {
    filter: brightness(.9);
  }
`
