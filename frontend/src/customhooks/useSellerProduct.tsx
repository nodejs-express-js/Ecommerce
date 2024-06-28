import {useContext} from 'react'
import { ProductContext } from '../statemanager/Product';
const useSellerProduct = () => {
  const context=useContext(ProductContext);
  if(!context){
    throw new Error("useSellerProduct must be used within a ProductContextProvider")
  }
  return context;
}

export default useSellerProduct