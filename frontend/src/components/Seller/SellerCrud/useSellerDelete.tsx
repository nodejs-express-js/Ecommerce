import { useState } from "react";
import useSeller from "../../../customhooks/useSeller";
import useSellerProduct from "../../../customhooks/useSellerProduct";
const useSellerDelete = () => {
    const [error,setError]=useState("");
    const [isloading,setIsLoading]  = useState(false);
    const {state} = useSeller();
    const {dispatch}=useSellerProduct()
    const deleteProduct = async (productId: number) => {
    try{
        setError("")
        setIsLoading(true)
        if(!state?.token){
            throw new Error("please login to delete product")
        }
        const response=await fetch(import.meta.env.VITE_SELLER_PRODUCT_URL,
            {
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${state?.token}`
                },
                body:JSON.stringify({id:productId})
            }
        );
        const product=await response.json();
        if(response.ok){
            dispatch({type:"DELETE_PRODUCT",payload:productId})
        }
        else{
            setError(product.message)
        }
    }
    catch(error){
        setError("something went wrong with server")
    }
    setIsLoading(false)
    }
    return [error,isloading,deleteProduct] as [string , boolean , ((productId: number) => Promise<void>)]
}

export default useSellerDelete