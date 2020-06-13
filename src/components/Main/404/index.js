import React, { Component } from "react"
import { Link } from "gatsby"
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
            "Sentimos muito que tenha caido nessa página, entretanto volte a home para navegar tranquilamente."
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
