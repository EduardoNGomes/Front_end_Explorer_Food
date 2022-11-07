import { Container } from "./style";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { AiOutlineSearch ,AiOutlinePlus } from 'react-icons/ai'
import { FaMoneyCheck } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { BsHexagonFill } from 'react-icons/bs'

import { useNavigate} from "react-router-dom";
import { useAuth } from '../../hooks/auth.jsx'
import { useState,useEffect } from "react";
import { api } from "../../services/api";

export const HeaderAdmin = ({setPlates}) => {
  const {signOut} = useAuth()

  const navigate = useNavigate()
  const [ search,setSearch ] = useState('')

  
  const handleOrders = () => {
    navigate('/order')
  }

  const handleHome = () => {
    navigate('/')
  }

  const handleSignOut = () => {
    navigate('/')
    signOut()
  }

  const handleNewPlate = () => {
    navigate('/new')
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
        className='new'
        title='Novo Prato'
        onClick={handleNewPlate}
        Icon={AiOutlinePlus}
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
        Icon={ImExit}
        iconSize={30}
        className='exit'
        onClick={handleSignOut}
      />



    </Container>
  )
}