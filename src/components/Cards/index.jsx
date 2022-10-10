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

  const handleDetails = () => {
    navigate(`/details/${id}`)
  }

  const handleAddQuantity = () => {
    setQuantity(prevState => prevState + 1)
    console.log(quantity)
  }

  const handleRemoveQuantity = () => {
    if(quantity <= 1){  
      setQuantity(1)
      return alert('Quantidade mínima é 1')
    }
    setQuantity(prevState => prevState - 1)
  }

  const handleAllQuantity = () => {
    const plate = {
      id:id,
      name: title,
      img: img,
      price: price,
      quantity: quantity,
    }

    setAllOrders(prevState =>[...prevState, plate])
    setAllQuantity(prevState => prevState + quantity)

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