import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppContext } from '@hooks/useAppContext'

import { Button, Input, Text } from './style'

export const FormLogin = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { Auth: { Login } } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    Login(user.email, user.password)
  }
  const handleChange = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input required name='email' type='email' placeholder='Email' onChange={handleChange} />
      <Input required name='password' type='password' placeholder='Contraseña' onChange={handleChange} />
      <Button type='submit'>Iniciar sesión</Button>
      <Text>¿Olvidaste tu contraseña?</Text>
      <Text>¿No tienes cuentas? , <Link to='/register'>Registrate</Link>.</Text>
    </form>
  )
}
