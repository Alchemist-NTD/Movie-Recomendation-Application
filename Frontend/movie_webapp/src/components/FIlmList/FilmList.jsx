import React, { useEffect, useState } from 'react'
import FilmItem from '../FilmItem/FilmItem'
import axios from 'axios'

const FilmList = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const getFilms = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8000/movie/retrieve/'
        )
        setFilms(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    getFilms()
  }, [])

  return (
    
    <div>
      <ul>
        {films.map(film => (
          <FilmItem film={film} key={film.id} />
        ))}
      </ul>
    </div>
  )
}

export default FilmList