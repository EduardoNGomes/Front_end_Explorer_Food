import { Card } from "../Cards";
import { Container } from "./style";


import { MdOutlineArrowBackIos , MdOutlineArrowForwardIos } from 'react-icons/md'


export const Section = ({title, children}) => {

  const carousel = document.querySelector('.cards')
  const card = document.querySelector('.card')
  
  
  const scrollToRight = () =>{
      carousel.scrollLeft += 2*card.clientWidth
      console.log(carousel.scrollLeft)
  }

  const scrollToLeft = () =>{
    carousel.scrollLeft -= 2*card.clientWidth
  }


  return (
    <Container>
      <h2>{title}</h2>

      <div className="slideshow-cards" >
        <button className='scroll-left ' onClick={scrollToLeft}>
          <MdOutlineArrowBackIos size={50}/>
        </button>
        <button className='scroll-right' onClick={scrollToRight}>
          <MdOutlineArrowForwardIos size={50}/>
        </button>

      <div className="cards">
        {children}
      </div>



    </div>
      
    </Container>
  )
}