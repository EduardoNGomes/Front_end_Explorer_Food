import { Container, Content } from "./style";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import {AiOutlineSearch} from 'react-icons/ai'
import { FaMoneyCheck} from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import {BsHexagonFill} from 'react-icons/bs'

export const Header = () => {
  return(
    <Container>
      <Content>


      <div className="logo">
        <BsHexagonFill
          size={40}
          color='#065E7C'
          />
        <h2>food explorer</h2>

      </div>


      <ButtonTransparrent
        className='favorites'
        title='Meus favoritos'
        />

      <div className="search">
        <AiOutlineSearch 
          size={20} 
          color='#C4C4C4'
          />
        <input type="text" placeholder="Busque pelas opções de pratos" />
      </div>

      <Button
        title='Meu pedido'
        Icon={FaMoneyCheck}
        className='request'
        />

      <button className="exit">
        <ImExit
          size={30}
          color='white'
          />
      </button>

          </Content>
    </Container>
  )
}