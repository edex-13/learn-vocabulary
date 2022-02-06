import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/index.jsx'
import { Login } from './pages/Login/index.jsx'
import { Register } from './pages/Register/index.jsx'

import { Header } from '@components/Header/'
import { Footer } from '@components/Footer/'

import { GlobalStyle } from '@styles/GlobalStyle'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
