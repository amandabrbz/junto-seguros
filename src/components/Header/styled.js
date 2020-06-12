import styled from "styled-components"

export const Brand = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  /* color: ${global.lightBlue};
  font-family: ${global.font}; */

  @media only screen and (max-width: 558px) {
    text-align: left;
  }
`
export const Header = styled.header`
  width: 100%;
  top: 0;
  /* background-color: ${global.darkBlue}; */
  padding: 15px;
  display: block;
`

export const Menu = styled.span`
  width: 50%;
  padding: 10px 10px 10px 0;
`