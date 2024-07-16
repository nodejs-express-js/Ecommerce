
import './App.module.css'
import SellerHome from './components/Seller/SellerHome'
import SellerLogin from './components/Seller/SellerLogin'
import SellerSignup from './components/Seller/SellerSignup'
import BuyerHome from './components/Buyer/BuyerHome'
import {Routes,Route} from 'react-router-dom'
import useSeller from './customhooks/useSeller'
import { Navigate } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import BuyersLogin from './components/Buyer/BuyersLogin'
import BuyersSignup from './components/Buyer/BuyersSignup'
import useBuyer from './customhooks/useBuyer'
import BuyersProduct from './components/Buyer/BuyersProduct'
import { productType } from './statemanager/Product'
import { useState } from 'react'
function App() {
  const {state}=useSeller()
  const {state:buyerstate}=useBuyer();
  const [product,setProduct]=useState({} as productType);
  return (
    <div>
      <Routes>
        <Route path="/" element={<BuyerHome setProduct={setProduct}/>} />
        <Route path="/product" element={<BuyersProduct item={product}/>} />
        <Route path='/login' element={buyerstate?.email ? <Navigate to="/"></Navigate>:<BuyersLogin/>}></Route>
        <Route path='/signup' element={buyerstate?.email ? <Navigate to="/"></Navigate> :<BuyersSignup/>}></Route>
        <Route path="/seller" element={<SellerHome />} />
        <Route path="/sellerloginpage" element={state?.email ? <Navigate to="/seller"></Navigate> : <SellerLogin/>  } />
        <Route path="/sellersignuppage" element={state?.email ? <Navigate to="/seller"></Navigate> : <SellerSignup/>} />
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
