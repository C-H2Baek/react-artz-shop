import { Carousel } from 'bootstrap';
import react from 'react';
import {Navbar, Nav, Container, Button, ButtonToolbar} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header>
      
    <Navbar bg="dark" variant="dark" fixed="top" className="justify-content-end">
        <Navbar.Brand href="/Index"><h1>Artz</h1></Navbar.Brand>
          <Form.Control type="text" size='lg' htmlSize="30" placeholder="Search Item" />
        <Nav className="justify-content-end">
          <Nav.Link href="/Module/Info">Info</Nav.Link>
          <Nav.Link href="/Module/Account">Account</Nav.Link>
          <Nav.Link href="/Module/Cart">Cart</Nav.Link>
        </Nav>
    </Navbar>

    <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link href="/Module/Notice">Notice</Nav.Link>
          <Nav.Link href="/Module/Login">Login</Nav.Link>
          <Nav.Link href="/Module/SignUp">Sign Up</Nav.Link>
          <Nav.Link href="/Module/Global">Global</Nav.Link>
        </Nav>
    </Navbar>
    </header>
  )
}

export default Header;
