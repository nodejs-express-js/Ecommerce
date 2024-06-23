import { useState } from "react"
export const useLogin = () => {
  const [error,setError]=useState("");
  const [isloading,setisloading]=useState(false);

  const sellerlogin=async(email:string,password:string)=>{
    try{
        setisloading(true);
        setError("")
        const response=await fetch(import.meta.env.SELLER_LOGIN_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        }) 
        
    }
    catch(err){
      setError("Something went wrong with server");
    }
  }

  return [error,isloading,sellerlogin]
}
