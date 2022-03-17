import react from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Footer from '../Layout/Footer';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination'

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


const Cart = () => {
  return(
    
      <Container>
        <div style={{textAlign:'center'}}>
        <hh4>Cart List</hh4></div>
      
        <div class="pa4">
          <div class="overflow-auto">
            <table class="f6 w-100 mw8 center" cellspacing="0">
              <thead>
                <tr class="stripe-dark">
                  <th class="fw6 tl pa3 bg-white">Order No</th>
                  <th class="fw6 tl pa3 bg-white">Odder Time</th>
                  <th class="fw6 tl pa3 bg-white">Item Name</th>
                  <th class="fw6 tl pa3 bg-white">Status</th>
                </tr>
              </thead>
              <tbody class="lh-copy">
                <tr class="stripe-dark">
                  <td class="pa3">1</td>
                  <td class="pa3">220317151515</td>
                  <td class="pa3">hassan@companywithalongdomain.co</td>
                  <td class="pa3">14419232532474</td>
                </tr>
                <tr class="stripe-dark">
                  <td class="pa3">2</td>
                  <td class="pa3">220317151525</td>
                  <td class="pa3">taral@companywithalongdomain.co</td>
                  <td class="pa3">72326219423551</td>
                </tr>
                <tr class="stripe-dark">
                  <td class="pa3">3</td>
                  <td class="pa3">220317151535</td>
                  <td class="pa3">ty@companywithalongdomain.co</td>
                  <td class="pa3">92325170324444</td>
                </tr>
                <tr class="stripe-dark">
                  <td class="pa3">4</td>
                  <td class="pa3">220317151545</td>
                  <td class="pa3">oliverg@companywithalongdomain.co</td>
                  <td class="pa3">71165170352909</td>
                </tr>
                <tr class="stripe-dark">
                  <td class="pa3">5</td>
                  <td class="pa3">220317151555</td>
                  <td class="pa3">dean@companywithalongdomain.co</td>
                  <td class="pa3">71865178111909</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{textAlign:'center'}}><Pagination size="sm">{items}</Pagination></div>
        <Footer/>
      </Container>
  )
}

export default Cart;