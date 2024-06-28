import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Seller from './statemanager/Seller.tsx'
import Product from './statemanager/Product.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Seller>
          <Product> 
            <App />
          </Product>
      </Seller>
    </BrowserRouter>
  </React.StrictMode>,
)
