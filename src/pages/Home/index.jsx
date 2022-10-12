import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Content } from "./style";

import imgBanner from '../../assets/images/imageHome.png'
import imgPlate from '../../assets/images/Mask group-11.png'

import { Section } from "../../components/Section";
import { Cards } from '../../components/Cards'
import { useState } from "react";
import { useEffect } from "react";

export const Home = () => {
  //without back-end
  const mainPlates = [
    {
      id: '01',
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
  const dessertPlate = [
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
  const drinks = [
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
  //

  const [ allQuantity, setAllQuantity ] = useState(0)

  // State to save orders. It starts empty, but if it has data in localStorage it starts with that data
  const [ allOrders, setAllOrders ] = useState(() =>{
    const localData = localStorage.getItem("@plates")
    return localData ? JSON.parse(localData) : []
  })


  //Save all plates or favorite plates
  const [ favoritePlates, setFavoritesPlates ] = useState([])

  //Choose to show favorites or not
  const [ showFavorites, setShowFavorites ] = useState(false)

  // Save each plate favorite in the section 
  const [ mainPlatesFavorites, setMainPlatesFavorites] = useState([])
  const [ dessertPlatesFavorites, setDessertPlatesFavorites] = useState([])
  const [ drinksFavorites, setDrinksFavorites] = useState([])



  const handleShowFavorites = () => {

    //Check which plates in favorites 
    const mainPlatesFiltered = mainPlates.filter(main => favoritePlates.includes(main.id))
    const dessertPlatesFiltered = dessertPlate.filter(dessert => favoritePlates.includes(dessert.id))
    const drinksFiltered = drinks.filter(drink => favoritePlates.includes(drink.id))

    if(showFavorites === false){
      if(favoritePlates.length === 0){
        return alert('Não existem pratos favoritos')
      }
    }
    
    //Add favorites plates to new array to render
    setMainPlatesFavorites(mainPlatesFiltered )
    setDessertPlatesFavorites(dessertPlatesFiltered)
    setDrinksFavorites(drinksFiltered)

    //Show favorite On/Off
    setShowFavorites(!showFavorites)
  }

  // This function changes the order quantity
  const handleQuantity = () => {
    let sum = 0
    allOrders.forEach(plate => {
      sum += Number(plate.quantity)
    });
    setAllQuantity(sum)
  }

  // Get data in localStorage
  useEffect(() => {
    const plate = JSON.parse(localStorage.getItem("@plates"))

    if(plate){
      setAllOrders(plate)
      handleQuantity()
    }
  },[])

  // add new data to localStorage
  useEffect(() => {
   localStorage.setItem("@plates",JSON.stringify(allOrders))
   handleQuantity()

  },[allOrders])

  return(

    
    <Container>
      <Header
        handleShowFavorites={handleShowFavorites}
        allQuantity={allQuantity}
      />

        <Content>
        
          <div className="banner">
            <img src={imgBanner} alt="image fruits and cookie" />
            <div className="text-banner">
              <h2>Sabores Inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>

          <Section title='Pratos principais'>

            { /* Check if render all plates or favorite plates */
              !showFavorites ? 
            
              mainPlates.map(plate => (
                <Cards
                  key={plate.id}
                  id={plate.id}
                  className='card'
                  title={plate.title}
                  img={plate.img}
                  ingredients={plate.ingredients}
                  price={plate.price}
                  favoritePlates={favoritePlates}
                  setFavoritesPlates={setFavoritesPlates}
                  setAllQuantity={setAllQuantity}
                  setAllOrders={setAllOrders}
                />
              )) 
              :
              mainPlatesFavorites.map(plate => (
                <Cards
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

            { /* Check if render all plates or favorite plates */
              !showFavorites ? 
            
              dessertPlate.map(plate => (
                <Cards
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
              :
              dessertPlatesFavorites.map(plate => (
                <Cards
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
          
          <Section title='Bebidas'>

            { /* Check if render all plates or favorite plates */
              !showFavorites ? 
            
              drinks.map(drink => (
                <Cards
                  key={drink.id}
                  id={drink.id}
                  className='card'
                  title={drink.title}
                  img={drink.img}
                  ingredients={drink.ingredients}
                  price={drink.price}
                  setFavoritesPlates={setFavoritesPlates}
                  favoritePlates={favoritePlates}

                />
              )) 
              :
              drinksFavorites.map(drink => (
                <Cards
                  key={drink.id}
                  id={drink.id}
                  className='card'
                  title={drink.title}
                  img={drink.img}
                  ingredients={drink.ingredients}
                  price={drink.price}


                  setFavoritesPlates={setFavoritesPlates}
                  favoritePlates={favoritePlates}

                />
              )) 
              
            }

          </Section>
          
        </Content>

      
      <Footer/>
    </Container>
  )
}