import React from 'react';
import './search.css'
export const SearchBar = () => {
    return (
        
        <div class='widget-search'>
            
            <form action="get">
            <input type='text' name='search' placeholder='seatch other' id='search-keyword'>

            </input>
            <input id='searchsubmit' type='submit'>
            </input>
            </form>
            
        </div>
    )
}
