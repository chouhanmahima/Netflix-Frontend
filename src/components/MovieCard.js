import React from 'react'
import { TMDB_IMG_URL } from '../utils/Constant';


const MovieCard = ({posterPath}) => {
  if(posterPath === null) return null;
  return (
    <div className='w-48 pr-2'>
    <img src={`${TMDB_IMG_URL}/${posterPath}`} alt='movie-banner'/>
</div>
  )
}

export default MovieCard