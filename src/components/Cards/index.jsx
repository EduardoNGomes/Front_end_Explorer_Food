import { Container } from "./style";

import { useState, } from "react";

import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'

import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

export const Cards = ({title, img, id, ingredients, price ,  setFavoritesPlates, favoritePlates, ...rest}) => {
  const [favorite, setFavorite] = useState(false)


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
      />
      <p>{ingredients}</p>

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