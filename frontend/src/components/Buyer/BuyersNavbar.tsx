import { useNavigate } from "react-router-dom"
import Styles from './BuyersNavbar.module.css'
const BuyersNavbar = () => {
    const navigate=useNavigate()
    const login=()=>{
        navigate("/login")
    }
    const signup=()=>{
        navigate("/signup")
    }
    const seller=()=>{
        navigate("/seller")
    }
  return (
    <div className={Styles.container}>
        <div className={Styles.home}>Ecommerce</div>
        <div className={Styles.miniContainer}>
            <div>
                <div onClick={login} className={Styles.login}>login</div>
                <div onClick={signup} className={Styles.signup}>signup</div>
            </div>
            <div onClick={seller} className={Styles.seller}>Become  a seller</div>
        </div>     
    </div>
  )
}

export default BuyersNavbar