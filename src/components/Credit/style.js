import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-size: 3rem;
  color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};

  .creditCardNumber {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }
  input {
    padding: 15px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background: transparent;
  }

  button {
    justify-content: center;
  }
`

export const OtherInformation = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }
`
