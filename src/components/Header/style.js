import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  padding: 1rem 15rem;
  grid-area: header;

  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr 3fr 1fr 1fr;
  grid-template-areas: 'logo favorites search request exit';
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
  .favorites {
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

    align-items: center;
    background: transparent;
    border: none;
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

    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-template-areas:
      'logo favorites request exit'
      'search search search search';

    .logo {
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    .favorites {
      width: 100%;
      font-size: 1.4rem;
      grid-area: favorites;
    }

    .request {
      width: 100%;
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

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 50px 50px;
    grid-template-areas:
      'favorites request exit'
      'logo logo logo'
      'search search search';
  }
`
