import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.RED};

  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
  line-height: 24px;

  border: none;
  border-radius: 5px;

  padding: 12px;
`
