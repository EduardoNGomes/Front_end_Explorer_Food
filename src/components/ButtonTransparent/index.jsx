import { Container } from "./style";

export const ButtonTransparrent = ({title,Icon = false, iconSize = false,  ...rest}) =>{
  return(
    <Container {...rest}>
      {Icon && <Icon size={iconSize}/>}
      {title}
    </Container>
  )
}