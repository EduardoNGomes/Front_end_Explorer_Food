import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { New } from '../pages/New'
import { Orders } from '../pages/Orders'
import { Payment } from '../pages/Payment'
import { OrdersAdmin } from '../pages/OrdersAdmin'

import { useAuth } from '../hooks/auth'


export const AppRoutes = () => {

  const {user} = useAuth()


  const handleRoutes = () => {
    if(user.admin){
      return(
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/' element={<New/>}/>
          <Route path='/order' element={<OrdersAdmin/>}/>
        </Routes>
      )
    } else {
      return(
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      )
    }


  }


  return(

    handleRoutes()

    // Using react-router-dom to wrap all apps Routes
    // <Routes>
    //   {/* Create routes access with react-router-dom */}
      // <Route path='/' element={<Home/>}/>
      // <Route path='/details/:id' element={<Details/>}/>
      // <Route path='/orders' element={<Orders/>}/>
      // <Route path='/payment' element={<Payment/>}/>

    //   <Route path='/new' element={<New/>}/>
    //   <Route path='/order' element={<OrdersAdmin/>}/>
    // </Routes>
  )
}


