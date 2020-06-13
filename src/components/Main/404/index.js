import React, { Component } from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"
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
              <Styled.Paragraph>
                Sentimos muito que tenha caido nessa página, entretanto{" "}
                <Link to="/">volte a home</Link> para navegar tranquilamente.
              </Styled.Paragraph>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={Scroll} alt="home" fluid />
            </Col>
          </Row>
        </Container>
      </Styled.Main>
    )
  }
}

export default Erro404
