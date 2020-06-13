import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import * as Styled from "./styled"
import Scroll from "../../../images/404/scroll.png"

class Erro404 extends Component {
  render() {
    return (
      <Styled.Main>
        <Container>
          <Row>
            <Col>
              <Styled.Title>Ops! Página não encontrada</Styled.Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={Scroll} alt="home" />
            </Col>
          </Row>
        </Container>
      </Styled.Main>
    )
  }
}

export default Erro404
