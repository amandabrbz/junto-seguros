import React, { Component } from "react"
import axios from "axios"
import * as Styled from "./styled.js"
import "./styled.css"

class MovieCard extends Component {
  state = {
    movieData: {},
  }
  componentDidMount() {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=fb2ba1d1&i=${this.props.movieID}&plot=full`
      )
      .then(res => res.data)
      .then(res => {
        this.setState({ movieData: res })
      })
  }
  render() {
    const {
      Poster,
      Title,
      imdbRating,
      Plot,
      Genre,
    } = this.state.movieData

    if (!Poster || Poster === "N/A") {
      return null
    }

    return (
      <div className="movie-card-container">
        <div className="image-container">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${Poster})` }}
          />
        </div>
        <div className="movie-info">
          <div>
            <h2>{Title}</h2>
          </div>
          <h4>Avaliação: {imdbRating} / 10</h4>
          <p>{Plot && Plot.substr(0, 100)}...</p>
          <div className="tags-container">
            {Genre && Genre.split(", ").map(g => <span key={g}>{g}</span>)}
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCard
