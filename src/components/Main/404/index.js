import React, { Component } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import * as Styled from "./styled"
import Scroll from "../../../images/404/scroll.png"
import { Title, Description } from "../../Global"

class Erro404 extends Component {
  render() {
    return (
      <Styled.Main>
        <Title titlePage={"Ops! Página não encontrada :("} />
        <Description
          descriptionPage={
            "Infelizmente a página desejada não pode ser encontrada!"
          }
        />
        <Container>
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
