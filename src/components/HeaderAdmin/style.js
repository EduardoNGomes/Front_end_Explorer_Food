import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  padding: 1rem 15rem;
  grid-area: header;

  display: grid;
  align-items: center;
  grid-template-columns: 1.5fr 1fr 3.5fr 1fr 0.5fr 0.5fr;
  grid-template-areas: 'logo new search request shop-cart exit';

  gap: 3.2rem;

  .logo {
    margin: 0;
    grid-area: logo;

    gap: 1rem;

    font-weight: 700;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    line-height: 30px;

    svg {
      color: #065e7c;
    }
  }
  .new {
    margin: 0;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
  }

  .search {
    grid-area: search;

    display: flex;
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
    grid-area: request;

    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .exit {
    grid-area: exit;
    margin: 0;
  }

  @media (max-width: 1280px) {
    padding: 1rem 10rem;
  }

  @media (max-width: 1024px) {
    display: grid;
    width: 100%;
    gap: 5px;

    padding: 10px;
    height: 200px;

    align-items: center;

    grid-template-columns: 1fr 1.5fr 0.5fr;
    grid-template-areas:
      'logo  search  exit'
      'request request request';

    .logo {
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    .request {
      margin: 0 auto;
      width: 60%;
      font-size: 1.4rem;
    }

    .exit {
      width: 100%;
      width: 20px;
      margin: 0 auto;
    }
  }
  @media (max-width: 400px) {
    padding: 10px;
    display: grid;

    .request {
      width: 60%;
    }
    .search {
      margin: 0 auto;
      width: 80%;
    }

    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: 50px 50px 50px;
    grid-template-areas:
      'logo  exit'
      'search search '
      'request request ';
  }
`
