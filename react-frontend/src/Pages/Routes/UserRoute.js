import { Navigate, useLocation} from "react-router-dom";
import { toast } from "react-toastify";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const UserRoute = ({children}) => {
  let location = useLocation();
  if(!cookies.get("TOKEN")){
    if(!cookies.get("userType")===2){
    return <Navigate  to="/login" state={{ from: location }}  replace />;
  }}
  return children;
};