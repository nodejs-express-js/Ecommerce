import { createContext,useReducer } from "react";

type sellerStateType1={
email:string,
password:string,
}
type sellerStateType=sellerStateType1|null
type sellerActionType1={
type:string,
payload:sellerStateType
}
type childrentype={
    children:React.ReactNode
}
type contextValueType={
    state:sellerStateType,
    dispatch:React.Dispatch<sellerActionType1>
}
type sellerActionType=sellerActionType1
const sellerReducer=(state:sellerStateType,action:sellerActionType)=>{
    switch(action.type){
        case "LOGIN":
            return state;
        case "LOGOUT":
            return null
        default:
            return state;
    }
}


export const SellerContext=createContext<null|contextValueType>(null);
const Seller = ({children}:childrentype) => {
    const [state,dispatch]=useReducer(sellerReducer,null);
  return (
    <SellerContext.Provider value={{state,dispatch}}>
        {children}
    </SellerContext.Provider>
  )
}


export default Seller