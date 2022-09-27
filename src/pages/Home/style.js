import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 70px auto 50px;
  grid-template-areas:
    'header'
    'content'
    'footer';

  overflow-y: auto;
`

export const Content = styled.div`
  grid-area: content;

  margin: 164px auto;
  width: 100%;
  max-width: 1120px;

  .banner {
    position: relative;
    width: 100%;
    height: 260px;

    padding: 50px;

    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    border-radius: 8px;

    display: flex;

    justify-content: flex-end;
    align-items: center;

    img {
      width: 600px;
      position: absolute;
      left: -50px;
      bottom: 0;
    }

    .text-banner {
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
      font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};

      h2 {
        font-size: 4rem;
        font-weight: 500;
        line-height: 140%;
      }

      p {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 140%;
      }
    }
  }
`
