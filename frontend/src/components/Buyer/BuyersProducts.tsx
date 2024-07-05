import  { useEffect,useState } from 'react'
import useBuyerProduct from '../../customhooks/useBuyerProduct'
import {buyerProductType} from '../../statemanager/BuyerProduct'
import useBuyerFetchProducts from '../../customhooks/useBuyerFetchProducts'
import Styles from './BuyersProducts.module.css'
type childrenType={
    currentPage:number
}
const BuyersProducts = ({currentPage}:childrenType) => {
    const {state}=useBuyerProduct()
    const [data,setData]=useState<buyerProductType[]>([]);
    const [error,isloading,fetchproducts]=useBuyerFetchProducts();
    
    useEffect(()=>{
        const getproducts=async()=>{
            if(currentPage===0){
                return;
            }
            const currentPageValues=state.filter(page=>{page.pageNumber===currentPage})

            if(currentPageValues.length===0 ){
                const products=await fetchproducts(currentPage);
                if(products===undefined){
                    return;
                }
                setData(products)
            }
            else{
                setData(currentPageValues[0].products)
            }
        }
        getproducts()
    },[currentPage])
    const showData=()=>{
        return data.map((item,index)=>{
            return (
                <div key={index}>
                    <h3>{item.productName}</h3>
                    <img src={item.productImage} alt={item.productName} className={Styles.image}></img>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            )
        })
    }
  return (
    <div>
       {showData()}
       {isloading ? <div>loading</div> : <></>}
       <div>{error}</div>
    </div>
  )
}

export default BuyersProducts