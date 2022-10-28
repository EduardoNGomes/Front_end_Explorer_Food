import { Container } from "./style";

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { api } from "../../services/api";

export const Cards = ({title, img, id, description, price , setAllOrders, inFavorite, ...rest}) => {

  const navigate = useNavigate()

  const [favorite, setFavorite] = useState(inFavorite)
  const [quantity, setQuantity] = useState(1) 
  // Add or remove favorite plates
  const handleFavorites = async() =>{
    //Change Icon 
    setFavorite(!favorite)
    await api.post('/favorites', {plate_id: id})
    // console.log(inFavorite)
  }

  // Change to page details using route params
  const handleDetails = () => {
    navigate(`/details/${id}`)
  }

  // add one more amount
  const handleAddQuantity = () => {
    setQuantity(prevState => prevState + 1)
  }

  // remove one from quantity
  const handleRemoveQuantity = () => {
    if(quantity <= 1){  
      setQuantity(1)
      return alert('Quantidade mínima é 1')
    }
    setQuantity(prevState => prevState - 1)
  }

  const handleAllQuantity = () => {
    // Object Object containing the data
    const plates = {
      id:id,
      name: title,
      img: img,
      price: price,
      quantity: quantity,
    }

    // Save data from localStorage
    const savedPlates = JSON.parse(localStorage.getItem("@plates"))
    
    // If localStorage is empty save the plate
    if(!savedPlates){
      setAllOrders(plates)
    }
    
    // Create a new list removing plate if plate exist in localStorage
    const filteredSavedPlates = savedPlates.filter(p => p.id !== plates.id)


    // add the new list in allOrders(localStorage)
    setAllOrders(filteredSavedPlates)
    // add the plate in allOrders, without remove another data
    setAllOrders(prevState =>[...prevState, plates])

  }

  useEffect(()=>{
    // console.log(inFavorite)
  })
  return(
    <Container {...rest}>

      <ButtonTransparrent
        Icon={favorite ? AiFillHeart :  AiOutlineHeart}
        className='icon'
        iconSize={30}
        iconColor={favorite ? 'red' : ''}
        onClick={() => handleFavorites(id)}
      />

      <img src={`${api.defaults.baseURL}/plates/${img}`} alt="plate img" />
      
      <ButtonTransparrent
        className='name'
        title={title}
        onClick={handleDetails}

      />
      <p>{description}</p>

      <h4>R$ {price}</h4>

      <div className="quantity">
        <div>
          <button onClick={handleRemoveQuantity}>
            &minus;
          </button>
          <span>{quantity.toString().padStart(2,0)}</span>
          <button onClick={handleAddQuantity}>
              &#43;
          </button>
        </div>
        <Button
          title='incluir'
          onClick={handleAllQuantity}
        />
      </div>

    </Container>
  )
}