import {useState} from 'react'
import SellerNavbar from './SellerNavbar'

  const SellerLogin = () => {
    const [SellerInfo,setSellerInfo]=useState({
      email:"",
      password:""
    })
    const login=()=>{
      console.log(SellerInfo)
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
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  )
}
export default SellerLogin