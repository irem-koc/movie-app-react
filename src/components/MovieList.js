import React from 'react'
import AddFavourites from './AddFavourites'

function MovieList(props) {

  return (
    <>
    {
        props.movies.map((movie, index)=>
            <div className='image-container d-flex justify-content-start m-3' key={index}>
                <img src={movie.Poster} alt=""></img>
                <div className='overlay d-flex align-items-center justify-content-center'>
                    <AddFavourites />
                </div>
            </div>
           
           
        )}
    
    </>
    
  )
}

export default MovieList