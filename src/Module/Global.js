import react from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Layout/Footer';

const Global = () => {
  return(
    
      <Container>
        <div style={{textAlign:'center'}}>
        <h2>Global Translate</h2>

        <img src="https://activeloc.com/wp-content/uploads/2021/03/google_translate_main-1280x720-1-1024x576.jpg" class="img-fluid" alt="번역"></img>
        </div><Footer/>
      </Container>
    
  )
}

export default Global;