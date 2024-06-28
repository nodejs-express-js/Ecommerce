import { useState } from "react"
import useSeller from "./useSeller";
const useSellerSignup = () => {
  const [servererror,setError]=useState("");
  const [isloading,setisLoading]=useState(false);
  const {dispatch}=useSeller();

  const sellersignup=async(firstName:string,lastName:string,email:string,password:string)=>{
    setisLoading(true)
    setError("")
    try{
        const response=await fetch(import.meta.env.VITE_SELLER_SIGNUP_URL,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                firstName:firstName,
                lastName:lastName,
                email:email,
                password: password
            })
        })
        const signupInfo=await response.json();
        if(response.ok){
            dispatch({type:"LOGIN",payload:signupInfo});
        }
        else{
            setError(signupInfo.message);
        }
    }
    catch(error){
        setError("Something went wrong with server");
    }
    setisLoading(false)
  }

  
  return [servererror,isloading,sellersignup] 

}

export default useSellerSignup