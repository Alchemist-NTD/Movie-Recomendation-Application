import React, { useEffect, useState } from 'react'
import axios from 'axios'

const access_token = localStorage.getItem('access');
const WatchingFilm = ({ id }) => {

  const [playing, setPlaying] = useState(false);
  const [movie, setMovie] = useState(null);

  const url = `http://localhost:8000/movie/retrieve/${id}`

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          url,
          {
            headers: {
              'Authorization': `Bearer ${access_token}`,
            },
          }
        )
        setMovie(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getMovie()
  }, [url])

//   console.log(Filminfo)
  return (
    // <div>
    //   quan
    // </div>
    <div>
      {
        movie === null ? (
          <div>
            ko co phim
          </div>
        ):(
          <div>
             <img src={'http://localhost:8000/poster/' + movie.id} className='flex h-64 w-56 md:w-fit md:h-fit justify-center items-center' />
            <h4>{movie.title}</h4>
          </div>
        )
      }
    </div>
    )
}

export default WatchingFilm