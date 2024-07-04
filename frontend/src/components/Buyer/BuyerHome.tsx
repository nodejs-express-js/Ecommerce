import BuyersNavbar from './BuyersNavbar'
import BuyerPagination from './BuyerPagination'
import { useEffect, useState } from 'react'
const BuyerHome = () => {
  const [currentPage,setCurrentPage]=useState(0)

  useEffect(()=>{
    
  },[currentPage])

  return (
    <div>
      <BuyersNavbar></BuyersNavbar>
      
      <BuyerPagination currentPage={currentPage} setCurrentPage={setCurrentPage}></BuyerPagination>
    </div>
  )
}

export default BuyerHome