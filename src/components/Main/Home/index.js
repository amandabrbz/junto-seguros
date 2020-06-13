import React from "react"
import Carrousel from "../../Carousel"
import { Title, Description } from "../../Global"

const Home = () => (
  <>
    <Carrousel />
    <Title titlePage={"Filmes mais buscados da semana:"} />
    <Description descriptionPage={"Confira agora: "} />
  </>
)

export default Home
