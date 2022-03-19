import react from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Footer from '../Layout/Footer';
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

const Account = () => {
  return(
      <Container>
        <div className="title" style={{textAlign:'center'}}>
        Recent Views</div>
      
        <ListGroup>
          <ListGroup.Item>Item 1</ListGroup.Item>
          <ListGroup.Item>Item 2</ListGroup.Item>
          <ListGroup.Item>Item 3</ListGroup.Item>
          <ListGroup.Item>Item 4</ListGroup.Item>
          <ListGroup.Item>Item 5</ListGroup.Item>
          <ListGroup.Item>Item 6</ListGroup.Item>
          <ListGroup.Item>Item 7</ListGroup.Item>
          <ListGroup.Item>Item 8</ListGroup.Item>
          <ListGroup.Item>Item 9</ListGroup.Item>
          <ListGroup.Item>Item 10</ListGroup.Item>
          <ListGroup.Item>Item 11</ListGroup.Item>
          <ListGroup.Item>Item 12</ListGroup.Item>
          <ListGroup.Item>Item 13</ListGroup.Item>
          <ListGroup.Item>Item 14</ListGroup.Item>
          <ListGroup.Item>Item 15</ListGroup.Item>
          
        </ListGroup>
        <Pagination size="sm">{items}</Pagination>
        <Footer/>
      </Container>
  )
}

export default Account;