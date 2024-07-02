import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
  const navigate=useNavigate();
  return (
    <div>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <div style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>home</div>
    </div>
  )
}

export default PageNotFound