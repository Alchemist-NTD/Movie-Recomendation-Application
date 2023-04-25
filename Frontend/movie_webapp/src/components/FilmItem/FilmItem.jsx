import React from 'react'

const FilmItem = ({film}) => {
  return (
    <div className="flex justify-center items-center text-center py-2 text-xl">
      {film.title}
    </div>
  )
}

export default FilmItem