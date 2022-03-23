import {
    Navbar,
    Nav,
    Container,
    Button,
    ButtonToolbar,
    InputGroup
} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SplitButton from 'react-bootstrap/SplitButton'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" fixed="top" className="justify-content-end">
                <Navbar.Brand
                    href="/"
                    style={{
                        marginLeft: "10px"
                    }}>
                    <h1>Artz</h1>
                </Navbar.Brand>

                <InputGroup className="justify-content-center">
                    <Col xs={8}>
                        <Form.Control type="search" size='lg' htmlSize='10' placeholder="Search Item"/>
                    </Col>
                    <Button variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>

                <Nav className="justify-content-end">
                    <Nav.Link href="/Module/Info"><img
                        className="icon"
                        title='MY Information'
                        src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-mypage.svg"/></Nav.Link>
                    <Nav.Link href="/Module/Recent"><img
                        className="icon"
                        title='Recent Item'
                        src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-recent.svg"/></Nav.Link>
                    <Nav.Link href="/Module/Cart"><img
                        className="icon"
                        title='Cart'
                        src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-cart.svg"/></Nav.Link>
                </Nav>
            </Navbar>

            <Navbar
                bg="dark"
                variant="dark"
                fixed="top"
                className="justify-content-between"
                style={{
                    marginTop: "68px"
                }}>
                <Navbar.Brand
                    style={{
                        marginLeft: "10px"
                    }}>

                    <Container fluid="fluid">
                        <Navbar.Toggle aria-controls="navbar-dark-example"/>
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Category"
                                    menuVariant="light">

                                    <div>

                                        <SplitButton
                                            key="end"
                                            id={`dropdown-button-drop-$"end"`}
                                            drop="end"
                                            variant="current"
                        title="패션/의류&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                                            <Dropdown.Item href="/Action1">상의</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">하의</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">원피스</Dropdown.Item>

                                        </SplitButton>

                                    </div>
                                    <div>

                                        <SplitButton
                                            key="end"
                                            id={`dropdown-button-drop-$"end"`}
                                            drop="end"
                                            variant="current"
                        title="스포츠/레저&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                                            <Dropdown.Item href="/Action1">Category 2 Submenu 1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Category 2 Submenu 2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Category 2 Submenu 3</Dropdown.Item>

                                        </SplitButton>

                                    </div>
                                    <div>

                                        <SplitButton
                                            key="end"
                                            id={`dropdown-button-drop-$"end"`}
                                            drop="end"
                                            variant="current"
                        title="가구/인테리어&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                                            <Dropdown.Item href="/Action1">Category 2 Submenu 1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Category 2 Submenu 2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Category 2 Submenu 3</Dropdown.Item>

                                        </SplitButton>

                                    </div>
                                    <div>

                                        <SplitButton
                                            key="end"
                                            id={`dropdown-button-drop-$"end"`}
                                            drop="end"
                                            variant="current"
                        title="생활/건강&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                                            <Dropdown.Item href="/Action1">Category 2 Submenu 1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Category 2 Submenu 2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Category 2 Submenu 3</Dropdown.Item>

                                        </SplitButton>

                                    </div>
                                    <div>

                                        <SplitButton
                                            key="end"
                                            id={`dropdown-button-drop-$"end"`}
                                            drop="end"
                                            variant="current"
                        title="도서&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                                            <Dropdown.Item href="/Action1">Category 2 Submenu 1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Category 2 Submenu 2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Category 2 Submenu 3</Dropdown.Item>

                                        </SplitButton>

                                    </div>
                                    <div>

                                        <SplitButton
                                            key="end"
                                            id={`dropdown-button-drop-$"end"`}
                                            drop="end"
                                            variant="current"
                        title="패션잡화&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                                            <Dropdown.Item href="/Action1">Category 2 Submenu 1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Category 2 Submenu 2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Category 2 Submenu 3</Dropdown.Item>

                                        </SplitButton>

                                    </div>
                                    <div>

                                        <SplitButton
                                            key="end"
                                            id={`dropdown-button-drop-$"end"`}
                                            drop="end"
                                            variant="current"
                        title="화장품/미용&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                                            <Dropdown.Item href="/Action1">Category 2 Submenu 1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Category 2 Submenu 2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Category 2 Submenu 3</Dropdown.Item>

                                        </SplitButton>

                                    </div>
                                    <div>

                                        <SplitButton
                                            key="end"
                                            id={`dropdown-button-drop-$"end"`}
                                            drop="end"
                                            variant="current"
                        title="디지털/가전&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                                            <Dropdown.Item href="/Action1">Category 2 Submenu 1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Category 2 Submenu 2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Category 2 Submenu 3</Dropdown.Item>

                                        </SplitButton>

                                    </div>

                                    {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="/Action1">Category link 1</NavDropdown.Item>
                  <NavDropdown.Item href="/Action2">Category link 2</NavDropdown.Item>
                  <NavDropdown.Item href="/Action3">Category link 3</NavDropdown.Item>
                  <NavDropdown.Item href="/Action4">Category link 4</NavDropdown.Item>
                  <NavDropdown.Item href="/Action5">Category link 5</NavDropdown.Item>
                  <NavDropdown.Item href="/Action6">Category link 6</NavDropdown.Item>
                  <NavDropdown.Divider /> */
                                    }

                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar.Brand>

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
