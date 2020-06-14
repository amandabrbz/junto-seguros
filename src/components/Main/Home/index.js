import React from "react"
import Carrousel from "../../Carousel"
import { Title, Description } from "../../Global"
import HomeList from "../../HomeList"

const Home = () => (
  <>
    <Carrousel />
    <Title titlePage={"Filmes mais buscados da semana:"} />
    <Description descriptionPage={"Confira agora: "} />
    <HomeList />
  </>
)

export default Home
