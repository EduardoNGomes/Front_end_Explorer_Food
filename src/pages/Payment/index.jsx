import { Container, Content } from "./style";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { OrdersPayment } from "../../components/OrdersPayment";


export const Payment = () => {
  return(
    <Container>
      <Header/>
      <Content>
        
        <div className="orders">
          <h4>Meu pedido</h4>


          <h5>Total: R$ 103,88 </h5> {/* */}
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