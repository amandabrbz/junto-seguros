import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Carrousel from "../../Carousel"
// import * as Styled from "./styled"

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="p-0">
            <Carrousel />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col>
              <h1> This is home</h1>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Home
