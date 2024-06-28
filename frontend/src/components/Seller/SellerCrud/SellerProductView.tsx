import useSellerProduct from "../../../customhooks/useSellerProduct";
const SellerProductView = () => {
    const {state}=useSellerProduct();
    const showData=()=>{
        return state.data.map((item) => {
            return (<div key={item.id}>
                        <div><span>Product Name:</span> {item.productName}</div>
                        <img src={item.productImage} alt={item.productName}></img>
                        <div><span>quantity :</span>{item.quantity}</div>
                        <div><span>price:</span> {item.price}</div>
                    </div>)
        })
    }
  return (
    <div>
        {showData()}
    </div>
  )
}

export default SellerProductView