import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import RemoveFavourites from './components/RemoveFavourites';
import AddFavourites from './components/AddFavourites';
function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [search, setSearch] = useState("")
  const getMovieResult = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=e2472f71`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if(responseJSON.Search){
      setMovies(responseJSON.Search)
    }
    
  }
  
  const addFavouriteMovie = (movie) =>{
    const newfavouritesList = [...favourites, movie]
    setFavourites(newfavouritesList)
  }
  const removeFavouriteMovie = (movie) =>{
    const newfavouritesList = favourites.filter((favori)=>favori.imdbID !== movie.imdbID)
    setFavourites(newfavouritesList)
  }
  useEffect(() =>{
    getMovieResult(search);
   }, [search]); // when the page loads only
  
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center my-4">
        <MovieListHeading heading={"Movies"}/>
        <SearchBox search={search} setSearch={setSearch}/>
      </div>
      <div className="row">
        <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourites} />
      </div>
      <div className="row d-flex align-items-center my-4">
        <MovieListHeading heading={"Favourites"}/>
      </div>
      <div className="row">
        <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites}/>
      </div>
    </div>
  );
}

export default App;
