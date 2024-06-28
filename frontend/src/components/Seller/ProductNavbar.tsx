import Styles from './ProductNavbar.module.css'
import {crudType} from './SellerHome'

type selectACrudType =(arg1:crudType)=>void
const ProductNavbar = ({selectACrud}: {selectACrud:selectACrudType}) => {
  return (
    <div className={Styles.Container}>
        <div onClick={()=>{selectACrud("read")}}>View all my products</div>
        <div onClick={()=>{selectACrud("create")}}>Add a product</div>
        <div onClick={()=>{selectACrud("update")}}>Update a produt</div>
        <div onClick={()=>{selectACrud("delete")}}>Delete a product</div>
    </div>
  )
}

export default ProductNavbar