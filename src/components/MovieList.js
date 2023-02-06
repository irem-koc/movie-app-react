import React from 'react'

function MovieList(props) {

  return (
    <>
    {
        props.movies.map((movie, index)=>
            <div key={index}>
                <img src={movie.Poster} alt=""></img>
                <p>{movie.Title}</p>
            </div>
           
           
        )}
    
    </>
    
  )
}

export default MovieList