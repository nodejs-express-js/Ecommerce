import Styles from './SellerNavbar.module.css'
import { useNavigate } from 'react-router-dom'
const SellerNavbar = () => {
  const navigate=useNavigate();
  const home=()=>{
    navigate("/")
  }
  const login=()=>
  {
    navigate("/sellerloginpage")
  }
  const signup=()=>{
    navigate("/sellersignuppage")
  }
  return (
    <div className={Styles.container}>
        <div onClick={home} className={Styles.home}>Sellers</div>
        <div className={Styles.minicontainer}>
            <div onClick={login} className={Styles.login}>Login</div>
            <div onClick={signup} className={Styles.signup}>Signup</div>
        </div>
    </div>
  )
}

export default SellerNavbar