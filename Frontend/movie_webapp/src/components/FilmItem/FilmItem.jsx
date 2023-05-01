import React from 'react'

const FilmItem = props => {
  const film = props.filmProps
  // console.log(film.poster.split("/")[6].split('.'))
  return (
    <div className='card'>
      {/* <img src={film.poster.split("/")[-1]} /> */}
      <img src={'http://localhost:8000/poster/' + film.id} />
      <button className='btn flex my-4 justify-center items-center'>
        {film.title}
      </button>
      
    </div>
  )
}

export default FilmItem