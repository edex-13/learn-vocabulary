import React from 'react'
import { BsFacebook, BsGoogle } from 'react-icons/bs'

import { FormLogin } from '@components/FormLogin/'

import { LoginContainer, Title, Subtitle, SocialContainer } from './styles'

export const Login = () => {
  return (
    <LoginContainer>
      <Title>Iniciar sesión</Title>
      <div>
        <SocialContainer>
          <BsGoogle size={22} />
        </SocialContainer>
        <SocialContainer>
          <BsFacebook size={22} />
        </SocialContainer>
      </div>
      <Subtitle>o usa tu cuenta</Subtitle>
      <FormLogin />
    </LoginContainer>
  )
}
