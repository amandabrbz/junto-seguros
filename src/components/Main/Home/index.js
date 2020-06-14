import React from "react"
import Carrousel from "../../Carousel"
import { Title, Description } from "../../Global"
import HomeList from "../../HomeList"

const Home = () => (
  <>
    <Carrousel />
    <Title titlePage={"Título mais buscado da semana:"} />
    <Description descriptionPage={"Confira agora: "} />
    <HomeList />
  </>
)

export default Home
