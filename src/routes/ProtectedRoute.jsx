import  {Navigate} from "react-router-dom";
// import nav

const ProtectedRoute = ({children}) => {
const isAuth=JSON.parse(localStorage.getItem("auth")) || null

  return (
      <>
   {/* aqui va nav */}

      {isAuth ? children : <Navigate to= "login"/>}  
      </>

  )
} 

export default ProtectedRoute;