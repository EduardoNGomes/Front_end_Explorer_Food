import { Container, Image } from "./style";

import { ButtonTransparrent } from "../ButtonTransparent";
import { Button } from "../Button";

import { MdOutlineAttachMoney, MdOutlineCreditCard} from 'react-icons/md'
import { FaMoneyCheck} from 'react-icons/fa'




export const OrdersPayment = ({status}) => {


  const howPayment = () => {

    return(
      <div className="credit-payment">
        <label htmlFor="credit-card-number">Número do cartao</label>
        <input type="text" />

        <div>
          <div>
            <label htmlFor="">Validade</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">CVC</label>
            <input type="text" />
          </div>
        </div>
        
        <Button
          Icon={FaMoneyCheck}
          title='Finalizar pagamento'
        />
      </div>
    )

  }

  return(
    <Container>

      <div className="pay">
        <ButtonTransparrent
          Icon={MdOutlineAttachMoney} 
          iconSize={30}
          title='PIX'
        />
        <ButtonTransparrent
          Icon={MdOutlineCreditCard}
          iconSize={30}
          title='Crédito'
          onClick={howPayment}
        />

      </div>

      <Image>
      <div className="credit-payment">
        <label htmlFor="credit-card-number">Número do cartao</label>
        <input type="text" />

        <div>
          <div>
            <label htmlFor="">Validade</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">CVC</label>
            <input type="text" />
          </div>
        </div>
        
        <Button
          Icon={FaMoneyCheck}
          title='Finalizar pagamento'
        />
      </div>
        
      </Image>



    </Container>
  )
}