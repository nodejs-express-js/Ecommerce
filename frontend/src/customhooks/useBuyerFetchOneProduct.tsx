import { useState } from "react"
import { productType } from "../statemanager/Product"
const useBuyerFetchOneProduct = () => {
    const [error,setError]=useState("")
    const [isloading,setIsLoading]=useState(false)
    const getAProduct=async(id:number)=>{
        try{
            setError("")
            setIsLoading(true)
            const response=await fetch(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_NON_LOGIN_GET_ONE_PRODUCT}${id}`)
            const product:productType[]=await response.json()
            if(product.length==1)
            {
                setIsLoading(false)
                return product[0]
            }
        }   
        catch(err){
            setError("something went wrong")
        }
        setIsLoading(false)
        return {} as productType
    }
    return [error,isloading,getAProduct] as [string,boolean,(arg1:number)=>Promise<productType>]
}

export default useBuyerFetchOneProduct