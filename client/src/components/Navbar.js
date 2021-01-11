import React, { useContext } from 'react';
import { FilmsContext } from '../contexts/FilmsContext';

const Navbar = () => {
  const { films } = useContext(FilmsContext);
  return (
    <div className="navbar">
      <h1>Top 100 Films</h1>
      <p>Currently you have {films.length} excited puppies awaiting you...</p>
    </div>
  );
}

export default Navbar;
