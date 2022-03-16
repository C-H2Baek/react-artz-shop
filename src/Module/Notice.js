import react from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Layout/Footer';

const Notice = () => {
  return(
    
      <Container>
        <div style={{textAlign:'center'}}>
        <h2>Notice Page</h2>

        <img src="https://t1.daumcdn.net/cfile/tistory/99A1093359B1E6D317" class="img-fluid" alt="공지"></img>
        </div><Footer/>
      </Container>
    
  )
}

export default Notice;