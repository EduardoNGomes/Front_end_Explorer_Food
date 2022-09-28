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
`
