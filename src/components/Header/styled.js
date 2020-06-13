import styled from "styled-components"

export const Brand = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  color: #25353D;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const Header = styled.header`
  width: 100%;
  top: 0;
  background-color: #E89A41;
  padding: 15px 0;
  display: block;
`

export const Menu = styled.span`
  padding-right: 15px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
  vertical-align: sub;

  a {
    text-decoration:none;
    color: #fff;
    padding-right: 15px;
    :hover {
      color: #25353D;
    }
  }
`