import { Container } from "./style";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { AiOutlineSearch , AiOutlineHeart } from 'react-icons/ai'
import { FaMoneyCheck } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { BsHexagonFill } from 'react-icons/bs'

export const Header = () => {
  return(
    <Container>

      <div className="logo">
        <BsHexagonFill
          size={40}
          color='#065E7C'
          />
        <h2>food explorer</h2>

      </div>


      <ButtonTransparrent
        className='favorites'
        title='Favoritos'
        
        Icon={AiOutlineHeart}
        iconSize={20}
        />

      <div className="search">
        <AiOutlineSearch 
          size={20} 
          color='#C4C4C4'
          />
        <input type="text" placeholder="Busque pelas opções de pratos" />
      </div>

      <Button
        title='Pedidos'
        Icon={FaMoneyCheck}
        className='request'
        />

      <button className="exit">
        <ImExit
          size={30}
          color='white'
          />
      </button>

    </Container>
  )
}