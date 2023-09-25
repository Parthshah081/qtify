import React, { useState } from 'react'
import styles from './Search.module.css';
import {ReactComponent as SearchIcon} from '../../assets/searchIcon.svg'
const Search = ({data, onSearch}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue)

    if(inputValue.trim() === ''){
       setSuggestions([])
    }else{
      const filteredSuggestions = data.filter(item => 
        item.title && typeof item.title === 'string' && item.title.toLowerCase().includes(inputValue.toLowerCase())
       )
       setSuggestions(filteredSuggestions); 
       console.log(filteredSuggestions); 
    }
    
    onSearch(inputValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div>
       <form className={styles.wrapper} onSubmit={handleSubmit}>
         <input className={styles.searchBar}
           type='text'
           placeholder='Search for songs'
           value={query}
           onChange={handleInputChange}
         />
         <div>
            <button className={styles.searchButton} type='submit'>
                <SearchIcon/>
            </button>
         </div>
       </form>
       <ul className={styles.suggestions}>      
        {suggestions.length > 1 && suggestions.map((item, index) => (
          <li key={index} onClick={() => setQuery(item.title)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search