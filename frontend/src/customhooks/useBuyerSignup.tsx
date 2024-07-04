import {useState} from 'react'
import useBuyer from './useBuyer'
const useBuyerSignup = () => {
  const [error,setError]=useState("")
  const [isloading,setIsLoading]=useState(false)
  const {dispatch}=useBuyer();
  const buyerSignup=async(firstName:string,lastName:string,email:string,password:string)=>{
    try{
        setIsLoading(true)
        setError("")
        const response=await fetch(import.meta.env.VITE_API_BASE_URL+import.meta.env.VITE_CUSTOMER_SIGNUP,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                firstName,
                lastName,
                email,
                password
            })
        })
        const data=await response.json()
        if(!response.ok){
            setError(data.message)
        }
        else{
            localStorage.setItem("buyer",data)
            dispatch({type:"LOGIN",payload:data})
        }
    }
    catch(err){
        setError("Something went wrong!")
  
    }
    setIsLoading(false)
  }
  return [error,isloading,buyerSignup,setError] as [string,boolean,(arg1:string,arg2:string,arg3:string,arg4:string)=>void,React.Dispatch<React.SetStateAction<string>>
  ]
}

export default useBuyerSignup