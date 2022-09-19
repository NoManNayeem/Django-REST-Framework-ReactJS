import "./visitorCSS/visitorStyle.css";
import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


function VisitorHome() {
  
  // Screen Size
  // const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
      // setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  
  // Screen Size Ends

    return (
      <div className="App" style={{background: "#2976db", height:height,}}>
      <ToastContainer />
        <div className="landingContent">
          <h1>Super Website</h1>
          <p>An Awesome website Landing Page.{localStorage.getItem("TOKEN")}</p>
          <div className="mb-2 p-2">
            <Button variant="dark" size="lg">
              <Link to="/login" className="text-white noUnderLine shadow">Log In</Link>
            </Button>
          </div>
          <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://loremflickr.com/g/920/200/technology,computer/all"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://loremflickr.com/g/920/200/technology,ai/all"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://loremflickr.com/g/920/200/technology,roads/all"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      

);
}
  
  export default VisitorHome;