import { Container, Content } from "./style";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderStatus } from "../../components/OrderStatus";
import { FaCircle } from 'react-icons/fa'


export const OrdersAdmin = () => {
  //teste front-end
  const items = [
    {
      status: 'pending',
      id: '001',
      details: [
        {
          id: '1',
          name:'Salada Radish',
          quantity: '2'
        },
        {
          id: '2',
          name:'Torradas de Parma',
          quantity: '1'
        },
        {
          id: '3',
          name:'Chá de Canela',
          quantity: '2'
        },
        {
          id: '4',
          name:'Suco de Maracujá',
          quantity: '1'
        }
      ],
      date: '12/04',
      hour: '11:30'
    },
    {
      status: 'readying',
      id: '002',
      details: [
        {
          id: '1',
          name:'Salada Radish',
          quantity: '2'
        },
        {
          id: '2',
          name:'Torradas de Parma',
          quantity: '1'
        },
        {
          id: '3',
          name:'Chá de Canela',
          quantity: '2'
        },
        {
          id: '4',
          name:'Suco de Maracujá',
          quantity: '1'
        }
      ],
      date: '12/04',
      hour: '11:30'
    },
    {
      status: 'readying',
      id: '003',
      details: [
        {
          id: '1',
          name:'Salada Radish',
          quantity: '2'
        },
        {
          id: '2',
          name:'Torradas de Parma',
          quantity: '1'
        },
        {
          id: '3',
          name:'Chá de Canela',
          quantity: '2'
        },
        {
          id: '4',
          name:'Suco de Maracujá',
          quantity: '1'
        }
      ],
      date: '12/04',
      hour: '11:30'
    },
    {
      status: 'delivered',
      id: '004',
      details: [
        {
          id: '1',
          name:'Salada Radish',
          quantity: '2'
        },
        {
          id: '2',
          name:'Torradas de Parma',
          quantity: '1'
        },
        {
          id: '3',
          name:'Chá de Canela',
          quantity: '2'
        },
        {
          id: '4',
          name:'Suco de Maracujá',
          quantity: '1'
        }
      ],
      date: '12/04',
      hour: '11:30'
    },

  ]


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

                {
                  items.map(item => (
                    <tr key={item.id}>
                      <td>
                        <select name="status" id="status" required>
                          <option value="default">Status</option>
                          <option value="readying">Preparando</option>
                          <option value="pending">Pendente</option>
                          <option value="delivered">Entregue</option>
                        </select>
                      </td>
                      <td>
                        <p>{item.id}</p>
                      </td>
                      <td>
                        <p>
                          {item.details.map((detail,index) => (
                            <span key={detail.id}>{detail.quantity} x {item.details.length - 1 === index ? detail.name  : detail.name + ', ' } </span>
                          ))}
                        </p>
                      </td>
                      <td>
                        <p>{item.date} às {item.hour}</p>
                      </td>
                    </tr>

                  ))
                }


            </tbody>
          </table>

        

      </Content>
      

      <Footer/>
    </Container>
  )
}