import { Container, Image } from "./style";

import { useState } from "react";


import { ButtonTransparrent } from "../ButtonTransparent";
import { Qrcode } from "../Qrcode";
import { Credit } from '../Credit'

import { MdOutlineAttachMoney, MdOutlineCreditCard} from 'react-icons/md'
import { AiOutlineCheckCircle, AiOutlineClockCircle } from 'react-icons/ai'
import { RiRestaurantLine } from 'react-icons/ri'




export const OrdersPayment = ({status}) => {

  const [ paymentMethod, setPaymentMethod ] = useState(status)


  const haddlePayment = (statusReceive) => {
    switch(statusReceive){
      case 'pending':
        return (
          <div className="status-order">
            <AiOutlineClockCircle size={150} color='#c4c4cc'/>

            <div>
              <h3>Aguardando pagamento no caixa </h3>
              <p>Escolha uma forma de pagamento</p>
            </div>
          </div>
        )
      case 'pix':
        return <Qrcode/>
      case 'credit':
        return <Credit paymentMethod={() => setPaymentMethod('aproved')} />
      case 'aproved':
        return(
          <div className="status-order">
            <AiOutlineCheckCircle size={150} color='#c4c4cc'/>
            <h3>Pagamento aprovado!</h3>
          </div>
        )
      case 'delivered':
        return(
          <div className="status-order">
            <RiRestaurantLine size={150} color='#c4c4cc'/>       
            <h3>Pedido entregue!</h3>
          </div>
          )

    }
  }

  return(
    <Container>

      <div className="pay" >
        <ButtonTransparrent
          Icon={MdOutlineAttachMoney} 
          iconSize={30}
          title='PIX'
          className={paymentMethod === 'pix' ? 'active' : ''}
          onClick={() => setPaymentMethod('pix')}
        />

        <ButtonTransparrent
          Icon={MdOutlineCreditCard}
          iconSize={30}
          title='Crédito'
          className={paymentMethod === 'credit' ? 'active' : ''}
          onClick={() => setPaymentMethod('credit')}

        />

      </div>

      <Image>
        {haddlePayment(paymentMethod)}
      </Image>



    </Container>
  )
}