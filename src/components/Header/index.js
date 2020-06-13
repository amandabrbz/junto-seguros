import React, { Component } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import * as Styled from "./styled"

class Header extends Component {
  render() {
    return (
      <Styled.Header>
        <Container>
          <Row>
            <Col md={2}>
              <Styled.Brand>MovieSearch</Styled.Brand>
            </Col>
            <Col md={10}>
              <Styled.Menu>
                <Link
                  to="/about"
                  activeStyle={{ color: "red" }}
                  activeClassName="active"
                >
                  Sobre
                </Link>
              </Styled.Menu>
              <Styled.Menu>
                <Link
                  to="/contact"
                  activeStyle={{ color: "red" }}
                  activeClassName="active"
                >
                  Contato
                </Link>
              </Styled.Menu>
              <Styled.Menu>
                <Link
                  to="/search"
                  activeStyle={{ color: "red" }}
                  activeClassName="active"
                >
                  Procure seu filme
                </Link>
              </Styled.Menu>
            </Col>
          </Row>
        </Container>
      </Styled.Header>
    )
  }
}

export default Header
