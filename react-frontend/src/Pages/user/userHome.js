
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserNavbar from "../Navigation/userNavbar";

const UserHome = () => {
    return (
    <>
      <UserNavbar />
      <ToastContainer />
      <h1>User Home Protected</h1>
    </>
)
  };
  
  export default UserHome;