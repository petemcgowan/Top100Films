import React, { useContext, useState } from 'react';
import { FilmsContext } from '../contexts/FilmsContext';


const SearchFilmsForm = () => {
    // 'dispatchFilms' here means addFilm (now in the reducer)
  const { dispatchFilms} = useContext(FilmsContext);
  const [searchTerms, setSearchTerms] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO get the value from the field, does this already do it?
    console.log ('searchTerms is:' + searchTerms);
    // get the list of films
    var listOfFilms = [];
    // TODO Not sure how search is gonna work yet, I more need to display films taken from the JSONs.

    dispatchFilms({ type: 'ADD_FILMS', films:  listOfFilms });
    setSearchTerms('');
  }

  return (

    <form onSubmit={handleSubmit}>

      <label>Film to search for:
      <input type="text" placeholder="search Terms" value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)} required />
        </label>
      <input type="submit" value="Search Films" />
    </form>
  );
}

export default SearchFilmsForm;

