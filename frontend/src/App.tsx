
import './App.module.css'
import SellerHome from './components/Seller/SellerHome'
import SellerLogin from './components/Seller/SellerLogin'
import SellerSignup from './components/Seller/SellerSignup'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SellerHome />} />
        <Route path="/sellerloginpage" element={<SellerLogin/>} />
        <Route path="/sellersignuppage" element={<SellerSignup/>} />
      </Routes>
    </div>
  )
}

export default App
