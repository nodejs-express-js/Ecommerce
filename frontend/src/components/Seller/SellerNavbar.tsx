import useSeller from '../../customhooks/useSeller';
import Styles from './SellerNavbar.module.css'
import { useNavigate } from 'react-router-dom'
const SellerNavbar = () => {
  const {state,dispatch}=useSeller();
  const navigate=useNavigate();
  const Buyer=()=>{
    navigate("/")
  }
  const home=()=>{
    navigate("/seller")
  }
  const login=()=>
  {
    navigate("/sellerloginpage")
  }
  const signup=()=>{
    navigate("/sellersignuppage")
  }
  const logout=()=>{
    dispatch({type: "LOGOUT"})
    navigate("/seller")
  }
  return (
    <div className={Styles.container}>
        <div onClick={home} className={Styles.home}>Sellers</div>
        {!state?.email ?
        <div className={Styles.minicontainer}>
          <div>
          <div onClick={login} className={Styles.login}>Login</div>
          <div onClick={signup} className={Styles.signup}>Signup</div>
          </div>
            <div onClick={Buyer} className={Styles.Buyer}>
              Try Shopping
            </div>
        </div>
        :
          <div>
            <div>
          
            <div>{state?.email}</div>
            <div className={Styles.logout} onClick={logout}>logout</div>
            </div>
            <div onClick={Buyer} className={Styles.Buyer}>
              Try Shopping
            </div>
          </div>
        }
        
        
    </div>
  )
}

export default SellerNavbar