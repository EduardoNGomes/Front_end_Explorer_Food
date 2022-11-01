import { Container, Content } from "./style";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Cards } from '../../components/Cards'

import imgBanner from '../../assets/images/imageHome.png'

import { useState,useEffect } from "react";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";


export const Home = () => {
  const { user } = useAuth()

  const [ plates, setPlates ] = useState([])
  const [ favoritePlates, setFavoritePlates ] = useState([])


  const [ mainPlates,setMainPlates] = useState([]) 
  const [ mainPlatesFavorites, setMainPlatesFavorites] = useState([])

  const [ dessertPlates,setDessertPlates ] = useState([]) 
  const [ dessertPlatesFavorites, setDessertPlatesFavorites ] = useState([])

  const [ drinks,setDrinks ] = useState([]) 
  const [ drinksFavorites, setDrinksFavorites ] = useState([])

  //Choose to show favorites or not
  const [ showFavorites, setShowFavorites ] = useState(false)

  const [ allQuantity, setAllQuantity ] = useState(0)

  // State to save orders. It starts empty, but if it has data in localStorage it starts with that data
  const [ allOrders, setAllOrders ] = useState(() =>{
    const localData = localStorage.getItem("@foodexplorer:plates")
    return localData ? JSON.parse(localData) : []
  })

  const handleShowFavorites = async () => {

    if(!favoritePlates){
      return alert('Não há pratos favoritos')
    } 

    const mainFavorites = favoritePlates.filter(plate => plate.type == 'Prato Principal')
    setMainPlatesFavorites(mainFavorites)

    const dessertFavorites = favoritePlates.filter(plate => plate.type == 'Sobremesa')
    setDessertPlatesFavorites(dessertFavorites)

    const drinkFavorite = favoritePlates.filter(plate => plate.type == 'Bebida')
    setDrinksFavorites(drinkFavorite)
  
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

  // Get all plates
  useEffect(() =>{
    const fetchPlates = async () => {
      const response = await api.get('/plates')
      setPlates(response.data)
    }
    fetchPlates()

  }, [])

  // Get all favorites
  useEffect( ()=>{
    const fetchFavorites = async () => {

      const response = await api.get('/favorites')
      setFavoritePlates(response.data)
    }

    fetchFavorites()
  },[])

  // Get data in localStorage
  useEffect(() => {
    const plate = JSON.parse(localStorage.getItem("@foodexplorer:plates"))

    if(plate){
      setAllOrders(plate)
      handleQuantity()
    }
  },[])

  // add new data to localStorage
  useEffect(() => {
   localStorage.setItem("@foodexplorer:plates",JSON.stringify(allOrders))
   handleQuantity()

  },[allOrders])

  // Select plates by type
  useEffect(()=> {
    const selectPlates = () => {
      const main = plates.filter(plate => plate.type == 'Prato Principal')
      setMainPlates(main)

      const dessert = plates.filter(plate => plate.type == 'Sobremesa')
      setDessertPlates(dessert)

      const drink = plates.filter(plate => plate.type == 'Bebida')
      setDrinks(drink)
    }
    selectPlates()
  },[plates])

  return(

    
    <Container>

      {
      user.admin ? 
        <HeaderAdmin/> 
        :  
        <Header
          handleShowFavorites={handleShowFavorites}
          allQuantity={allQuantity}
          favoriteTitle={showFavorites ? 'Todos' : 'Favoritos'}
      />
      }


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

            /* Check if render all plates or favorite plates */
              !showFavorites ? 
              mainPlates.map(plate => (
                <Cards
                  key={plate.id}
                  id={plate.id}
                  className='card'
                  title={plate.title}
                  img={plate.img}
                  description={plate.description}
                  price={plate.price}
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
                  description={plate.description}
                  price={plate.price}
                  setAllOrders={setAllOrders}

                />
              )) 
            }

          </Section>
          
          
          <Section title='Sobremesas'>

            { 
              !showFavorites ? 
            
              dessertPlates.map(plate => (
                <Cards
                  key={plate.id}
                  id={plate.id}
                  className='card'
                  title={plate.title}
                  img={plate.img}
                  description={plate.description}
                  price={plate.price}
                  setAllOrders={setAllOrders}

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
                  description={plate.description}
                  price={plate.price}
                  setAllOrders={setAllOrders}

                />
              )) 
              
            }

          </Section>
          
          

          

          <Section title='Bebidas'>

            { 
              !showFavorites ? 
            
              drinks.map(drink => (
                <Cards
                  key={drink.id}
                  id={drink.id}
                  className='card'
                  title={drink.title}
                  img={drink.img}
                  description={drink.description}
                  price={drink.price}
                  setAllOrders={setAllOrders}              
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
                  description={drink.description}
                  price={drink.price}
                  setAllOrders={setAllOrders}
                />
              ))       
            }

          </Section>

        
        </Content>

      
      <Footer/>
    </Container>
  )
}