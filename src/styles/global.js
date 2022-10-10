import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
  font-size: 66.5%;
  font-family: ${({ theme }) => theme.COLORS.FONT_TITLE};

  outline: none;

  ::-webkit-scrollbar {
      width: 8px;
 
    }
  
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, .6);

      border-radius: 8px;      
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, .6);
      border-radius: 8px;

    }
  
    ::-webkit-scrollbar-thumb:hover {
      background-color: white;
    }

  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }
  
  button:hover, a:hover {
    filter: brightness(.7);
  }
`
