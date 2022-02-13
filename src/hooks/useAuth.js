import { useState, useEffect } from 'react'
import {
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification,
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
      await sendEmailVerification(auth.currentUser)
      await Logout()
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }
  const EmailVerification = async () => {
    try {
      setLoading(true)
      console.log(auth.currentUser)
      await sendEmailVerification(auth.currentUser)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const LoginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }
  const PasswordReset = async (email) => {
    try {
      setLoading(true)
      await sendPasswordResetEmail(auth, email)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }
  const Logout = () => auth.signOut()

  const ChangeAuth = () =>
    useEffect(() => {
      const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
      })
      return () => unsubuscribe()
    }, [])
  return {
    user,
    EmailVerification,
    Register,
    Login,
    LoginWithGoogle,
    PasswordReset,
    ChangeAuth,
    Logout
  }
}
