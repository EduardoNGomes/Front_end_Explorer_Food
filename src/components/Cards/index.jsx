import { Container } from "./style";
import { useEffect } from "react";
import { useState, } from "react";



import { ButtonTransparrent } from '../ButtonTransparent'
import { Button } from '../Button'


import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

export const Card = ({title, img, id, ingredients, price ,  setFavoritesPlates, favoritePlates, ...rest}) => {
  const [favorite, setFavorite] = useState(false)

  // const [favoritePlates, setFavoritesPlates] = useState([])

  // useEffect(()=>{
  //   setFavoritesPlates(prevState =>  prevState + id )
  //   console.log(favoritePlates)
  // },[favorite])

  const handdleFavorites = () =>{
  // () => setFavorite(!favorite)

    console.log(favoritePlates)
    setFavoritesPlates(prevState => prevState + id)
  }
  //   useEffect(()=>{
  //   setFavoritesPlates()
  // },)
  return(
    <Container {...rest}>

      <ButtonTransparrent
        Icon={favorite ? AiFillHeart :  AiOutlineHeart}
        className='icon'
        iconSize={30}
        iconColor={favorite ? 'red' : ''}
        onClick={handdleFavorites}
      />

      <img src={img} alt="" />
      
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