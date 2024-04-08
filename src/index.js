import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
// dev-rka3n06c3krrricb.us.auth0.com
// XBff7bXEFEgH66loWu1y7kJecqy6w4xp


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain='dev-rka3n06c3krrricb.us.auth0.com'
    clientId='XBff7bXEFEgH66loWu1y7kJecqy6w4xp'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
  </Auth0Provider>

);
