import styled from "styled-components"

export const Brand = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  color: #cfe0f9;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const Header = styled.header`
  width: 100%;
  top: 0;
  background-color: #283654;
  padding: 15px;
  display: block;
`

export const Menu = styled.span`
  padding-right: 15px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 16px;
  vertical-align: sub;

  a {
    text-decoration:none;
    :hover {
      color: #fff;
    }
  }
`