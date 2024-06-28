import {productType} from '../../../statemanager/Product'
import { useState } from 'react';
import useSellerProduct from '../../../customhooks/useSellerProduct';
import useSeller from '../../../customhooks/useSeller';
const useSellerAdd = () => {
  const [error,setError]=useState("");
  const [isloading,setIsLoading]=useState(false);
  const {dispatch}=useSellerProduct();
  const {state}=useSeller();
  const createProduct=async(product:productType)=>{
    setIsLoading(true)
    setError("")
    try{
        if(!state?.token){
            throw new Error("please login to add a new product");
        }
        const response=await fetch(import.meta.env.VITE_SELLER_PRODUCT_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${state?.token}`
            },
            body:JSON.stringify(product)
        });
        const data=await response.json()
        if(!response.ok){
            setError(data.message)
        }
        else{
            setError("Product added successfully")
            dispatch({type:"ADD_PRODUCT",payload:data})
        }
    }catch(error){
        setError("Something unexpected happened with your request")
    }
    setIsLoading(false)

  }
  return [error,setError,isloading,createProduct] as [string,React.Dispatch<React.SetStateAction<string>>
    ,boolean,(arg1:productType)=>void]
}

export default useSellerAdd