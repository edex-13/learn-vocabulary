import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

import { useAppContext } from '@hooks/useAppContext'

import { Button, Input, Text } from './style'

export const FormLogin = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { Auth: { Login, PasswordReset } } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    Login(user.email, user.password)
  }
  const handleChange = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value })
  }
  const handleResetPassword = () => {
    Swal.fire({
      title: '¿Olvidaste tu contraseña?',
      text: 'Ingresa tu correo para restablecerla.',
      icon: 'question',
      input: 'email',
      inputPlaceholder: 'Correo',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        PasswordReset(email)
        Swal.fire({
          title: '¡Enviado!',
          text: 'Revisa tu correo para restablecer tu contraseña.',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input required name='email' type='email' placeholder='Email' onChange={handleChange} />
      <Input required name='password' type='password' placeholder='Contraseña' onChange={handleChange} />
      <Button type='submit'>Iniciar sesión</Button>
      <Text onClick={handleResetPassword} click>¿Olvidaste tu contraseña?</Text>
      <Text>¿No tienes cuentas? , <Link to='/register'>Registrate</Link>.</Text>
    </form>
  )
}
