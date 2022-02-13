import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '@hooks/useAppContext'
import { auth as authFirebase } from '../../firebase'

export const RedirectRoute = ({ children }) => {
  const { Auth, loading } = useAppContext()
  if (loading) return <h1>Loading</h1>
  if (Auth.user && authFirebase.currentUser) {
    return (
      <Navigate to='/' />
    )
  }

  return <> {children} </>
}
