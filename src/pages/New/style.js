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
`

export const Content = styled.div`
  grid-area: content;

  margin: 50px auto;
  width: 100%;
  max-width: 1120px;

  h2 {
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
    margin: 20px 0 30px;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 45px;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 50px;

    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
  }

  .wrapper {
    display: flex;
    gap: 30px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
  }
  .files {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 30%;

    font-size: 2rem;
    font-weight: 400;

    line-height: 16px;

    input[type='file'] {
      display: none;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 10px;

      border: 1px solid ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
      border-radius: 5px;

      font-size: 1.4rem;
      font-weight: 500;
      line-height: 24px;

      :hover {
        color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
        border: 1px solid ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
      }
      cursor: pointer;
    }
  }

  .inputs-box {
    width: 100%;
  }
  .ingredients {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;

    font-size: 2rem;
    font-weight: 400;

    line-height: 16px;
  }

  .tags {
    display: flex;
    gap: 10px;
    background: transparent;
    padding: 5px;

    border: 1px solid ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
    border-radius: 5px;
  }

  .price {
    width: 30%;
  }

  .textarea {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 2rem;
  }
  textarea {
    width: 100%;
    height: 150px;
    resize: none;
    background: transparent;

    border-radius: 5px;

    padding: 5px;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
  }

  .add {
    align-self: flex-end;
    width: 30%;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
    border-radius: 8px;
    line-height: 24px;
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
  }
`
