import styled from "styled-components"
import media from "styled-media-query"

export const Title = styled.h2`
  margin: 30px 0 10px 0;
  text-align: left;
  color: #283654;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2.3em;

  ${media.lessThan("medium")`
  font-size: 1.8em;
  `}
`
export const Description = styled.p`
  max-width: 700px;
  margin: 0px 0 20px 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #333;
  text-align: left;
  font-size: 1.5em;
  line-height:1.2;

  ${media.lessThan("medium")`
  font-size: 1.2em;
  `}
`