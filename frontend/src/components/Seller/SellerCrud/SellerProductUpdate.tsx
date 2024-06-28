import { useState } from "react"
import Styles from './SellerProductUpdate.module.css'
import useSellerProduct from "../../../customhooks/useSellerProduct"
import {productType} from "../../../statemanager/Product"
import useSellerUpdate from "./useSellerUpdate"
const SellerProductUpdate = () => {
  const {state}=useSellerProduct();
  const  [error,setError,isloading,updateProduct]=useSellerUpdate();
  const [productToUpdate,setProductToUpdate] =useState<productType>({
    id: 1,
    productName: "",
    productImage:"",
    price: 0,
    quantity: 0
})
  const showProductToSelect=()=>{
    return state.data.map((item) => {
      return <div key={item.id} onClick={()=>{
        setProductToUpdate(
          {id:item.id, 
            productName:item.productName, 
            productImage:item.productImage,
            price: item.price,
            quantity: item.quantity
          }
        )
      }}>{item.productName}</div>
    })
  }
  const changeProduct=async()=>{
    if(!productToUpdate.productName || !productToUpdate.productImage || productToUpdate.productName==="" || productToUpdate.productImage===""){
      setError("please select Items by clicking on it")
      return;
    }
    await updateProduct(productToUpdate)
  }

return(
<div className={Styles.container}>
      <div className={Styles.selectedItems}>
        <h3>Select Items by clicking on them to Edit</h3>
        {showProductToSelect()}
      </div>
      <div className={Styles.updateForm}>
          <div>
            <label>Product Name: </label>
            <input type="text" value={productToUpdate.productName} onChange={(e)=>setProductToUpdate({...productToUpdate, productName: e.target.value})} />
          </div>  
          <div>
            <label>Product Image: </label>
            <input type="text" value={productToUpdate.productImage} onChange={(e)=>setProductToUpdate({...productToUpdate, productImage: e.target.value})} />
          </div>
          
          <div>
            <label>Price: </label>
            <input type="number" value={productToUpdate.price} onChange={(e)=>setProductToUpdate({...productToUpdate, price: parseInt(e.target.value)})} />
          </div>
          <div>
            <label>Quantity: </label>
            <input type="number" value={productToUpdate.quantity} onChange={(e)=>setProductToUpdate({...productToUpdate, quantity: parseInt(e.target.value)})} />
          </div>
          <div>
            <button onClick={changeProduct} disabled={isloading}>Update</button>
          </div>
          <div>{error}</div>
      </div>
</div>
)
}

export default SellerProductUpdate