import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Food'
import { New } from '../pages/New'
import { Orders } from '../pages/Orders'
import { Payment } from '../pages/Payment'
import { OrdersAdmin } from '../pages/OrdersAdmin'


export const AppRoutes = () => {
  return(

    // Using react-router-dom to wrap all apps Routes
    <Routes>
      {/* Create routes access with react-router-dom */}
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/order' element={<OrdersAdmin/>}/>
    </Routes>
  )
}


