import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"
import * as Styled from "./styled.js"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
