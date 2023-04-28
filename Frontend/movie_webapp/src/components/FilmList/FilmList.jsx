import React, { useEffect, useState } from 'react'
import FilmItem from '../FilmItem/FilmItem'
import axios from 'axios'

localStorage.setItem('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyNjY2MDY4LCJpYXQiOjE2ODI1Nzk2NjgsImp0aSI6IjRmMDFmNWY0MDk4NTQxNjdiMTk0MmIyOTZjMmRlNGQzIiwidXNlcl9pZCI6MTI5OTI1fQ.RCyOks6N-puaN_lv4y_un2DoKJ-lwF5nP7O58Ew7dNI"); // sẽ set ở login
const access_token = localStorage.getItem('access_token');
const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8000/movie/list/1',
          {
            headers: {
              'Authorization': `Bearer ${access_token}`,
            },
          }
        )
        setFilms(res.data)
        setTotalItems(res.data.length)
        // console.log(totalItems)
      } catch (error) {
        console.log(error.message)
      }
    }

    getFilms()
  }, [])

  // const [films, setFilms] = useState([
  //   {
  //     title : "Viec 1",
  //     id : 1, 
  //   },
  //   {
  //     title : "Viec 2",
  //     id : 2,
  //   },
  //   {
  //     title : "Viec 3",
  //     id : 3,
  //   }
  // ])
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (newPage) => {
      // if (newPage  > 0 && newPage < totalPages) {
      //   setCurrentPage(newPage);
      // }
    setCurrentPage(newPage);

  }


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
    
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
    
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = films.slice(startIndex,endIndex);
  return (
    
    <div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 items-center justify-center'> 
        {itemsToShow.map(film => (
          <FilmItem filmProps={film} key={film.id} />
        ))}
      </div>

      {/* <PageNav
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={handlePageChange}
       /> */}
      
      <div className=' flex justify-center my-2'>
      <button className='btn mx-2' onClick={handlePrevPage}>Previous Page </button>
      {/* {pageNumbers.map((pageNumber) => (
      <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
        {pageNumber}
      </button>
      ))} */}
      <h4 className='flex justify-center my-1 text-center text-cyan-50 text-2xl font-bold'>Page {currentPage}</h4>
      <button className='btn mx-2' onClick={handleNextPage}>Next Page</button>
      </div>
      

    </div>

  )
}

export default FilmList