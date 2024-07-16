import { createContext,useEffect,useReducer } from "react"
import useSeller from "../customhooks/useSeller"

export type productType={
id:number,
productName:string,
productImage:string,
price:number,
quantity:number,
sellerId?:number,
createdAt?:string,
updatedAt?:string,
views?:number
}


type actiontype1={
type:"SET_ERROR",
payload:string
}
type actiontype2={
type:"SET_LOADING",
payload:boolean
}
type actiontype3={
    type:"ADD_PRODUCTS",
    payload:productType[]
}
type actiontype4={
    type:"ADD_PRODUCT",
    payload:productType
}
type actiontype5={
    type:"DELETE_PRODUCT",
    payload:number
}
type actiontype6={
    type:"UPDATE_PRODUCT",
    payload:productType
}
type actiontype=actiontype1|actiontype2|actiontype3|actiontype4|actiontype5|actiontype6


type stateType1={
    data:[],
    error:string,
    isloading:boolean
}
type stateType2={
    data:productType[],
    error:string,
    isloading:boolean
}
type stateType=stateType1|stateType2

type childrentype={
    children:React.ReactNode
}

type productContextType={
    state:stateType,
    dispatch:React.Dispatch<actiontype>

}

const productReducer=(state:stateType,action:actiontype)=>{
    switch(action.type){
        case "SET_ERROR":
            return {...state,error:action.payload}
        case "SET_LOADING":
            return {...state,isloading:action.payload}
        case "ADD_PRODUCTS":
            return {...state,data:action.payload}
        case "ADD_PRODUCT":
            return {...state,data:[...state.data,action.payload]}
        case "DELETE_PRODUCT":
            return {...state,data:state.data.filter((item)=>item.id!==action.payload)}
        case "UPDATE_PRODUCT":{
            const temp=state.data.filter((item)=>item.id!==action.payload.id)
            return {...state,data:[...temp,action.payload]}
        }
        default:
            return state;
    }
}

export const ProductContext=createContext<null|productContextType>(null)

const Product = ({children}:childrentype) => {
    const {state:sellerstate}=useSeller();
    const [state,dispatch]=useReducer(productReducer,{data:[],error:"",isloading:false})
    const getproducts=async()=>{
        try{
            if(!sellerstate?.token){
                dispatch({type:"SET_ERROR",payload:"please login again"})
                return;
            }
        dispatch({type:"SET_LOADING",payload:true})
        dispatch({type:"SET_ERROR",payload:""})
        const response=await fetch(import.meta.env.VITE_API_BASE_URL+import.meta.env.VITE_SELLER_PRODUCT_URL,
            {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${sellerstate?.token}`
                }
            }
        )
        const data=await response.json()
        if(response.ok){
            dispatch({type:"ADD_PRODUCTS",payload:data})
        }
        else{
            dispatch({type:"SET_ERROR",payload:data.message})
        }
        }
        catch(err){
            dispatch({type:"SET_ERROR",payload:"something went wrong with the request"})
        }
        dispatch({type:"SET_LOADING",payload:false})
    }
    useEffect(()=>{
        getproducts()
    },[sellerstate])
  return (
    <ProductContext.Provider value={{state,dispatch}}>
        {children}
    </ProductContext.Provider>
  )
}

export default Product