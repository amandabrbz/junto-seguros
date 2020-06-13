import styled from "styled-components"
import media from "styled-media-query"

export const Main = styled.main`
  margin: 40px 0;
`

export const Title = styled.h1`
  text-align: left;
  color: #283654;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  ${media.lessThan("medium")`
  font-size: 2em;
  `}
`
export const Paragraph = styled.p`
  max-width: 600px;
  margin: 30px 0 0 0;
`
