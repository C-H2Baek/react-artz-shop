import {Navbar, Nav, Container, Button, ButtonToolbar, InputGroup} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const Header = () => {
  return(
    <header>
      <Navbar bg="light" variant="light" fixed="top" className="justify-content-end">
          <Navbar.Brand href="/"><h1>Artz</h1></Navbar.Brand>
          
            <InputGroup className="justify-content-center">
              <Col xs={8}>
              <Form.Control type="search" size='lg' htmlSize='10' placeholder="Search Item" />
              </Col>
                <Button variant="outline-secondary" id="button-addon2">
                  Search
                </Button>
            </InputGroup>  
          
          <Nav className="justify-content-end">
            <Nav.Link href="/Module/Info"><img className="icon" title='MY Information' src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-mypage.svg"/></Nav.Link>
            <Nav.Link href="/Module/Recent"><img className="icon" title='Recent Item' src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-recent.svg"/></Nav.Link>
            <Nav.Link href="/Module/Cart"><img className="icon" title='Cart' src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-cart.svg"/></Nav.Link>
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
