import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  padding: 1rem 10rem;
  grid-area: header;

  margin: 0 auto;
  display: flex;
  gap: 3.2rem;

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 30%;
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
    width: 20%;
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

  @media (max-width: 360px) {
    padding: 10px;
    display: grid;
    gap: 15px;
    height: 200px;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 50px 50px;
    grid-template-areas:
      'favorites request exit'
      'logo logo logo'
      'search search search';
    .logo {
      grid-area: logo;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    .search {
      width: 100%;
      grid-area: search;
    }

    .favorites {
      width: 100%;
      font-size: 1.4rem;
      grid-area: favorites;
    }

    .request {
      width: 100%;
      font-size: 1.4rem;

      grid-area: request;
    }

    .exit {
      width: 100%;
      width: 20px;
      margin: 0 auto;
      grid-area: exit;
    }
  }
`
