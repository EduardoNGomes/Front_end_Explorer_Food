import { Container, Content } from "./style";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderStatus } from "../../components/OrderStatus";

import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from "react";
import { api } from "../../services/api";



export const Orders = () => {
  const {user} = useAuth()

  const [items, setItems] = useState([])
  //teste front-end
  // const items = [
  //   {
  //     status: 'pending',
  //     id: '001',
  //     details: [
  //       {
  //         id: '1',
  //         name:'Salada Radish',
  //         quantity: '2'
  //       },
  //       {
  //         id: '2',
  //         name:'Torradas de Parma',
  //         quantity: '1'
  //       },
  //       {
  //         id: '3',
  //         name:'Chá de Canela',
  //         quantity: '2'
  //       },
  //       {
  //         id: '4',
  //         name:'Suco de Maracujá',
  //         quantity: '1'
  //       }
  //     ],
  //     date: '12/04',
  //     hour: '11:30'
  //   },
  //   {
  //     status: 'readying',
  //     id: '002',
  //     details: [
  //       {
  //         id: '1',
  //         name:'Salada Radish',
  //         quantity: '2'
  //       },
  //       {
  //         id: '2',
  //         name:'Torradas de Parma',
  //         quantity: '1'
  //       },
  //       {
  //         id: '3',
  //         name:'Chá de Canela',
  //         quantity: '2'
  //       },
  //       {
  //         id: '4',
  //         name:'Suco de Maracujá',
  //         quantity: '1'
  //       }
  //     ],
  //     date: '12/04',
  //     hour: '11:30'
  //   },
  //   {
  //     status: 'readying',
  //     id: '003',
  //     details: [
  //       {
  //         id: '1',
  //         name:'Salada Radish',
  //         quantity: '2'
  //       },
  //       {
  //         id: '2',
  //         name:'Torradas de Parma',
  //         quantity: '1'
  //       },
  //       {
  //         id: '3',
  //         name:'Chá de Canela',
  //         quantity: '2'
  //       },
  //       {
  //         id: '4',
  //         name:'Suco de Maracujá',
  //         quantity: '1'
  //       }
  //     ],
  //     date: '12/04',
  //     hour: '11:30'
  //   },
  //   {
  //     status: 'delivered',
  //     id: '004',
  //     details: [
  //       {
  //         id: '1',
  //         name:'Salada Radish',
  //         quantity: '2'
  //       },
  //       {
  //         id: '2',
  //         name:'Torradas de Parma',
  //         quantity: '1'
  //       },
  //       {
  //         id: '3',
  //         name:'Chá de Canela',
  //         quantity: '2'
  //       },
  //       {
  //         id: '4',
  //         name:'Suco de Maracujá',
  //         quantity: '1'
  //       }
  //     ],
  //     date: '12/04',
  //     hour: '11:30'
  //   },

  // ]

  useEffect(()=> {
    const fetchOrder = async () => {
      const response = await api.get('/orders')
      const data = response.data
      const newData = data.map(data => {
        const time = data.update_at.split(' ')
        return(        {
          id: data.id,
          status: data.status,
          description: JSON.parse(data.description),
          date: time[0].replaceAll('-', '/').split('/').reverse().join('/').slice(0,5),
          hour: time[1].slice(0,5)
        } )
      })

      console.log(newData)
      setItems(newData)
    }
    fetchOrder()
  }, [])

  return(
    <Container>
      {user.admin ? <HeaderAdmin/> : <Header/>}

      <Content>
        <h2>Pedidos</h2>

        <div className="scroll">

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

                {items &&
                  items.map(item => (
                    <tr key={item.id}>
                      <td>
                        <OrderStatus status={item.status}/>
                      </td>
                      <td>
                        <p>{String(item.id).padStart(5, '0')}</p>
                      </td>
                      <td>
                        <p>
                          {
                           item.description.map((detail,index) => (
                            <span key={detail.index}>{detail.quantity} x {item.description.length - 1 === index ? detail.name  : detail.name + ', ' } </span>
                          ))
                          }
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
        </div>
        

      </Content>
      

      <Footer/>
    </Container>
  )
}