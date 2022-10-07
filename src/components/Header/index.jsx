import { Container } from "./style";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { AiOutlineSearch , AiOutlineHeart } from 'react-icons/ai'
import { FaMoneyCheck } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { BsHexagonFill } from 'react-icons/bs'

export const Header = ({handleShowFavorites}) => {



  return(
    <Container>
      
      

      <div className="logo">

        <ButtonTransparrent
          Icon={BsHexagonFill}
          iconSize={30}
          title='Food Explorer' 
          className='logo'
        />

      </div>


      <ButtonTransparrent
        className='favorites'
        title='Favoritos'
        onClick={handleShowFavorites}
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