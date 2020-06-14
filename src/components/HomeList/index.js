import React, { Component } from "react"
import * as Styled from "./styled.js"
import MovieCard from "../Card"

class HomeList extends Component {
  state = {
    moviesList: ["tt3890160"],
  }

  render() {
    const { moviesList } = this.state

    return (
      <>
        {moviesList.length > 0 ? (
          moviesList.map(movie => <MovieCard movieID={movie} key={movie} />)
        ) : (
          <>
            <Styled.simpleText>
              Desculpa, não achamos nenhum filme que se relacione com essa(s)
              palavra(s).
            </Styled.simpleText>
            <Styled.simpleText>Tente novamente, por favor.</Styled.simpleText>
          </>
        )}
      </>
    )
  }
}

export default HomeList
