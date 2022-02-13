import React from 'react'

import { FormRegister } from '@components/FormRegister/'

import { RegisterContainer, Title } from './styles'

export const Register = () => {
  return (
    <RegisterContainer>
      <Title>Registrarse</Title>
      <FormRegister />
    </RegisterContainer>
  )
}
