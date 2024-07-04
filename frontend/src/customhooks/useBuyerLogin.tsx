import { useState } from "react"
import useBuyer from "./useBuyer"
const useBuyerLogin = () => {
  const [error,setError]=useState("")
  const [isloading,setIsLoading]=useState(false)
  const {dispatch}=useBuyer();
  const buyerlogin=async(email:string,password:string)=>{
    try{
      setIsLoading(true)
      setError("")
      const response=await fetch(import.meta.env.VITE_API_BASE_URL+import.meta.env.VITE_CUSTOMER_LOGIN_URL,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:email,
          password:password
        })})
      const body=await response.json();
      if(!response.ok){
        setError(body.message)
        return
      }
      else{
        dispatch({type:"LOGIN",payload:body})
      }
    }
    catch(err){
      setError("Something went wrong with server")
     
    }
    setIsLoading(false)
  }
  return [error,isloading,buyerlogin] as [string,boolean,(arg1:string,arg2:string)=>void]
}

export default useBuyerLogin