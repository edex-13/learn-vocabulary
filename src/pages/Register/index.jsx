import React from 'react'
import { BsFacebook, BsGoogle } from 'react-icons/bs'

import { FormRegister } from '@components/FormRegister/'

import { RegisterContainer, Title, Subtitle, SocialContainer } from './styles'

export const Register = () => {
  return (
    <RegisterContainer>
      <Title>Registrarse</Title>
      <div>
        <SocialContainer>
          <BsGoogle size={22} />
        </SocialContainer>
        <SocialContainer>
          <BsFacebook size={22} />
        </SocialContainer>
      </div>
      <Subtitle>o usa tu correo</Subtitle>
      <FormRegister />
    </RegisterContainer>
  )
}
