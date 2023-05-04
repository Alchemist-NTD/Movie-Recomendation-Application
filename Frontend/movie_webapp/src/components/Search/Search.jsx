import React, { useState } from 'react'

const Search = props => {

    const searchFunc = props.searchFunc
    const genreList = props.genreList  
    const [SearchTerm, setSearchTerm] = useState('')
    // const [GenreTerm, setGenreTerm] = useState('All')

    const changeSearchTerm = event => {
        // event.preventDefault()
        setSearchTerm(event.target.value)
    }

  //   const changeGenreTerm = event => {
  //     // event.preventDefault()
  //     setGenreTerm(event.target.value)
  // }

    const activateSearch = event => {
        event.preventDefault()
        searchFunc(SearchTerm)
    }


  return (
    <form onSubmit={activateSearch}>
    <input
      className="max-w-screen-xl mx-auto w-80 h-30 bg-gray-800 rounded-full px-4 py-2 pl-8 text-sm focus:outline-none focus:shadow-outline"
      type="text"
      name='SearchTerm'
      placeholder='Type the name of film...'
      value={SearchTerm}
      onChange={changeSearchTerm}
    />
    <input 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
    type='submit' value='Search' 
    // className='btn text-black' 
    />
    </form>
  )
}

export default Search