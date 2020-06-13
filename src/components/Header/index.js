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
              <Link to="/" style={{ textDecoration: "none"}}>
                <Styled.Brand>PickMovie APP</Styled.Brand>
              </Link>
            </Col>
            <Col md={10}>
              <Styled.Menu>
                <Link
                  to="/about"
                  activeStyle={{ color: "#25353D" }}
                  activeClassName="active"
                >
                  Sobre
                </Link>
              </Styled.Menu>
              <Styled.Menu>
                <Link
                  to="/review"
                  activeStyle={{ color: "#25353D" }}
                  activeClassName="active"
                >
                  Reviews
                </Link>
              </Styled.Menu>
              <Styled.Menu>
                <Link
                  to="/search"
                  activeStyle={{ color: "#25353D" }}
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
