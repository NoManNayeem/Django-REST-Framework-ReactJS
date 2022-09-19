import React, { useState } from "react";
import { Form, Button,Card } from "react-bootstrap";
import axios from "axios";

import { LOGIN_API } from "../../store/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "universal-cookie";
const cookies = new Cookies();


export default function Login() {
  // initial state
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  // const [userType, setUserType] = useState(null);


  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: LOGIN_API,
      data: {
        "username" : username,
        "password": password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie userType
        cookies.set("TOKEN", result.data.token,);
        cookies.set("userType", result.data.userType,);
        // redirect user to the auth page
        if(cookies.get("userType") ==1){
          window.location.href = "/admin";}
        else if(cookies.get("userType") ==2){
          window.location.href = "/user";}
        else{window.location.href = "/"}

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
        toast.error("Error Found")
      });
  };

  return (
    <>
    <ToastContainer />
      <h2 align="center">Login</h2>
      <Card style={{ width: '18rem', margin:"auto" }}>
        <Form className="card" onSubmit={(e) => handleSubmit(e)}>
          {/* email */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          {/* password */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>

          {/* submit button */}
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </Button>
        </Form>

      </Card>
    </>
  );
}