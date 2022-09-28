import { Container, Content } from "./style";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderStatus } from "../../components/OrderStatus";


export const Orders = () => {
  return(
    <Container>
      <Header/>

      <Content>
        <h2>Pedidos</h2>

        <table>
          <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <td>
                  <OrderStatus title='Pendente'/>
                </td>
                <td>
                  <p>000004</p>
                </td>
                <td>
                  <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
                </td>
                <td>
                  <p>20/05 às 18h00</p>
                </td>
              </tr>

              <tr>
                <td>
                  <OrderStatus title='Preparando'/>
                </td>
                <td>
                  <p>000004</p>
                </td>
                <td>
                  <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
                </td>
                <td>
                  <p>20/05 às 18h00</p>
                </td>
              </tr>

              <tr>
                <td>
                  <OrderStatus title='Preparando'/>
                </td>
                <td>
                  <p>000004</p>
                </td>
                <td>
                  <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
                </td>
                <td>
                  <p>20/05 às 18h00</p>
                </td>
              </tr>

              <tr>
                <td>
                  <OrderStatus title='Entregue'/>
                </td>
                <td>
                  <p>000004</p>
                </td>
                <td>
                  <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
                </td>
                <td>
                  <p>20/05 às 18h00</p>
                </td>
              </tr>

              <tr>
                <td>
                  <OrderStatus title='Entregue'/>
                </td>
                <td>
                  <p>000004</p>
                </td>
                <td>
                  <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
                </td>
                <td>
                  <p>20/05 às 18h00</p>
                </td>
              </tr>

          </tbody>
        </table>
        

      </Content>
      

      <Footer/>
    </Container>
  )
}