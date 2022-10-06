import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Content } from "./style";

import imgBanner from '../../assets/images/imageHome.png'
import imgPlate from '../../assets/images/Mask group-11.png'

import { Section } from "../../components/Section";
import { Card } from '../../components/Cards'

export const Home = () => {
  return(
    <Container>
      <Header/>

        <Content>
        
          <div className="banner">
            <img src={imgBanner} alt="image fruits and cookie" />
            <div className="text-banner">
              <h2>Sabores Inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>

          <Section title='Pratos principais'>
            <Card
              className='card'
              title='Salada Ravanello'
              img={imgPlate}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
              price='49,97'
            />

            <Card
              className='card'
              title='Salada Ravanello'
              img={imgPlate}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
              price='49,97'
            />

            <Card
              className='card'
              title='Salada Ravanello'
              img={imgPlate}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
              price='49,97'
            />

            <Card
              className='card'
              title='Salada Ravanello'
              img={imgPlate}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
              price='49,97'
            />

            <Card
              className='card'
              title='Salada Ravanello'
              img={imgPlate}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
              price='49,97'
            />

            <Card
              className='card'
              title='Salada Ravanello'
              img={imgPlate}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
              price='49,97'
            />

            <Card
              className='card'
                title=' Ravanello'
                img={imgPlate}
                description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
                price='49,97'
            />
          </Section>

          <Section title='Sobremesas'>
                    <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
              title=' Ravanello'
              img={imgPlate}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
              price='49,97'
          />


          </Section>
          
          <Section title='Bebidas'>
                    <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
            title='Salada Ravanello'
            img={imgPlate}
            description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
            price='49,97'
          />

          <Card
            className='card'
              title=' Ravanello'
              img={imgPlate}
              description='Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
              price='49,97'
          />


          </Section>
          
        </Content>

      
      <Footer/>
    </Container>
  )
}