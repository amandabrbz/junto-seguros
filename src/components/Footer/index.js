import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import * as Styled from "./styled"

class Footer extends Component {
  render() {
    return (
      <Styled.Footer>
        <Container>
          <Row className="footer-link">
            <Col sm>
              <Styled.Brand>MovieSearch</Styled.Brand>
            </Col>
            <Col sm>
              <Styled.H4>Siga a MovieSearch</Styled.H4>
            </Col>
            <Col sm>
              <Styled.H4>SAC MovieSearch</Styled.H4>
              <h5>
                <a href="tel:+">0800 900 3030</a>
              </h5>
              <Styled.FooterText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis optio vel praesentium impedit odio similique maxime sunt
                quis.
              </Styled.FooterText>
            </Col>
          </Row>
        </Container>
      </Styled.Footer>
    )
  }
}

export default Footer
