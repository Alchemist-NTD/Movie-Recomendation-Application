import React from 'react'

const FilmItem = props => {
  const film = props.filmProps
  return (
    <div className='card'>
      {/* <img src={film.poster} /> */}
      <button className='btn flex my-4 justify-center items-center'>
        {film.title}
      </button>
      
    </div>
  )
}

export default FilmItem