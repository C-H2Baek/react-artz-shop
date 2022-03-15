import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Upper = () => {
  return(
    <body>
      <div>
      {/* <Row xs={3} md={3} className="g-5">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfNjEg/MDAxNTcwNzg1ODM3Nzc0.zxDXm20VlPdQv8GQi9LWOdPwkqoBdiEmf8aBTWTsPF8g.FqMQTiF6ufydkQxrLBgET3kNYAyyKGJTWTyi1qd1-_Ag.PNG.kkson50/sample_images_01.png?type=w800" />
            <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Text>
              Describe
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row> */}
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfNjEg/MDAxNTcwNzg1ODM3Nzc0.zxDXm20VlPdQv8GQi9LWOdPwkqoBdiEmf8aBTWTsPF8g.FqMQTiF6ufydkQxrLBgET3kNYAyyKGJTWTyi1qd1-_Ag.PNG.kkson50/sample_images_01.png?type=w800" />
          <Card.Body>
            <Card.Title>Product 1</Card.Title>
            <Card.Text>
              Describe 1
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price 1</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfODMg/MDAxNTcwNzg1ODM3NTUz.2m5sz7K4ATO7WZzXYGE-MmUQ1DYUOflq0IaGgitVZEIg.jYZnxxm0E275Jplbrw25aFCFPVXKcmai1zhf8rlYl3Eg.PNG.kkson50/sample_images_02.png?type=w800" />
          <Card.Body>
            <Card.Title>Product 2</Card.Title>
            <Card.Text>
              Describe 2
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price 2</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfMjIg/MDAxNTcwNzg1ODM3NTU0.S-ltTb4JaOedIKIRE-mWYcVuZGTBGi8Z8G8NJZtQmrkg.dlyc5gHE3DSF4rvH3fiirLhP7ilKSZuz6t0a0KoWJrYg.PNG.kkson50/sample_images_03.png?type=w800" />
          <Card.Body>
            <Card.Title>Product 3</Card.Title>
            <Card.Text>
              Describe 3
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price 3</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfMjYw/MDAxNTcwNzg1ODM3NTY0.wmnNedC0zB5ummw6DSfYJeQEkiqILCyHRArLs7ZkSzgg.FfY1vXaDbLM3EdsvBHDV1EP0FVKo4jamY_yAJfs9gBIg.PNG.kkson50/sample_images_04.png?type=w800" />
          <Card.Body>
            <Card.Title>Product 4</Card.Title>
            <Card.Text>
              Describe 4
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price 4</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfMjg3/MDAxNTcwNzg1ODM3NTY1.qqCY6WHNolzYOJqJjNzx-5Z-ehx-Up4tJIbsMXOvLAcg.MroaRE_xMGpj1j-TshpXbgNT4yoFbWauCiyM4ngnBk8g.PNG.kkson50/sample_images_05.png?type=w800" />
          <Card.Body>
            <Card.Title>Product 5</Card.Title>
            <Card.Text>
              Describe 5
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price 5</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfMjQ0/MDAxNTcwNzg1ODM3NTY0.N-mCcjnaHkhYyrFs5skfugLRPRWh4KhhZSMWJVHQjbog.KDfVtJcaSIhvBaHNoVuXvejeoAJ50UR081fC0IYC0OIg.PNG.kkson50/sample_images_06.png?type=w800" />
          <Card.Body>
            <Card.Title>Product 6</Card.Title>
            <Card.Text>
              Describe 6
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price 6</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfMTAw/MDAxNTcwNzg1ODM3NTY1.uCp9Q26Lqw62aen65yhk-c1grJ6Vg7_8N0uG8CEBCrsg.HPEPk-ivoCIJdDmfcIqXmFYfZL1Yhw5EzLXVZgTGHgYg.PNG.kkson50/sample_images_07.png?type=w800" />
          <Card.Body>
            <Card.Title>Product 7</Card.Title>
            <Card.Text>
              Describe 7
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price 7</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfNjIg/MDAxNTcwNzg1ODM3NzA0.cPK5-eVEYoOkIQSwtX9mDluA8eiE_dnUjORZ8jFLHLEg.epNnQuqS4bsRY_T8WIvTEY6PvPRWRVLGFGPyd53lkSog.PNG.kkson50/sample_images_08.png?type=w800" />
          <Card.Body>
            <Card.Title>Product 8</Card.Title>
            <Card.Text>
              Describe 8
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price 8</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfMjcy/MDAxNTcwNzg1ODM3NzE0.d7yBdJoyLN2KvLiQho7FTbRDUNzu3AlrnYQ8PF7mPI0g.V4wwCK6yULskBW11qubVymupW-MFCJymnqkvsQH00Wog.PNG.kkson50/sample_images_09.png?type=w800" />
          <Card.Body>
            <Card.Title>Product 9</Card.Title>
            <Card.Text>
              Describe 9
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price 9</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </div>
    </body>
  )
}

export default Upper;
