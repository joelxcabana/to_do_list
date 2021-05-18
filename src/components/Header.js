import logo from '../img/logo.png';
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap';

const Header = () => {
    return ( 
        <>
       <Navbar bg="light" variant="light" className="justify-content-center"> 
            <Nav className="text-center">
                        <Nav.Link href="#pricing"><h4>Lista de Tareas</h4></Nav.Link>
            </Nav>
        </Navbar>
        </>
     );
}
 
export default Header;  