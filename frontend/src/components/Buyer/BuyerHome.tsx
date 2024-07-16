import BuyersNavbar from './BuyersNavbar'
import BuyerPagination from './BuyerPagination'
import {  useState } from 'react'
import BuyerProducts from  './BuyersProducts'
import { productType } from '../../statemanager/Product'
const BuyerHome = ({setProduct}:{setProduct:React.Dispatch<React.SetStateAction<productType>>}) => {
  const [currentPage,setCurrentPage]=useState(0)

  

  return (
    <div>
      <BuyersNavbar></BuyersNavbar>
      <BuyerProducts currentPage={currentPage} setProduct={setProduct}></BuyerProducts>
      <BuyerPagination currentPage={currentPage} setCurrentPage={setCurrentPage}></BuyerPagination>
    </div>
  )
}

export default BuyerHome