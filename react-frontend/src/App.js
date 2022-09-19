import React, { useState,useEffect } from "react";
import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";


//  Visitor Components Starts ///
import VisitorHome from "./Pages/visitor/visitorHome";
import Login from "./Pages/authentication/Login";
import NotFound from "./Pages/visitor/NotFound";
//  Visitor Components Ends ///


//  User Components Starts ///
import UserHome from "./Pages/user/userHome";
import { UserRoute } from "./Pages/Routes/UserRoute";
import UserReport from "./Pages/user/UserReport";
import UserProfile from "./Pages/user/UserProfile";
import UserSetting from "./Pages/user/UserSetting";
//  User Components Ends ///
import Cookies from "universal-cookie";
//  Admin Components Starts ///
import AdminHome from "./Pages/admin/AdminHome";
import { AdminRoute } from "./Pages/Routes/AdminRoute";
import AdminReport from "./Pages/admin/AdminReport";
import AdminSetting from "./Pages/admin/AdminSetting";
import AdminProfile from "./Pages/admin/AdminProfile";
//  Admin Components Ends ///
const cookies = new Cookies();






function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [isAdmin, setAdmin] = useState(2);



  if (cookies.get("TOKEN") && cookies.get("userType")==2){
    return (
        <>
            <BrowserRouter>
                <Routes>              
                    <Route path="/user" element={<UserHome/>} />
                    <Route path="/userReport" element={<UserReport/>} />
                    <Route path="/userProfile" element={<UserProfile/>} />
                    <Route path="/userSetting" element={<UserSetting/>} />
                    <Route path="/" element={<VisitorHome/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
        );
  }
else if (cookies.get("TOKEN") && cookies.get("userType")==1){
    return (
        <>
            <BrowserRouter>
                <Routes>              
                    <Route path="/admin" element={<AdminHome/>} />
                    <Route path="/adminReport" element={<AdminReport/>} />
                    <Route path="/adminSetting" element={<AdminSetting/>} />
                    <Route path="/adminProfile" element={<AdminProfile/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/" element={<VisitorHome/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
        );
  }
  else{
    return (
      <>
          <BrowserRouter>
              <Routes>              
                  <Route path="/login" element={<Login/>} />
                  <Route path="/" element={<VisitorHome/>} />
                  <Route path="*" element={<NotFound/>} />
              </Routes>
          </BrowserRouter>
      </>
      );
  }








}

export default App;






// function App() {
//   // To Check User
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setAdmin] = useState(false);
//   const [accessToken, setAccessToken] = useState(true);
  

//   useEffect(() => {
//   // get token generated on login
//   const myToken = cookies.get("ACCESS_TOKEN");
//   setAccessToken(myToken)
//     //Runs on every render
//   });
  
//     return (
//       <BrowserRouter>
//         <Routes>
//         <Route path="/" element={<VisitorHome />} />
//         <Route path="/login" element={<Login />} />
//         {/* User Routes */}
//         <Route path="/user" element={
//           <UserRoute >
//               <UserHome />
//           </UserRoute>
//           }>
//         </Route>
        
//         <Route path="/userSetting" element={
//           <UserRoute >
//               <UserSetting />
//           </UserRoute>
//           }>
//         </Route>
        
//         <Route path="/userProfile" element={
//           <UserRoute >
//               <UserProfile />
//           </UserRoute>
//           }>
//         </Route>
        
//         <Route path="/userReport" element={
//           <UserRoute >
//               <UserReport />
//           </UserRoute>
//           }>
//         </Route>

//         {/* User Routes Ends*/}

               
//         <Route path="/admin" element={
//             <AdminRoute >
//                 <AdminHome />
//             </AdminRoute>
//             }> 
//         </Route>
//         <Route path="/adminProfile" element={
//             <AdminRoute >
//                 <AdminProfile />
//             </AdminRoute>
//             }> 
//         </Route>
//         <Route path="/adminSetting" element={
//             <AdminRoute >
//                 <AdminSetting />
//             </AdminRoute>
//             }> 
//         </Route>
//         <Route path="/adminReport" element={
//             <AdminRoute >
//                 <AdminReport />
//             </AdminRoute>
//             }> 
//         </Route>

//         </Routes>
//       </BrowserRouter>
    
      
//       );
    
// }

// export default App;
