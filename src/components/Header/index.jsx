import { Container } from "./style";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { AiOutlineSearch , AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaMoneyCheck } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { BsHexagonFill } from 'react-icons/bs'

import { useNavigate, useParams} from "react-router-dom";
import { useAuth } from '../../hooks/auth.jsx'
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Header = ({ handleShowFavorites, allQuantity, setPlates , favoriteTitle='Favoritos'}) => {
  const navigate = useNavigate()
  const {signOut} = useAuth()
  const [ search,setSearch ] = useState('')
  
  const handleOrders = () => {
    navigate('/orders')
  }

  const handleHome = () => {
    navigate('/')
  }

  const handleShopCart = () => {
    navigate('/payment')
  }

  const handleSignOut = () => {
    navigate('/')
    signOut()
  }


  useEffect(()=> {
    if(search.length > 0 && window.location.pathname == '/') {
      const fetchPlates = async () => {  
        const response = await api.get(`/plates?title=${search}`)
    
        setPlates(response.data)
      }
      fetchPlates()
    } else if(search.length == 0 ){
      const fetchPlates = async () => {
        const response = await api.get(`/plates`)

        setPlates(response.data)
      }
      fetchPlates()

    }
  },[search])


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
        <input 
          type="text" 
          placeholder="Busque pelas opções de pratos" 
          onChange={(e) => setSearch(e.target.value)}
        />
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
        onClick={handleSignOut}
      />



    </Container>
  )
}