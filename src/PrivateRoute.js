import { Navigate, Outlet } from "react-router-dom";


const useAuth=()=>{
  const user=localStorage.getItem('@token')
  if(user){
    return true
  } else {
    return false
  }
}
function PrivateRoute() {
  const auth=useAuth()
  return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;