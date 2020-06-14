import React from "react"
import { Title, Description } from "../../Global"
import MovieList from "../../List"

const Find = () => (
  <>
    <Title titlePage={"Procure seus filmes"} />
    <Description
      descriptionPage={
        "Afim de um filme hoje? Procure por uma palavra chave e encontre nossas indicações de filmes."
      }
    />
    <MovieList />
  </>
)

export default Find
