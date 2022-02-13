import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '@hooks/useAppContext'
import { auth as authFirebase } from '../../firebase'
import Swal from 'sweetalert2'

export const ProtectedRoute = ({ children }) => {
  const { Auth, loading } = useAppContext()
  if (loading) return <h1>Loading</h1>
  if (!Auth.user && !authFirebase.currentUser) {
    return (
      <Navigate to='/login' />
    )
  }
  if (!Auth.user.emailVerified && !authFirebase.currentUser.emailVerified) {
    Swal.fire({
      title: 'Verifica tu correo electrónico',
      text: 'Para poder continuar debes verificar tu correo electrónico , revisa tu correo y vuelve a intentarlo',
      icon: 'warning',
      confirmButtonText: 'Verificar',
      confirmButtonColor: '#FFCB05',
      showCloseButton: true,
      focusConfirm: false,
      focusCancel: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      reverseButtons: true
    })
      .then(() => {
        Auth.Logout()
        return (
          <Navigate to='/login' />
        )
      })
  }

  return <> {children} </>
}
