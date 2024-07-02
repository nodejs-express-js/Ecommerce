import { useNavigate } from "react-router-dom"
import Styles from './BuyersNavbar.module.css'
import useBuyer from "../../customhooks/useBuyer"
const BuyersNavbar = () => {
    const {state,dispatch}=useBuyer()
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
    const logout=()=>{
        navigate("/")
        dispatch({type: "LOGOUT"})
    }
  return (
    <div className={Styles.container}>
        <div className={Styles.home}>Ecommerce</div>
        <div className={Styles.miniContainer}>
            <div>{state?.email ?
                <div>
                    <div >{state?.email}</div>
                    <div onClick={logout} className={Styles.logout}>logout</div>
                </div>
                :
                <div>
                    <div onClick={login} className={Styles.login}>login</div>
                    <div onClick={signup} className={Styles.signup}>signup</div>
                </div>
            
            }</div>
            
            <div onClick={seller} className={Styles.seller}>Become  a seller</div>
        </div>     
    </div>
  )
}

export default BuyersNavbar