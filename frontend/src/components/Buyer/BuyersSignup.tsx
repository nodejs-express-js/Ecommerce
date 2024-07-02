import BuyersNavbar from "./BuyersNavbar"
import { useState } from "react";
import useBuyerSignup from "../../customhooks/useBuyerSignup";
const BuyersSignup = () => {
  const [buyersInfo,setBuyersInfo]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  const [error,isloading,buyerSignup,setError]=useBuyerSignup()
  const signup=async()=>{
    console.log(buyersInfo)
    if(!buyersInfo.firstName || !buyersInfo.lastName || !buyersInfo.email || !buyersInfo.password || !buyersInfo.confirmPassword){
      setError("All fields are required")
      return;
    }
    if(buyersInfo.password!==buyersInfo.confirmPassword){
      setError("Password and confirm password should be same")
      return;
    }
    buyerSignup(buyersInfo.firstName,buyersInfo.lastName,buyersInfo.email,buyersInfo.password)
  }
  return (
    <div>
        <BuyersNavbar></BuyersNavbar>
        <div>
          <div>
            <label>First Name</label>
            <input type="text" value={buyersInfo.firstName} onChange={(e)=>{setBuyersInfo({...buyersInfo,firstName:e.target.value})}}></input>
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" value={buyersInfo.lastName} onChange={(e)=>{setBuyersInfo({...buyersInfo,lastName:e.target.value})}}></input>
          </div>
          <div>
            <label>Email</label>
            <input type="email" value={buyersInfo.email} onChange={(e)=>{setBuyersInfo({...buyersInfo,email:e.target.value})}}></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={buyersInfo.password} onChange={(e)=>{setBuyersInfo({...buyersInfo,password:e.target.value})}}></input>
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" value={buyersInfo.confirmPassword} onChange={(e)=>{setBuyersInfo({...buyersInfo,confirmPassword:e.target.value})}}></input>
          </div>
          <button onClick={signup} disabled={isloading}>signup</button>
        </div>
        <div>{error}</div>
    </div>
  )
}

export default BuyersSignup