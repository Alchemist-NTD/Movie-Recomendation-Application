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
      className='text-xl text-black'
      type='text'
      name='SearchTerm'
      placeholder='Type the name of film...'
      value={SearchTerm}
      onChange={changeSearchTerm}
    />
    <input type='submit' value='Search' className='btn text-black' />
    </form>
  )
}

export default Search