import { LabelInput } from "../Labelnput";
import { Container } from "./style";

import {useState} from 'react'
import { Button } from "../Button";
import { ButtonTransparrent } from "../ButtonTransparent";

export const MenuSignIn = ({title, ...rest}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return(
    <Container {...rest}>
      <h1>
        {title}
      </h1>


      <LabelInput
        text='Email'
        placeholder='Exemplo: exemplo@exemplo.com.br'
        id='email'
        type='text'
        onChange={(e)=>setEmail(e.target.value)}
      />

      <LabelInput
        text='Senha'
        placeholder='No mínimo 6 caracteres'
        id='password'
        type='text'
        onChange={(e)=>setPassword(e.target.value)}
      />

      <Button
        title='Entrar'
      />

      <ButtonTransparrent
        title='Criar uma conta'
      />



    </Container>
  )
}