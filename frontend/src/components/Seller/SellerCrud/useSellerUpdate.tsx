import { useState } from "react";
import useSeller from "../../../customhooks/useSeller";
import {productType} from "../../../statemanager/Product"
import useSellerProduct from "../../../customhooks/useSellerProduct";
const useSellerUpdate = () => {
 const [error,setError]=useState("");
 const [isloading,setIsLoading]=useState(false)
const {state}=useSeller();
const {dispatch}=useSellerProduct();
 const updateProduct=async(product:productType)=>{
    try{
        setIsLoading(true)
        setError("")
        const response=await fetch(import.meta.env.VITE_API_BASE_URL+import.meta.env.VITE_SELLER_PRODUCT_URL,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${state?.token}`
            },
            body:JSON.stringify(product)
        })
        const data=await response.json();
        if(response.ok){
            setError("product updated successfully")
            dispatch({type:"UPDATE_PRODUCT",payload:product});
        }
        else{
            setError(data.message)
        }
    }
    catch(Err){
        setError("Something went wrong with the request")
    }
    setIsLoading(false)
 }

 return [error,setError,isloading,updateProduct] as [string,React.Dispatch<React.SetStateAction<string>>,boolean,(product:productType)=>void]
}

export default useSellerUpdate