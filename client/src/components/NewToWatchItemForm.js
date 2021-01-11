import React, { useContext, useState } from 'react';
import { ToWatchContext } from '../contexts/ToWatchContext';

const NewToWatchItemForm = () => {
    // 'dispatch' here means addToWatchItem
  const { dispatchToWatch } = useContext(ToWatchContext);
  const [rankings, setRankings] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchToWatch({ type: 'ADD_TOWATCH_ITEM', toWatchItem: { rankings, title }});
    setRankings('');
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="to watch item films" value={rankings}
        onChange={(e) => setRankings(e.target.value)} required />
      <input type="text" placeholder="film name" value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <input type="submit" value="add to watch item" />
    </form>
  );
}

export default NewToWatchItemForm;
