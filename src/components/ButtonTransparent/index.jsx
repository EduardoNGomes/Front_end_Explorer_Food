import { Container } from "./style";

export const ButtonTransparrent = ({title, ...rest}) =>{
  return(
    <Container {...rest}>
      {title}
    </Container>
  )
}