import { LabelInput } from "../Labelnput";
import { Container } from "./style";

import {useState} from 'react'
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Button } from "../Button";
import { ButtonTransparrent } from "../ButtonTransparent";

export const MenuSignUp = ({title, ...rest}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  const response = () =>{
    alert('Usuario cadastrado com sucesso')
    handleBack()
  }

  function handleSignUp() {
    if(!email || !name || !password){
      return alert('Preencha todos os campos')
    }
    if(password.length< 6){
      return alert('Revise suas informações')
    }

    api.post('/users', {name, email, password : String(password)})
    .then((response()))
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Nao foi possivel realizar o cadastro')
      }

    })
  }


  return(

    <Container {...rest}>
      <h1>
        {title}
      </h1>
      <LabelInput
        text='Seu nome'
        placeholder='Exemplo: Maria da Silva'
        id='name'
        type='text'
        onChange={(e)=>setName(e.target.value)}
      />

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
        type='password'
        onChange={(e)=>setPassword(e.target.value)}
      />

      <Button
        title='Criar conta'
        onClick={handleSignUp}
      />

      <ButtonTransparrent
        title='Já tenho uma conta'
        onClick={handleBack}
      />



    </Container>
  )
}