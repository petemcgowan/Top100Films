import React, { useContext } from 'react';
import { FilmsContext } from '../contexts/FilmsContext';
import { ToWatchContext } from '../contexts/ToWatchContext';

const FilmDetails = ({ film }) => {


  // 'dispatchFilms' here means 'removeFilm' function (now in the reducer)
  const { dispatchFilms } = useContext(FilmsContext);
  const { dispatchToWatch } = useContext(ToWatchContext);

    // title is the placeholder text.
    if (film.title.toLowerCase() === "title") {
      return "";
    }

  // TODO: I want to ADD the removed item here to the ToWatchContext crates (invoking its addToWatchItem function in the createReducer)
  // var averageRanking = 0;
  // var rankingOccurrences = 0;
  // // Average Ranking calculations
  // film.rankings.map((data, key) => {
  //   if ((data.rank !== undefined) &&
  //     (data.rank.toLowerCase() !== "todo") &&
  //     (data.ranker.toLowerCase() !== "other")) {
  //       averageRanking +=  Number(data.rank);
  //       rankingOccurrences++;
  //      }
  //   return data.rank;
  // });


  return (
      <tr onClick={ () => {
        dispatchFilms({ type: 'REMOVE_FILM', id: film.id });
        dispatchToWatch({ type: 'ADD_TOWATCH_ITEM', toWatchItem: {rankings: film.rankings, title: film.title}});
      }}>
        <td className="title">{film.title}</td>
        <td>{film.rankings.map(function (rrr) {
          if (rrr.ranker === "AFI") {
            return rrr.rank;
          } else {
            return null
          }
        })}</td>
        <td>{film.rankings.map(function (rrr) {
          if (rrr.ranker === "Empire") {
            return rrr.rank;
          } else {
            return null
          }
        })}</td>
        <td>{film.rankings.map(function (rrr) {
          if (rrr.ranker === "Hollywood Reporter") {
            return rrr.rank;
          } else {
            return null
          }
        })}</td>
        <td>{film.rankings.map(function (rrr) {
          if (rrr.ranker === "IMDB") {
            return rrr.rank;
          } else {
            return null
          }
        })}</td>
       <td>{(film.averageRanking)}</td>
      </tr>
  );
}

export default FilmDetails;


