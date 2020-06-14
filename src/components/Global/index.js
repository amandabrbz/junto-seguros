import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import * as Styled from "./styled"

export const Title = props => (
  <Container>
    <Row>
      <Col>
        <Styled.Title>{props.titlePage}</Styled.Title>
      </Col>
    </Row>
  </Container>
)

export const SubTitle = props => (
  <Container>
    <Row>
      <Col>
        <Styled.SubTitle>{props.subtitlePage}</Styled.SubTitle>
      </Col>
    </Row>
  </Container>
)

export const Description = props => (
  <Container>
    <Row>
      <Col>
        <Styled.Description>{props.descriptionPage}</Styled.Description>
      </Col>
    </Row>
  </Container>
)

export const Imagem = props => (
  <Container>
    <Row>
      <Col>
        <Image
          src={props.imagemName}
          alt={props.imagemAlt}
          style={{ width: props.width, margin: props.margin }}
          fluid
        />
      </Col>
    </Row>
  </Container>
)
