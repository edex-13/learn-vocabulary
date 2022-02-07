import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Input, Text } from './style'
export const FormLogin = () => {
  return (
    <form>
      <Input type='email' placeholder='Email' />
      <Input type='password' placeholder='Contraseña' />
      <Button type='submit'>Iniciar sesión</Button>
      <Text>¿Olvidaste tu contraseña?</Text>
      <Text>¿No tienes cuentas? , <Link to='/register'>Registrate</Link>.</Text>
    </form>
  )
}
