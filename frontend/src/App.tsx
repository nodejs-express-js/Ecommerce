
import './App.module.css'
import SellerHome from './components/Seller/SellerHome'
import SellerLogin from './components/Seller/SellerLogin'
import SellerSignup from './components/Seller/SellerSignup'
import {Routes,Route} from 'react-router-dom'
import useSeller from './customhooks/useSeller'
import { Navigate } from 'react-router-dom'
function App() {
  const {state}=useSeller()
  return (
    <div>
      <Routes>

        <Route path="/" element={<SellerHome />} />
        <Route path="/sellerloginpage" element={state?.email ? <Navigate to="/"></Navigate> : <SellerLogin/>  } />
        <Route path="/sellersignuppage" element={state?.email ? <Navigate to="/"></Navigate> : <SellerSignup/>} />
      </Routes>
    </div>
  )
}

export default App
