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

  .wrapper {
    display: flex;
    width: 100%;
  }
  .files {
    width: 40%;

    input[type='file'] {
      display: none;
    }
    label {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }
  }
`
