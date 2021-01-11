import React, { useContext, useState } from 'react';
import { FilmsContext } from '../contexts/FilmsContext';

const NewFilmForm = () => {
    // 'dispatchFilms' here means addFilm (now in the reducer)
  const { dispatchFilms } = useContext(FilmsContext);
  const [rankings, setRankings] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchFilms({ type: 'ADD_DUMMY_FILM', film: { rankings, title }});
    setRankings('');
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="rankings" value={rankings}
        onChange={(e) => setRankings(e.target.value)} required />
      <input type="text" placeholder="film name" value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <input type="submit" value="add film" />
    </form>
  );
}

export default NewFilmForm;
