import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import * as Styled from "./styled"
import {
  FacebookWithCircle,
  TwitterWithCircle,
  GithubWithCircle,
} from "@styled-icons/entypo-social/"

class Footer extends Component {
  render() {
    return (
      <Styled.Footer>
        <Container>
          <Row className="footer-link">
            <Col sm>
              <Styled.Brand>PickMovie APP</Styled.Brand>
            </Col>
            <Col sm>
              <Styled.H4>Siga a PickMovie APP</Styled.H4>
              <Row>
                <Col className="my-2">
                  <FacebookWithCircle style={{ width: "36px" }} />
                  <TwitterWithCircle
                    style={{ width: "36px" }}
                    className="mx-3"
                  />
                  <GithubWithCircle style={{ width: "36px" }} />
                </Col>
              </Row>
            </Col>
            <Col sm>
              <Styled.H4>Contato PickMovie APP</Styled.H4>
              <Styled.H5>
                <a href="mailto:pick@movie.com">pick@movie.com</a>
              </Styled.H5>
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
