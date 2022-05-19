
import { useState, useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const API_URL = `https://www.omdbapi.com?apikey=a4302a45`
  
  const movie_one = {
    "Title": "Superman",
    "Year": "1978",
    "imdbID": "tt0078346",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
  }

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  
  useEffect(() => {
    searchMovies("Superman")
  }, [])

  return (
    <div className="app">
        <h1>MovieBuzz</h1>
        <div className="search">
          <input 
          placeholder="search for movies" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <img 
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

      {
          movies?.length > 0 
            ? ( 
              <div className="container">
                {
                  movies.map((movie) => (
                    <MovieCard movie_one={movie} />
                  ))
                }
              </div> ) : (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )


      }

        
    </div>
  );
}

export default App;
