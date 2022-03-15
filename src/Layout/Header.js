import { Carousel } from 'bootstrap';
import react from 'react';
import {Navbar, Nav, Container, Button, ButtonToolbar} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header>
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/Index"><h1>Artz</h1></Navbar.Brand>
          <Form.Control type="text" size='lg' placeholder="Search Item" />
        <Nav className="ml-auto">
          <Nav.Link href="/Module/Info">Info</Nav.Link>
          <Nav.Link href="/Module/Account">Account</Nav.Link>
          <Nav.Link href="/Module/Cart">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        </Form.Group>
    

    <Navbar bg="light">
      <Container>
        <Navbar.Brand></Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Nav className="ml-auto">
            
        </Nav>  
        <Nav className="mr-auto">
        
          <Nav.Link href="/Module/Notice">Notice</Nav.Link>
          <Nav.Link href="/Module/Login">Login</Nav.Link>
          <Nav.Link href="/Module/SignUp">Sign Up</Nav.Link>
          <Nav.Link href="/Module/Global">Global</Nav.Link>
        
        </Nav>
        
      </Container>
    </Navbar>
    </header>
  )
}

export default Header;
