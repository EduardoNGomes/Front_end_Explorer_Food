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

  h2 {
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 44px;
    margin-bottom: 50px;
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
  }

  .scroll {
    overflow-y: auto;
    height: 60vh;
    padding-right: 10px;
  }

  table,
  tr,
  td,
  th {
    border: 1px solid #192227;
  }

  table {
    border-spacing: 0;
    border-collapse: separate;
    border: 1px solid #192227;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
  }

  th {
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    padding: 20px 30px;
    text-align: left;
    font-size: 1.6rem;
    font-weight: 700;
  }

  th:first-child {
    border-top-left-radius: 8px;
  }

  th:last-child {
    border-top-right-radius: 8px;
  }

  td {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};

    font-size: 2rem;
    line-height: 22px;
    font-weight: 400;
    line-height: 22px;
    padding: 20px 30px;
  }

  span {
    font-size: 1.6rem;
    line-height: 22px;
    font-weight: 400;
    line-height: 22px;
  }
`
