import logo from '../img/logo.png';
import {Navbar,Nav} from 'react-bootstrap';

const Header = () => {
    return ( 
        <>
       <Navbar className="justify-content-center nav"> 
            <Nav className="text-center">
                        <Nav.Link href="#pricing"><img src={logo} width={160} alt="description of image"/></Nav.Link>
            </Nav>
        </Navbar>
        </>
     );
}
 
export default Header;  