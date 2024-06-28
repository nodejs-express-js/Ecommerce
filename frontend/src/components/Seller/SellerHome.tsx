import useSeller from "../../customhooks/useSeller"
import { useState } from "react"
import SellerNavbar from "./SellerNavbar"
import SellerProductView from "./SellerCrud/SellerProductView"
import SellerProductCreate from "./SellerCrud/SellerProductCreate"
import SellerProductUpdate from "./SellerCrud/SellerProductUpdate"
import SellerProductDelete from "./SellerCrud/SellerProductDelete"

import ProductNavbar from "./ProductNavbar"

export type crudType="read"|"create"|"update"|"delete";
const SellerHome = () => {
  
  const [crud,setCrud]=useState<crudType>("read");
  const {state}=useSeller();

  const selectACrud=(value:crudType)=>{
    setCrud(value)
  }

  const showSelectedCrud=()=>{
  if(crud==="update") {
    return <SellerProductUpdate></SellerProductUpdate>
  } 
  else if(crud==="create") {
  return <SellerProductCreate></SellerProductCreate>
  }
  else if(crud==="delete") {
  return <SellerProductDelete></SellerProductDelete>
  }
  else{
    return <SellerProductView></SellerProductView>
  }  
  }

  return (
    <div>
        <SellerNavbar></SellerNavbar>  
        {state?.email ? 
        <div>
          <ProductNavbar selectACrud={selectACrud}></ProductNavbar>
          {showSelectedCrud() }
        </div>
        : 
        <div>Please login</div>}
    </div>
  )
}

export default SellerHome