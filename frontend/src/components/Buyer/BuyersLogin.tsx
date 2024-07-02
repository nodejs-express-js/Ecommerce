import BuyersNavbar from "./BuyersNavbar"
import { useState } from "react"
const BuyersLogin = () => {
  const [buyersInfo,setBuyersInfo]=useState({
    email:"",
    password:""
  })
  const login=()=>{
    console.log(buyersInfo)
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
          <button onClick={login}>login</button>
        </div>
    </div>
  )
}

export default BuyersLogin