import {useContext} from 'react'
import { BuyerContext } from '../statemanager/Buyer'

const useBuyer = () => {
  const context = useContext(BuyerContext)
  if(!context){
    throw new Error("useBuyer must be used within a BuyerProvider")
  }
  return context
}

export default useBuyer