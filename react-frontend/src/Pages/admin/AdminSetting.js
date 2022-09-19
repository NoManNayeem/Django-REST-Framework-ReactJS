
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavbar from '../Navigation/adminNavbar';



const AdminSetting = () => {

    return (
        
        <>
            <AdminNavbar />
            <ToastContainer />
            <Container>
            <Row>
                <Col>Setting</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            </Container>
        </>
    
    );
  };
  
  export default AdminSetting;