import react from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return(
    <footer>
      <Container >
        <div style={{textAlign:'center'}}>
        <hh4>ARTZ | Address : Daegu 220-8 | Company : 222-22-11111 
        @ARTZ Inc. ALL Right Reserved.</hh4><br></br>
        <hh5>ARTZ | Address : Daegu 220-8 | Company : 222-22-11111 
        @ARTZ Inc. ALL Right Reserved.</hh5>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;