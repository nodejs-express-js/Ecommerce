import  { useEffect,useState } from 'react'
import useBuyerProduct from '../../customhooks/useBuyerProduct'
import {buyerProductType} from '../../statemanager/BuyerProduct'
import useBuyerFetchProducts from '../../customhooks/useBuyerFetchProducts'
import Styles from './BuyersProducts.module.css'
import useBuyerFetchOneProduct from '../../customhooks/useBuyerFetchOneProduct'
import { productType } from '../../statemanager/Product'
import { useNavigate } from 'react-router-dom'
type childrenType={
    currentPage:number,
    setProduct:React.Dispatch<React.SetStateAction<productType>>
}
const BuyersProducts = ({currentPage,setProduct}:childrenType) => {
    const {state}=useBuyerProduct()
    const [data,setData]=useState<buyerProductType[]>([]);
    const navigate=useNavigate();
    const [error,isloading,fetchproducts]=useBuyerFetchProducts();
    const [oneproducterror,oneproductisloading,getAProduct]=useBuyerFetchOneProduct();
    const goToProductView=async(id:number)=>{
        const product=await getAProduct(id)
        setProduct(product);
        navigate("/product")
    }
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
                <div key={index}  className={Styles.Container} >
                    <img src={item.productImage} alt={item.productName} className={Styles.image}></img>
                        <div className={Styles.minicontainer}>
                            <h3>{item.productName}</h3>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>views: {item.views}</p>
                            <button disabled={oneproductisloading} onClick={()=>{goToProductView(item.id)}}>view info</button>
                            <div>{oneproducterror}</div>
                        </div>
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