import { useState } from "react"
import useBuyerProduct from "./useBuyerProduct"
import {buyerProductType} from '../statemanager/BuyerProduct'
const useBuyerFetchProducts = () => {
  const [error,setError]=useState("")
  const [isloading,setIsLoading]=useState(false)
  const {dispatch}=useBuyerProduct()
  const fetchproducts=async (pageNumber:number)=>{
    setError("")
    setIsLoading(true)
    try{
        const response=await fetch(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_NON_LOGIN_GET_PRODUCTS}/${pageNumber}`,{
            method:"GET",
        })
        if(!response.ok){
            const data=await response.json();
            setError(data.message)
        }
        else{
            const data:buyerProductType[]=await response.json();
            dispatch({type:"ADD_PAGE_OF_PRODUCTS",payload:{
                pageNumber,
                products:data}
            })
            setIsLoading(false)
            return data;
        }
    }
    catch(Err){
        setError("something went wrong with server")
    }
    setIsLoading(false)
  }

  return [error,isloading,fetchproducts] as [string,boolean,(arg1:number)=>Promise<buyerProductType[]|undefined>]
}

export default useBuyerFetchProducts