import BuyersNavbar from './BuyersNavbar'
import BuyerPagination from './BuyerPagination'
import {  useState } from 'react'
import BuyerProducts from  './BuyersProducts'
const BuyerHome = () => {
  const [currentPage,setCurrentPage]=useState(0)

  

  return (
    <div>
      <BuyersNavbar></BuyersNavbar>
      <BuyerProducts currentPage={currentPage}></BuyerProducts>
      <BuyerPagination currentPage={currentPage} setCurrentPage={setCurrentPage}></BuyerPagination>
    </div>
  )
}

export default BuyerHome