
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserNavbar from '../Navigation/userNavbar';



const UserReport = () => {

    return (
        
        <>
            <UserNavbar />
            <ToastContainer />
            <Container>
            <Row>
                <Col>UserReport</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            </Container>
        </>
    
    );
  };
  
  export default UserReport;