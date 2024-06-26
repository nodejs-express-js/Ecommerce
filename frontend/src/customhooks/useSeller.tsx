import { useContext } from "react"
import { SellerContext } from "../statemanager/Seller"
const useSeller = () => {
  const sellerContext=useContext(SellerContext)
  if(!sellerContext) {
    throw new Error("useSeller must be used within a SellerProvider")
    }
    return sellerContext
}

export default useSeller