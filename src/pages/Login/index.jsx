import React from 'react'
import { BsGoogle } from 'react-icons/bs'

import { useAppContext } from '@hooks/useAppContext'

import { FormLogin } from '@components/FormLogin/'

import { LoginContainer, Title, Subtitle, SocialContainer } from './styles'

export const Login = () => {
  const { Auth: { LoginWithGoogle } } = useAppContext()
  const handleGoogleSignin = async () => {
    await LoginWithGoogle()
  }
  return (
    <LoginContainer>
      <Title>Iniciar sesión</Title>
      <div>
        <SocialContainer onClick={handleGoogleSignin}>
          <BsGoogle size={22} />
        </SocialContainer>
      </div>
      <Subtitle>o usa tu cuenta</Subtitle>
      <FormLogin />
    </LoginContainer>
  )
}
