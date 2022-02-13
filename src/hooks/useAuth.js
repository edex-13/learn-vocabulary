import { useState, useEffect } from 'react'
import {
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'

import { auth } from '../firebase'

export const useAuth = (setLoading) => {
  const [user, setUser] = useState(null)

  const Register = async ({ email, password, name } = {}) => {
    try {
      setLoading(true)
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, { displayName: name })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  const Login = (email, password) => {
    console.log('Login')
    return signInWithEmailAndPassword(auth, email, password)
  }
  const LoginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }
  const ChangeAuth = () =>
    useEffect(() => {
      const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
        console.log('ChangeAuth')
      })
      return () => unsubuscribe()
    }, [])

  return {
    user,
    Register,
    Login,
    LoginWithGoogle,
    ChangeAuth
  }
}
