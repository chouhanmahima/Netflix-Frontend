import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className='px-8'>
      <h1 className='text-white py-3 text-3xl'>{title}</h1>
      <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
          {
            movies?.map((movie) => {

              return (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default MovieList