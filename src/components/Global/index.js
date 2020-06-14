import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import * as Styled from "./styled"

export const Title = props => (
  <Container className="d-flex justify-content-center">
    <Row>
      <Col>
        <Styled.Title>{props.titlePage}</Styled.Title>
        <Styled.hr/>
      </Col>
    </Row>
  </Container>
)

export const SubTitle = props => (
  <Container className="d-flex justify-content-center">
    <Row>
      <Col>
        <Styled.SubTitle>{props.subtitlePage}</Styled.SubTitle>
      </Col>
    </Row>
  </Container>
)

export const Description = props => (
  <Container className="d-flex justify-content-center">
    <Row>
      <Col>
        <Styled.Description>{props.descriptionPage}</Styled.Description>
      </Col>
    </Row>
  </Container>
)

export const Imagem = props => (
  <Container className="d-flex justify-content-center">
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

export const Input = props => (
  <Container>
    <Row>
      <Col>
        <Styled.Input />
      </Col>
    </Row>
  </Container>
)
