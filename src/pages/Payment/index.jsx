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
      value: '25.10'   
    },
    {
      id: 2,
      img: imgPlate,
      quantity: '2',
      name: 'Salada Radish',
      value: '35.10'   
    },
    {
      id: 3,
      img: imgPlate,
      quantity: '3',
      name: 'Salada Radish',
      value: '20.05'   
    },
    {
      id: 4,
      img: imgPlate,
      quantity: '2',
      name: 'Salada Radish',
      value: '25.05'  
    },
    {
      id: 5,
      img: imgPlate,
      quantity: '2',
      name: 'Salada Radish',
      value: '25.55'
    },
    {
      id: 6,
      img: imgPlate,
      quantity: '2',
      name: 'Salada Radish',
      value: '25.50'   
    },

  ]

  
  
  let sum = 0   

  function totalValue(){
    for(let i of pedidos){
      sum += Number(i.quantity) * Number(i.value)
      console.log(sum)
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

          <div className="scroll">

          {
            pedidos.map(pedido => (
              <div key={pedido.id} className='foods'>
                <img src={pedido.img} alt="food img" />
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

          </div>


          <h5>Total: R$ {sum} </h5> {/* */}
        </div>
        
        <div className="payments">
          <h4>Pagamentos</h4>

          <OrdersPayment
            status='pending'
          />
        </div>

      </Content>
      <Footer/>
    </Container>
  )

}