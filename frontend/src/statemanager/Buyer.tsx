import { createContext,useReducer } from "react"

type stateType={
    email:string,
    token:string,
}

type actiontype1={
type:"LOGIN",
payload:stateType
}
type actiontype2={
type:"LOGOUT"
}
type actiontype=actiontype1|actiontype2
type buyerContextType={
    state:stateType|null,
    dispatch:React.Dispatch<actiontype>

}
type childrentype={
    children:React.ReactNode;
}
const buyerReducer=(state:stateType|null,action:actiontype)=>{
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("buyer", JSON.stringify(action.payload))
            return action.payload
        case  "LOGOUT":
            localStorage.removeItem("buyer")
            return null
        default:
            return state;
    }
}

export const BuyerContext=createContext<buyerContextType|null>(null)

const Buyer = ({children}:childrentype) => {
    const [state,dispatch]=useReducer(buyerReducer,null);
  return (
    <BuyerContext.Provider value={{state,dispatch}}>
        {children}
    </BuyerContext.Provider>
  )
}

export default Buyer