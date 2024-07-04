import useSellerProduct from "../../../customhooks/useSellerProduct";
import Styles from './SellerProductView.module.css'
const SellerProductView = () => {
    const {state}=useSellerProduct();
    const showData=()=>{
        return state.data.map((item) => {
            return (<div key={item.id} className={Styles.container}>
                        <div>
                        <div><span>Product Name:</span> {item.productName}</div>
                        <div><span>quantity :</span>{item.quantity}</div>
                        <div><span>price:</span> {item.price}</div>
                        </div>
                        <img src={item.productImage} alt={item.productName} className={Styles.image}></img>

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