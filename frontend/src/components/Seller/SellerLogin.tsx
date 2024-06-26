import {useState} from 'react'
import SellerNavbar from './SellerNavbar'
import { useSellerLogin } from '../../customhooks/useSellerLogin'
  const SellerLogin = () => {
    const [error,isloading,sellerlogin]=useSellerLogin()
    const [SellerInfo,setSellerInfo]=useState({
      email:"",
      password:""
    })
    const login=()=>
    {
      sellerlogin(SellerInfo.email,SellerInfo.password)
    }
  return (
    <div>
      <SellerNavbar></SellerNavbar>
      <div>
        <div>
          <label>Seller email</label>
          <input type="text" onChange={(e)=>{
            setSellerInfo({...SellerInfo,email:e.target.value})}}
            value={SellerInfo.email}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password"
            onChange={(e)=>{
            setSellerInfo({...SellerInfo,password:e.target.value})}}
            value={SellerInfo.password}
          ></input>
        </div>
        <div>
          <button onClick={login} disabled={isloading}>Login</button>
        </div>
        <div>{error}</div>
      </div>
    </div>
  )
}
export default SellerLogin