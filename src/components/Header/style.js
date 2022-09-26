import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  padding: 1rem 10rem;
`

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1280px;
  gap: 3.2rem;

  > .logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 50%;
    h2 {
      font-weight: 700;
      font-size: 2.5rem;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
      line-height: 30px;
    }
  }
  .favorites {
    margin: 0;
    width: 30%;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
  }

  .search {
    display: flex;
    width: 100%;
    align-items: center;

    background-color: #0d1d25;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    input {
      padding: 0.5rem;
      width: 100%;

      background-color: transparent;
      border: none;

      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};

      :focus {
        outline: none;
      }
    }
  }
  .request {
    width: 30%;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .exit {
    align-items: center;
    background: transparent;
    border: none;
  }
`
