import { Container } from "./style";

import { FaCircle } from 'react-icons/fa'


export const OrderStatus = ({title}) => {

  const whatIsTheColor = () => {
    switch(title){
      case 'Pendente':
        return 'red'
      case 'Preparando':
        return 'yellow'
      case 'Entregue':
        return 'green'
    }
  }

  return(
    <Container>
      <FaCircle
        color={whatIsTheColor()}
        size={10}
      />
      {title}
    </Container>
  )
}