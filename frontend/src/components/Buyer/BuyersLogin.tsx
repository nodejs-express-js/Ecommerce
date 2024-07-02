import BuyersNavbar from "./BuyersNavbar"
import { useState } from "react"
import useBuyerLogin from "../../customhooks/useBuyerLogin"
const BuyersLogin = () => {
  const [buyersInfo,setBuyersInfo]=useState({
    email:"",
    password:""
  })
  const [error,isloading,buyerlogin]=useBuyerLogin();
  const login=()=>{
    buyerlogin(buyersInfo.email,buyersInfo.password);
  }
  return (
    <div>
        <BuyersNavbar></BuyersNavbar>
        <div>
          <div>
              <label>Buyer email</label>
              <input type="text" value={buyersInfo.email} onChange={(e)=>{setBuyersInfo({...buyersInfo,email:e.target.value})}}></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={buyersInfo.password} onChange={(e)=>{setBuyersInfo({...buyersInfo,password:e.target.value})}}></input>
          </div>
          <button onClick={login} disabled={isloading} >login</button>
        </div>
        <div>{error}</div>
    </div>
  )
}

export default BuyersLogin