import { Container } from "./style";

import { useRef } from "react";


import { MdOutlineArrowBackIos , MdOutlineArrowForwardIos } from 'react-icons/md'


export const Section = ({title, children}) => {

  const carousel = useRef(null)  

  const scrollToRight = () =>{
      carousel.current.scrollLeft += 450
  }

  const scrollToLeft = () =>{
    carousel.current.scrollLeft -= 450
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

      <div className="cards" ref={carousel}>
        {children}
      </div>



    </div>
      
    </Container>
  )
}