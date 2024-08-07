import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Seller from './statemanager/Seller.tsx'
import Product from './statemanager/Product.tsx'
import Buyer from './statemanager/Buyer.tsx'
import BuyerProduct from './statemanager/BuyerProduct.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <BuyerProduct>  
        <Buyer>
              <Seller>
              <Product> 
                  <App />
              </Product>
              </Seller>
        </Buyer>
        </BuyerProduct>
    </BrowserRouter>
  </React.StrictMode>,
)
