import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({title,desc,cover}) => {
  return (
      <Container className='box' >
        <Row>
        <Col md={6}>
          </Col>
          <Col md={6}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button className='findmore'>Find More</button>
          </Col>
          
        </Row>

    </Container>
  )
}

export default SlideCard
