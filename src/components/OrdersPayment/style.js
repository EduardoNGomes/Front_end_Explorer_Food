import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #192227;

  .pay {
    display: flex;

    > button {
      margin: 0;
      width: 100%;
      border: 1px solid white;
      padding: 10px 30px;

      font-size: 1.6rem;
      font-weight: 400;
      line-height: 16px;

      justify-content: center;

      :hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
`
export const Image = styled.div`
  margin: 100px;

  h3 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    text-align: center;
  }

  .disable {
    display: block;
  }
`
