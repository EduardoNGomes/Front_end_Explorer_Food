import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Content } from "./style";

import imgBanner from '../../assets/images/imageHome.png'
import imgPlate from '../../assets/images/Mask group-11.png'

import { Section } from "../../components/Section";
import { Card } from '../../components/Cards'
import { useState } from "react";
import { useEffect } from "react";

export const Home = () => {
  //without back-end
  const plates = [
    {
      id:'01',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'02',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'03',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'04',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'05',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'06',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'07',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },

  ]
  const plates2 = [
    {
      id:'08',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'09',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'10',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'11',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'12',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'13',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'14',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },

  ]
  const plates3 = [
    {
      id:'15',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'16',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'17',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'18',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'19',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'20',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },
    {
      id:'21',
      title: 'Salada Ravanello',
      img: imgPlate,
      ingredients: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: '49,97'
    },

  ]

  const [favorite, setFavorite] = useState(false)

  const [favoritePlates, setFavoritesPlates] = useState([])

  
 

  return(

    
    <Container>
      <Header/>

        <Content>
        
          <div className="banner">
            <img src={imgBanner} alt="image fruits and cookie" />
            <div className="text-banner">
              <h2>Sabores Inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>

          <Section title='Pratos principais'>

            {
              plates.map(plate => (
                <Card
                  key={plate.id}
                  id={plate.id}
                  className='card'
                  title={plate.title}
                  img={plate.img}
                  ingredients={plate.ingredients}
                  price={plate.price}
                  setFavoritesPlates={setFavoritesPlates}
                  favoritePlates={favoritePlates}

                />
              ))
            }


          </Section>

          <Section title='Sobremesas'>
          {
              plates2.map(plate => (
                <Card
                  className='card'
                  key={plate.id}
                  id={plate.id}
                  title={plate.title}
                  img={plate.img}
                  ingredients={plate.ingredients}
                  price={plate.price}                  

                />
              ))
            }


          </Section>
          
          <Section title='Bebidas'>
          {
              plates3.map(plate => (
                <Card
                  className='card'
                  key={plate.id}
                  id={plate.id}
                  title={plate.title}
                  img={plate.img}
                  ingredients={plate.ingredients}
                  price={plate.price}                  

                />
              ))
            }


          </Section>
          
        </Content>

      
      <Footer/>
    </Container>
  )
}