import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'


import { Home, SingleProduct, Cart, Checkout, Error,About, Products, PrivateRoute } from './pages'

function App() {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App
