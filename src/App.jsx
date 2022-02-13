import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppContext } from '@context/AppContext'

import { ProtectedRoute } from '@components/ProtectedRoute'
import { RedirectRoute } from '@components/RedirectRoute'
import { Home } from './pages/Home/index.jsx'
import { Login } from './pages/Login/index.jsx'
import { Register } from './pages/Register/index.jsx'

import { Header } from '@components/Header/'
import { Footer } from '@components/Footer/'

import { GlobalStyle } from '@styles/GlobalStyle'

export const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route
            path='/' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/login' element={
              <RedirectRoute>
                <Login />
              </RedirectRoute>
            }
          />
          <Route
            path='/Register' element={
              <Register />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext>
  )
}
