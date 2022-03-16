import ListGroup from 'react-bootstrap/ListGroup'
import { Carousel } from "react-bootstrap";

const Lower = () => {
  return(
    <body>
      <div>
      {/* <ListGroup>
        <ListGroup.Item>List 1</ListGroup.Item>
        <ListGroup.Item>List 2</ListGroup.Item>
        <ListGroup.Item>List 3</ListGroup.Item>
        <ListGroup.Item>List 4</ListGroup.Item>
        <ListGroup.Item>List 5</ListGroup.Item>
      </ListGroup> */}
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src="https://images.pexels.com/photos/3660527/pexels-photo-3660527.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>


      </div>
    </body>
  )
}

export default Lower;
