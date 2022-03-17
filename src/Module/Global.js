import react from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Layout/Footer';

const Global = () => {
  return(
    <Container>
      <div style={{textAlign:'center'}}>
        <article class="cf ph3 ph5-ns pv5">
          <header class="fn fl-ns w-50-ns pr4-ns">
            <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
              Global trenslation
            </h1>
            <time class="f6 ttu tracked gray">Sometime before 2022</time>
          </header>
            <div class="fn fl-ns w-50-ns">
              <p class="f5 lh-copy measure">
                Adding Back Functions.
              </p>
            </div>
        </article>
      </div>
      <Footer/>
    </Container>
    
  )
}

export default Global;