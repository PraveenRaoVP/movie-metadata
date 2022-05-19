import React from "react";

const MovieCard = ({ movie_one: movie }) => {
    return (
        <div className="movie">
            <div>
              <p>{movie.Year}</p>
            </div>
            
            <div>
              {movie.Poster!=="N/A" ? (
                <>
                  <img src={movie.Poster} alt="" />
                </>
              ) : (
                <>
                  <p style={{color: "white", textAlign: "center"}}>Movie poster not available</p>
                </>
              )}
            </div>

            <div>
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
            </div>

          </div>
    )
}

export default MovieCard