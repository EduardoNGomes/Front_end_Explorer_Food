import { Container } from "./style";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { BiHeart } from 'react-icons/bi'

export const Card = ({title, img, description, price, ...rest}) => {
  return(
    <Container {...rest}>

      <BiHeart
        size={30}
        className='icon'
      />

      <img src={img} alt="" />
      
      <ButtonTransparrent
        className='name'
        title={title}
      />
      <p>{description}</p>

      <h4>R$ {price}</h4>

      <div className="quantity">
        <div>
          <button>&minus;</button>
          <span>01</span>
          <button>&#43;</button>
        </div>
        <Button
          title='incluir'
        />
      </div>

    </Container>
  )
}