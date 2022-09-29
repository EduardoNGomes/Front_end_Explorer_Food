import { Container, Content } from "./style";

import { useEffect } from "react";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { OrdersPayment } from "../../components/OrdersPayment";
import { ButtonTransparrent } from "../../components/ButtonTransparent";


import imgPlate from '../../assets/images/Mask group-10.png'


export const Payment = () => {
  //Teste front-end
  const pedidos = [
    {
      id: 1,
      img: imgPlate,
      quantity: '2',
      name: 'Salada Radish',
      value: 25.07   
    },
    {
      id: 2,
      img: imgPlate,
      quantity: '2',
      name: 'Salada Radish',
      value: 35.07   
    },
    {
      id: 3,
      img: imgPlate,
      quantity: '3',
      name: 'Salada Radish',
      value: 20.07   
    },

  ]

  
  
  let sum = 0   

  function totalValue(){
    for(let i of pedidos){
      sum += Number(i.quantity) * i.value
    }
    return sum
  }
  totalValue()

  return(
    <Container>
      <Header/>
      <Content>
        
        <div className="orders">
          <h4>Meu pedido</h4>

          {
            pedidos.map(pedido => (
              <div key={pedido.id}>
                <img src={pedido.img} alt="" />
                <div>
                  <div className="infos">
                    <span className="quantity">{pedido.quantity} x</span>
                    <span className="name">{pedido.name}</span>
                    <span className="value"> R$ {pedido.value}</span>
                  </div>

                  <ButtonTransparrent
                    title='Excluir'
                  />
                </div>
            </div>
            ))
          }

          <h5>Total: R$ {sum} </h5> {/* */}
        </div>
        
        <div className="payments">
          <h4>Pagamentos</h4>

          <OrdersPayment
            status='delivered'
          />
        </div>

      </Content>
      <Footer/>
    </Container>
  )

}