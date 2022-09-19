import { Navigate, useLocation} from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const AdminRoute = ({children}) => {
  let location = useLocation();
  if(!cookies.get("TOKEN")){
    if(!cookies.get("userType")===1){
    return <Navigate  to="/login" state={{ from: location }}  replace />;
  }}
  return children;
};