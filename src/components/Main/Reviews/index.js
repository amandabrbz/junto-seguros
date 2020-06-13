import React from "react"
import { Title, Description, Imagem } from "../../Global"
import Internet from "../../../images/About/internet.svg"

const Reviews = () => (
  <>
    <Title titlePage={"Review dos seus filmes favoritos"} />
    <Description
      descriptionPage={
        "Descubra o que os críticos estão dizendo sobre o seu filme."
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

export default Reviews
