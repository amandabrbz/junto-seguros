import React, { Component } from "react"
import axios from "axios"
import * as Styled from "./styled.js"
import MovieCard from "../Card"

import { SearchAlt } from "@styled-icons/boxicons-regular/"

class MoviesList extends Component {
  state = {
    moviesList: [""],
    searchTerm: "",
  }

  search = event => {
    event.preventDefault()
    axios
      .get(
        `https://www.omdbapi.com/?apikey=fb2ba1d1&s=${this.state.searchTerm}`
      )
      .then(res => res.data)
      .then(res => {
        if (!res.Search) {
          this.setState({ moviesList: [] })
          return
        }

        const moviesList = res.Search.map(movie => movie.imdbID)
        this.setState({
          moviesList,
        })
      })
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  render() {
    const { moviesList } = this.state

    return (
      <>
        <Styled.Form onSubmit={this.search}>
          <Styled.Input
            placeholder="Palavra chave"
            onChange={this.handleChange}
          />
          <Styled.Button type="submit">
            <SearchAlt style={{ width: "25px" }} />
          </Styled.Button>
        </Styled.Form>
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

export default MoviesList
