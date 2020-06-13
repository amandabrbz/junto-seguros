import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import * as Styled from "./styled"

export const Title = (props) => (
  <Container>
    <Row>
      <Col>
        <Styled.Title>{props.titlePage}</Styled.Title>
      </Col>
    </Row>
  </Container>
)


export const Description = (props) => (
  <Container>
    <Row>
      <Col>
        <Styled.Description>{props.descriptionPage}</Styled.Description>
      </Col>
    </Row>
  </Container>
)
