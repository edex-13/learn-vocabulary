import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '@hooks/useAppContext'

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAppContext()
  console.log(useAppContext())
  if (loading) return <h1>Loading</h1>
  if (!user) {
    return (
      <Navigate to='/login' />
    )
  }

  return <> {children} </>
}
