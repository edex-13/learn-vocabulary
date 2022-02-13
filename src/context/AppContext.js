import React, { createContext, useState } from 'react'
import { useAuth } from '@hooks/useAuth'

export const Context = createContext()

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const { ChangeAuth, ...Auth } = useAuth(setLoading)
  ChangeAuth()
  return (
    <Context.Provider value={{
      loading,
      Auth
    }}
    >
      {children}
    </Context.Provider>
  )
}
