import { BuyerProductContext } from '../statemanager/BuyerProduct'
import { useContext } from 'react';
const useBuyerProduct = () => {
  const context=useContext(BuyerProductContext);
  if(!context) {
    throw new Error("useBuyerProduct must be used within a BuyerProductProvider")
    }
    return context;
}

export default useBuyerProduct