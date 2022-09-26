import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 30rem;
  justify-content: center;
`
export const Content = styled.div`
  display: flex;
  gap: 1.9rem;
  align-self: center;
  h1 {
    font-size: 4.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
  }
`
