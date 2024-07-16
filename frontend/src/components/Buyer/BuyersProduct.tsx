import { productType } from "../../statemanager/Product"
import Styles from './BuyersProduct.module.css'
const BuyersProduct = ({item}:{item:productType}) => {
  return (
    <div  className={Styles.Container} >
        <img src={item.productImage} alt={item.productName} className={Styles.image}></img>
        <div className={Styles.minicontainer}>
          <h3>{item.productName}</h3>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>views: {item.views}</p>
          <button>Add to Cart</button>
        </div>
  </div>
  )
}

export default BuyersProduct