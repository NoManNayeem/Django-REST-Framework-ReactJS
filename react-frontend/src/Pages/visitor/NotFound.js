
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./visitorCSS/notfound.css";


const NotFound = () => {
    return (
        <>
            <ToastContainer />
            <Container>
                <div class="wrapper">
                    <div class="box">
                        <h1><a href="/">404! Not Found!</a></h1>
                    </div>
                </div>
            </Container>
        </>
    );
  };
  
  export default NotFound;