import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'


import { Home, SingleProduct, Cart, Checkout, Error,About, Products, PrivateRoute, AuthWrapper } from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar /> 
        <Sidebar />
        <Routes>
          
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>

  )
}

export default App
