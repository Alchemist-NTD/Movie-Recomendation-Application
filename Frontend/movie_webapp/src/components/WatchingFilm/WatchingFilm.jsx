import React, { useEffect, useState } from 'react'
import axios from 'axios'

const WatchingFilm = props => {

  const film = props.filmProps

  const [playing, setPlaying] = useState(false);
//   const [Filminfo, setFilminfo] = useState(null);
    const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

//   useEffect(() => {
//     const getFilminfo = async () => {s
//       try {
//         const res = await axios.get(
//           'http://localhost:8000/movie/retrieve/${filmId}',
//         )
//         setFilminfo(res.data)
//       } catch (error) {
//         console.log(error.message)
//       }
//     }

//     getFilminfo()
//   })
  
//   console.log(Filminfo)
  return (
    <div>
        <img src={film.poster} alt="shtty project :)" />
        <h4>{film.title}</h4>
    </div>
    )
}

export default WatchingFilm