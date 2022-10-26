import { Container } from "./style";

export const Button= ({title,Icon = false, ...rest}) => {
  return(
    <Container 
      type="button" 
      {...rest}
    >
      {Icon && <Icon size={20}/>}
      {title}
    </Container>
  )
}