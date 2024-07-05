import React, { createContext, useReducer } from "react"


type childrenType={
    children:React.ReactNode
}
type BuyerProductContextType={
    state:buyerProductState,
    dispatch:React.Dispatch<buyerProductAction>
 
}
export type buyerProductType={
    id:number,
    productName:string,
    productImage:string,
    price:number,
    quantity:number,
    views:number,
    sellerId:number,
    createdAt:string,
    updatedAt:string,
}
type buyerProductPage={
    pageNumber:number,
    products:buyerProductType[]
}
type buyerProductState=buyerProductPage[]

type buyerProductAction1={
    type:"ADD_PAGE_OF_PRODUCTS",
    payload:{
        pageNumber:number,
        products:buyerProductType[]
    }
}
type buyerProductAction=buyerProductAction1
const buyerProductReducer=(state:buyerProductState,action:buyerProductAction)=>{
    switch(action.type){
        case "ADD_PAGE_OF_PRODUCTS":{
            const exists=state.filter((page)=>{page.pageNumber!==action.payload.pageNumber})
            if(exists){
                return [...exists,action.payload]
            }
            else{
                return [...state,action.payload]
            }
        }
        default:
            return state
    }
}




export const BuyerProductContext=createContext<BuyerProductContextType|null>(null)
const BuyerProduct = ({children}:childrenType) => {
    const [state,dispatch]=useReducer(buyerProductReducer,[])
  return(
  <BuyerProductContext.Provider value={{state,dispatch}}>
    {children}
  </BuyerProductContext.Provider>
  )
}

export default BuyerProduct