import React from "react"
import { Title, Description } from "../../Global"
import MovieList from "../../SearchList"

const Find = () => (
  <>
    <Title titlePage={"Aceita uma indicação? Procure agora"} />
    <Description
      descriptionPage={
        "Afim de um filme hoje? Procure por uma palavra chave e encontre nossas indicações de filmes."
      }
    />
    <MovieList />
  </>
)

export default Find
