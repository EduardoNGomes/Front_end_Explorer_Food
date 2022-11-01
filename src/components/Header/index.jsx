import { Container } from "./style";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { AiOutlineSearch , AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaMoneyCheck } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { BsHexagonFill } from 'react-icons/bs'

import { useNavigate} from "react-router-dom";
import { useAuth } from '../../hooks/auth.jsx'

export const Header = ({ handleShowFavorites, allQuantity , favoriteTitle='Favoritos'}) => {
  const navigate = useNavigate()
  
  const handleOrders = () => {
    navigate('/orders')
  }

  const handleHome = () => {
    navigate('/')
  }

  const handleShopCart = () => {
    navigate('/payment')

  }

  const {signOut} = useAuth()

  return(
    <Container>      

      <div className="logo">
        <ButtonTransparrent
          Icon={BsHexagonFill}
          iconSize={30}
          title='Food Explorer' 
          className='logo'
          onClick={handleHome}
        />
      </div>

      <ButtonTransparrent
        className='favorites'
        title={favoriteTitle}
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
        onClick={handleOrders}
      />

      <ButtonTransparrent 
        Icon={AiOutlineShoppingCart}
        iconSize={30}
        title={allQuantity}
        className='shop-cart'
        onClick={handleShopCart}
      />

      <ButtonTransparrent
        Icon={ImExit}
        iconSize={30}
        className='exit'
        onClick={signOut}
      />



    </Container>
  )
}