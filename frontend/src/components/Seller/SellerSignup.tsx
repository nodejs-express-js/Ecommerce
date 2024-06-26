import  { useState } from 'react'
import SellerNavbar from './SellerNavbar'
import validator from 'validator';
import useSellerSignup from '../../customhooks/useSellerSignup';
const SellerSignup = () => {
  const [servererror,isloading,sellersignup]=useSellerSignup()
  const [signupInfo,setSignupInfo] =useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "confirmPassword": ""
  })
  
  const [error,setError] = useState("");
  const signup=async ()=>{
    setError("")
    if(!validator.isAlpha(signupInfo.firstName)){
      setError("firstName must be alphabets")
      return;
    }
    if(!validator.isAlpha(signupInfo.lastName)){
      setError("lastName must be alphabets")
      return;
    }
    if(!validator.isEmail(signupInfo.email)){
    setError("Please enter valid email")
    return;
    }
    if(!validator.isStrongPassword(signupInfo.password)){
      setError("password must contain one uppercase,lowercase,numeric and a symbol and must be atleast 8 characters long")
      return;
    }
    if(signupInfo.password!==signupInfo.confirmPassword){
      setError("Password and confirm password should be same")
      return;
    }
   
    await sellersignup(signupInfo.firstName, signupInfo.lastName, signupInfo.email, signupInfo.password)
    setError(servererror)

  }
  return (
    <div>
      <SellerNavbar></SellerNavbar>
      <div>
          <div>
            <label>Seller firstName</label>
            <input type="text" value={signupInfo.firstName}
            onChange={(e)=>{setSignupInfo({...signupInfo,firstName:e.target.value})}}></input>
          </div>
          <div>
            <label>Seller lastName</label>
            <input type="text" value={signupInfo.lastName}
            onChange={(e)=>{setSignupInfo({...signupInfo,lastName:e.target.value})}}></input>
          </div>
          <div>
            <label>Seller email</label>
            <input type="email" value={signupInfo.email}
            onChange={(e)=>{setSignupInfo({...signupInfo,email:e.target.value})}}></input>
          </div>
          <div>
            <label>Seller password</label>
            <input type="password" value={signupInfo.password}
            onChange={(e)=>{setSignupInfo({...signupInfo,password:e.target.value})}}></input>
          </div>
          <div>
            <label>Seller confirm password</label>
            <input type="password" value={signupInfo.confirmPassword}
            onChange={(e)=>{setSignupInfo({...signupInfo,confirmPassword:e.target.value})}}></input>
          </div>
          <div>
            <button onClick={signup} disabled={isloading}>Signup</button>
          </div>
          <div>{error}</div>
        </div>
    </div>
  )
}

export default SellerSignup