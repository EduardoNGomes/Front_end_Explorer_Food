import { Container } from "./style";

export const Button= ({title, ...rest}) => {
  return(
    <Container {...rest}>
      {title}
    </Container>
  )
}