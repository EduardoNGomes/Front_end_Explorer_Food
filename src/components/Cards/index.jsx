import { Container } from "./style";

import { useState, } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

export const Cards = ({title, img, id, ingredients, price ,  setFavoritesPlates, favoritePlates, setAllQuantity, setAllOrders, ...rest}) => {

  const navigate = useNavigate()

  const [favorite, setFavorite] = useState(false)
  const [quantity, setQuantity] = useState(1) 

  // Add or remove favorite plates
  const handdleFavorites = () =>{
    //Change Icon 
    setFavorite(!favorite)

    //Verify if favorite plates include in favorites
    const isFavoritePlate = favoritePlates.includes(id)

    if(isFavoritePlate){
      //return new list without id existing in old list
      const FilteredPlates = favoritePlates.filter(ids => ids !== id )
      
      //add the new list to favoritePlates
      setFavoritesPlates(FilteredPlates)
    }else{

      //add an id to the favoritePlates list, without removing old ids
      setFavoritesPlates(prevState => [...prevState , id])
    }

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


  return(
    <Container {...rest}>

      <ButtonTransparrent
        Icon={favorite ? AiFillHeart :  AiOutlineHeart}
        className='icon'
        iconSize={30}
        iconColor={favorite ? 'red' : ''}
        onClick={handdleFavorites}
      />

      <img src={img} alt="plate img" />
      
      <ButtonTransparrent
        className='name'
        title={title}
        onClick={handleDetails}
      />
      <p>{ingredients}</p>

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