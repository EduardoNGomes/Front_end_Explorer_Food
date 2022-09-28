import { Container, Content } from "./style";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'

import { MdOutlineArrowBackIos } from 'react-icons/md'
import { ButtonTransparrent } from "../../components/ButtonTransparent";

import imgPlate from '../../assets/images/Mask group-11.png'
import imgIngredients from '../../assets/images/pngegg (15) 1.png'

import { FaMoneyCheck} from 'react-icons/fa'




export const Food = () => {
  return(
    <Container>
      <Header/>

      <Content>

          <ButtonTransparrent 
            Icon={MdOutlineArrowBackIos}
            iconSize={30}
            title='voltar'
          />


        <div className="info-plate">
          <img src={imgPlate} alt="image plate" />

          <div className="infos">
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

            <li>
              <ul>
                <img src={imgIngredients} alt="ingredients" className="ingredients"/>
                <span>alface</span>
              </ul>
              <ul>
                <img src={imgIngredients} alt="ingredients" className="ingredients"/>
                <span>alface</span>
              </ul>
              <ul>
                <img src={imgIngredients} alt="ingredients" className="ingredients"/>
                <span>alface</span>
              </ul>
              <ul>
                <img src={imgIngredients} alt="ingredients" className="ingredients"/>
                <span>alface</span>
              </ul>
            </li>

            <div className="valueAndQuantity">
              <h4>R$ 25,97</h4>

              <div className="quantity">
                <div>
                  <button>&minus;</button>
                  <span>01</span>
                  <button>&#43;</button>
                </div>
                <Button
                  Icon={FaMoneyCheck}
                  title='incluir'
                />
              </div>
            </div>
          </div>

        </div>


      </Content>

      <Footer/>
    </Container>
  )
}