import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Text } from './style'
export const FormRegister = () => {
  return (
    <form>
      <Input type='email' placeholder='Email' />
      <Input type='name' placeholder='Nombre' />
      <Input type='password' placeholder='Contraseña' />
      <Input type='password' placeholder='Confirmación de Contraseña' />
      <Button type='submit'>Registrase</Button>
      <Text>¿Ya tienes cuenta? , <Link to='/login'>Inicia Sesión</Link>.</Text>
    </form>
  )
}
