import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Text } from './style'

import { useAppContext } from '@hooks/useAppContext'

export const FormRegister = () => {
  const { Auth: { Register } } = useAppContext()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const handleChange = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password !== user.passwordConfirm) {
      window.alert('Las contraseñas no coinciden')
      return
    }
    console.log(user)
    Register(user)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input onChange={handleChange} name='email' type='email' placeholder='Email' />
      <Input onChange={handleChange} name='name' type='name' placeholder='Nombre' />
      <Input onChange={handleChange} name='password' type='password' placeholder='Contraseña' />
      <Input onChange={handleChange} name='passwordConfirm' type='password' placeholder='Confirmación de Contraseña' />
      <Button type='submit'>Registrase</Button>
      <Text>¿Ya tienes cuenta? , <Link to='/login'>Inicia Sesión</Link>.</Text>
    </form>
  )
}
