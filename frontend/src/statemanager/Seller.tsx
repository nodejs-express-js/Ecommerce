import { createContext,useEffect,useReducer } from "react";

export type sellerStateType1={
email:string,
token:string,
}
type sellerStateType=sellerStateType1|null
type sellerActionType1={
type:"LOGIN",
payload:sellerStateType
}
type sellerActionType2={
    type:"LOGOUT",
}
type childrentype={
    children:React.ReactNode
}
type sellerActionType=sellerActionType1|sellerActionType2

type contextValueType={
    state:sellerStateType,
    dispatch:React.Dispatch<sellerActionType>
}
const sellerReducer=(state:sellerStateType,action:sellerActionType)=>{
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("seller", JSON.stringify(action.payload));
            return action.payload;
        case "LOGOUT":
            localStorage.removeItem("seller");
            return null
        default:
            return state;
    }
}


export const SellerContext=createContext<null|contextValueType>(null);
const Seller = ({children}:childrentype) => {
    const [state,dispatch]=useReducer(sellerReducer,null);
    useEffect(()=>{
        const curr=localStorage.getItem("seller")
        if(curr!==null)
        {
            try{
                const seller=JSON.parse(curr)
                dispatch({type:"LOGIN",payload:seller});
            }
            catch(err){
                console.error("no previous seller")
             }
        }
    },[])
  return (
    <SellerContext.Provider value={{state,dispatch}}>
        {children}
    </SellerContext.Provider>
  )
}


export default Seller