import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
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

  margin: 50px auto;
  width: 100%;
  max-width: 1120px;

  /* display: flex;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'orders payment';

  .orders {
    grid-area: orders;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h4 {
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 45px;
      font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    }

    .scroll {
      overflow-y: auto;
      width: 80%;

      height: 50vh;
    }

    .foods {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 10px;

      img {
        width: 100px;
      }

      .infos {
        display: flex;
        gap: 5px;
        .quantity,
        .name {
          color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
          font-weight: 500;
          font-size: 2rem;
          font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
          line-height: 32px;
        }

        .value {
          display: inline-block;
          font-size: 1.2rem;
          line-height: 20px;
          font-weight: 400;

          color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};

          font-family: ${({ theme }) => theme.COLORS.FONT_TITLE};
        }
      }

      button {
        margin-top: 5px;
        color: ${({ theme }) => theme.COLORS.RED};
      }
    }

    h5 {
      font-weight: 500;
      font-size: 2rem;
      line-height: 45px;
      font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    }
  }

  .payments {
    grid-area: payment;

    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h4 {
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 45px;
      font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    }
  }
`
