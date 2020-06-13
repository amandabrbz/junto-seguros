import React, { Component } from "react"
import Carousel from "react-bootstrap/Carousel"
import Avengers from "../../images/Carousel/avengers.jpg"
import Frozen from "../../images/Carousel/frozen.jpg"
import Inter from "../../images/Carousel/inter.jpg"

class Carrousel extends Component {
  render() {
    return (
      <Carousel fluid>
        <Carousel.Item>
          <img src={Inter} alt="Inter" style={{ width: "1600px", height: "608px"}}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Avengers} alt="Avengers" style={{ width: "1600px", height: "608px"}}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Frozen} alt="Frozen" style={{ width: "1600px", height: "608px"}} />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Carrousel
