import Styles from './SellerProductDelete.module.css'
import useSellerProduct from '../../../customhooks/useSellerProduct';
import useSellerDelete from './useSellerDelete';
const SellerProductDelete = () => {
  const {state}=useSellerProduct();
  const [error,isloading,deleteProduct]=useSellerDelete()
  const deleteItem=(id:number)=>{
    deleteProduct(id)
  }
  const showData=()=>{
    return state.data.map((item) => {
        return (<div key={item.id} className={Styles.Container}>
                    <div>
                        <div><span>Product Name:</span> {item.productName} </div>
                        <div><span>quantity :</span>{item.quantity}</div>
                        <div><span>price:</span> {item.price}</div>
                    </div>
                    <button className="material-symbols-outlined" id={Styles.deleteButton} onClick={()=>{deleteItem(item.id)}}
                      disabled={isloading}>delete</button>
                      
                </div>)
    })
}
  return (
    <div>
        {showData()}
        <div>{error}</div>
    </div>
  )
}

export default SellerProductDelete