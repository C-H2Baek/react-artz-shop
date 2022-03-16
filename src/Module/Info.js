import react from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Footer from '../Layout/Footer';

const Info = () => {
  return(
      <Container>
        <div style={{textAlign:'center'}}>
        <h2>My Information</h2><br></br>

        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            ID
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="example" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            CHECK PASSWORD
          </Form.Label>
          <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            NAME
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="NAME" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            SEX
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="SEX" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            PHONE
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="010-3456-7890" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            EMAIL
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="email@example.com" />
          </Col>
        </Form.Group>
        </Form>
        <Button variant="primary">Reset</Button>{' '}
        <Button variant="secondary">Change</Button>{' '}
        </div><Footer/>
      </Container>
    
  )
}

export default Info;