import { useState } from "react"
import useSellerAdd from "./useSellerAdd";
const SellerProductCreate = () => {
  const [error,setError,isloading,createProduct]=useSellerAdd();
  const [sellerProduct,setSellerProduct]=useState({
    productName: "",
    productImage: "",
    price: 0,
    quantity: 0,
  })
  const addProduct = async() =>{
    if(!sellerProduct.productName || !sellerProduct.productImage || sellerProduct.productName==="" || sellerProduct.productImage===""){
      setError("please enter all fields")
      return;
    }
    await createProduct(sellerProduct)
      setSellerProduct({
        productName: "",
        productImage: "",
        price: 0,
        quantity: 0,
      })
    
    
  }
  return (
    <div>
        <div>
            <label>Product Name: </label>
            <input type="text" value={sellerProduct.productName} onChange={(e)=>setSellerProduct({...sellerProduct,productName:e.target.value})}></input>
        </div>
        <div>
            <label>Product Image Url: </label>
            <input type="text" value={sellerProduct.productImage} onChange={(e)=>setSellerProduct({...sellerProduct,productImage:e.target.value})}></input>
        </div>
        <div>
          <label>Product Price: </label>
          <input type="number" value={sellerProduct.price} onChange={(e)=>setSellerProduct({...sellerProduct,price:parseInt(e.target.value)})}></input>
        </div>
        <div>
            <label>Quantity: </label>
            <input type="number" value={sellerProduct.quantity} onChange={(e)=>setSellerProduct({...sellerProduct,quantity:parseInt(e.target.value)})}></input>
        </div>
        <button onClick={addProduct} disabled={isloading}>add product</button>
        <div>{error}</div>
    </div>
  )
}

export default SellerProductCreate