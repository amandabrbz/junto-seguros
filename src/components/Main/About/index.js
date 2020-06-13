import React from "react"
import { Title, Description, Imagem } from "../../Global"
import Video from "../../../images/About/video.svg"
import Internet from "../../../images/About/internet.svg"

const Aboutt = () => (
  <>
    <Title titlePage={"Sobre a PickMovie APP"} />
    <Description
      descriptionPage={
        "I'm baby before they sold out ennui wolf vice coloring book iceland. Seitan cred snackwave meggings banh mi tattooed air plant flexitarian heirloom fanny pack pop-up celiac. Tote bag locavore gochujang bicycle rights, whatever lumbersexual direct trade lomo. Pok pok iPhone jianbing beard, readymade before they sold out neutra. Celiac readymade neutra pok pok XOXO pug asymmetrical selvage snackwave taiyaki kickstarter ramps scenester taxidermy PBR&B. Four loko shaman etsy chicharrones, 3 wolf moon succulents brunch stumptown crucifix taiyaki vexillologist."
      }
    />
    <Imagem
      imagemName={Video}
      imagemAlt={"Movies Online"}
      width="600px"
      margin="50px auto"
    />
    <Description
      descriptionPage={
        "I'm baby before they sold out ennui wolf vice coloring book iceland. Seitan cred snackwave meggings banh mi tattooed air plant flexitarian heirloom fanny pack pop-up celiac. Tote bag locavore gochujang bicycle rights, whatever lumbersexual direct trade lomo. Pok pok iPhone jianbing beard, readymade before they sold out neutra. Celiac readymade neutra pok pok XOXO pug asymmetrical selvage snackwave taiyaki kickstarter ramps scenester taxidermy PBR&B. Four loko shaman etsy chicharrones, 3 wolf moon succulents brunch stumptown crucifix taiyaki vexillologist."
      }
    />
    <Imagem
      imagemName={Internet}
      imagemAlt={"Movies Online"}
      width="500px"
      margin="50px auto"
    />
  </>
)

export default Aboutt
