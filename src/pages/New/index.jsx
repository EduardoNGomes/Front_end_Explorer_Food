import { Container, Content } from "./style";

import { ButtonTransparrent } from '../../components/ButtonTransparent'
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { MdOutlineArrowBackIos } from 'react-icons/md'
import { FiUpload } from 'react-icons/fi'
import { Tag } from "../../components/Tag";
import { Input } from "../../components/Input";

export const New = () => {
  return(
    <Container>
      <Header/>

      <Content>
      <ButtonTransparrent
            Icon={MdOutlineArrowBackIos}
            iconSize={20}
            title='voltar'
          />

      <div>
        <h2>Editar prato</h2>
        
        <form>

          <div className="wrapper">
            <div className="files">
              <p>Imagem do Prato</p>
              <label htmlFor="plate-name" ><FiUpload size={24}/> Selecione imagem </label>
              <input type="file"
              id="plate-name" name="plate-name"
              accept="image/png, image/jpeg"/>
            </div>
            
            <div className="inputs-box">
              <Input
                title='Nome'
                type='text'
                placeholder='Ex.: Salada Ceasar'
                name='name'
              />
            </div>

          </div>

          <div className="wrapper">
            <div className="inputs-box ingredients">
                <h3>Ingredientes</h3>
                <div className="tags">
                  <Tag
                    value='Teste'
                    />  
                    
                  <Tag
                    isNew
                  />  
                </div>

            </div>

            <div className="inputs-box price">
              <Input
                title='Preço'
                type='text'
                placeholder="R$ 00,00" 
                name='price'

              />
            </div>
          </div>
          
          <div className="wrapper">
            <div className="inputs-box textarea">
              <h3>Descrição</h3>
              <textarea name="description" id="description"  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
            </div>
          </div>

          <button className="add">Adicionar pedido</button>

        </form>
      </div>


      </Content>

      <Footer/>
    </Container>
  )
}