import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 40px auto;
`
export const Input = styled.input`
  border: 2px solid #e89a41;
  border-radius: 7px 0px 0px 7px;
  color: #283654;
  font-size: 14px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 10px 15px;
  height: 40px;
  width: 300px;
  max-width: 100%;
`

export const Button = styled.button`
  border: 2px solid #e89a41;
  border-radius: 0px 7px 7px 0px;
  background: #e89a41;
  color: #fff;
  height: 40px;
  width: 50px;
  :active {
    opacity: 0.7;
  }
  :focus {
    outline: none;
  }
`

export const simpleText = styled.p`
text-align:center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`
