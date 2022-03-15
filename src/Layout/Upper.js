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
          style={{ height: "300px" }}
          className="d-block w-100"
          src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfNjEg/MDAxNTcwNzg1ODM3Nzc0.zxDXm20VlPdQv8GQi9LWOdPwkqoBdiEmf8aBTWTsPF8g.FqMQTiF6ufydkQxrLBgET3kNYAyyKGJTWTyi1qd1-_Ag.PNG.kkson50/sample_images_01.png?type=w800"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "300px" }}
          className="d-block w-100"
          src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfODMg/MDAxNTcwNzg1ODM3NTUz.2m5sz7K4ATO7WZzXYGE-MmUQ1DYUOflq0IaGgitVZEIg.jYZnxxm0E275Jplbrw25aFCFPVXKcmai1zhf8rlYl3Eg.PNG.kkson50/sample_images_02.png?type=w800"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "300px" }}
          className="d-block w-100"
          src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfMjIg/MDAxNTcwNzg1ODM3NTU0.S-ltTb4JaOedIKIRE-mWYcVuZGTBGi8Z8G8NJZtQmrkg.dlyc5gHE3DSF4rvH3fiirLhP7ilKSZuz6t0a0KoWJrYg.PNG.kkson50/sample_images_03.png?type=w800"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>


      </div>
    </body>
  )
}

export default Lower;
