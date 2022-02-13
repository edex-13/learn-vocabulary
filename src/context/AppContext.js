import React, { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

export const Context = createContext()

export const AppContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    console.log('cambiooo')
    return () => unsubuscribe()
  }, [])

  return (
    <Context.Provider value={{
      user,
      loading
    }}
    >
      {children}
    </Context.Provider>
  )
}
