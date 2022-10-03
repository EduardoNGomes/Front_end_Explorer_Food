import { Container, Content } from "./style";

import { ButtonTransparrent } from '../../components/ButtonTransparent'
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { MdOutlineArrowBackIos } from 'react-icons/md'
import { FiUpload } from 'react-icons/fi'

export const New = () => {
  return(
    <Container>
      <Header/>

      <Content>
      <ButtonTransparrent
            Icon={MdOutlineArrowBackIos}
            iconSize={30}
            title='voltar'
          />

      <div>
        <h2>Editar prato</h2>
        
        <form>

          <div className="wrapper">
            <div className="files">
              <label htmlFor="plate-name" ><FiUpload size={24}/> Selecione imagem </label>
              <input type="file"
              id="plate-name" name="plate-name"
              accept="image/png, image/jpeg"/>
            </div>




          </div>

        </form>
      </div>


      </Content>

      <Footer/>
    </Container>
  )
}