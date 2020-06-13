import React from "react"
import { Title, Description, Imagem } from "../../Global"
import Internet from "../../../images/About/internet.svg"

const Find = () => (
  <>
    <Title titlePage={"Procure seus filmes"} />
    <Description
      descriptionPage={
        "Afim de um filme hoje? Procure por uma palavra chave e encontre nossas indicações de filmes."
      }
    />
    <Imagem
      imagemName={Internet}
      imagemAlt={"Movies Online"}
      width={"500px"}
      margin={"50px auto"}
    />
  </>
)

export default Find
