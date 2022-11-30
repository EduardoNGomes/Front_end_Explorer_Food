import { useAuth } from "../../hooks/auth";
import { Container } from "./style";


export const Button= ({title,Icon = false, ...rest}) => {
  const {loading} = useAuth()

  return(
    <Container 
      type="button" 
      disabled={loading}
      loading={loading}
      {...rest}
    >
      {Icon && <Icon size={20}/>}
      {loading ? 'AGUARDE' : title}
    </Container>
  )
}