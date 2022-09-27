import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  color: white;
  font-size: 40px;

  h2 {
    margin: 40px 0;
    line-height: 44px;
    font-size: 3.2rem;
    font-weight: 500;
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
  }

  .slideshow-cards {
    position: relative;

    .cards {
      overflow-x: auto;
      display: flex;
      gap: 30px;
      scroll-behavior: smooth;
    }

    .scroll-left,
    .scroll-right {
      color: rgba(255, 255, 255, 0.2);
      position: absolute;
      height: 100%;
      background: transparent;
      border: none;
      padding: 0.5rem;
      /* display: flex;
      justify-content: center; */
    }

    .scroll-left:hover,
    .scroll-right:hover {
      background-color: rgba(0, 0, 0, 0.3);
      color: rgba(255, 255, 255, 1);
    }

    .scroll-left {
      left: 0px;
    }

    .scroll-right {
      right: 0px;
    }

    .disable {
      display: none;
    }
  }
`
