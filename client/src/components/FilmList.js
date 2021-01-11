import React, { useContext } from 'react';
import FilmDetails from './FilmDetails';
import { FilmsContext } from '../contexts/FilmsContext';

const FilmList = () => {
  const { films } = useContext(FilmsContext);
  console.log("FilmList, films.length:" + JSON.stringify(films));

  // Average Ranking calculations
  var cumulativeRanking = 0;
  var rankingOccurrences = 0;

  films.forEach(film => {
    film.rankings.map((data, key) => {
      if ((data.rank !== undefined) &&
        (data.rank.toLowerCase() !== "todo") &&
        (data.ranker.toLowerCase() !== "other")) {
          cumulativeRanking +=  Number(data.rank);
          rankingOccurrences++;
         }
      return data.rank;
    });
    var averageRanking = ((cumulativeRanking / rankingOccurrences).toFixed(2));
    console.log("film" + film);
    film["averageRanking"] =  averageRanking;
  });

  // // Sort by average ranking
  function sortJSONArrayByAverageRanking(film1,film2) {
    console.log("film1.rankings:" + film1 + ", film2:" + film2);
    return film1.averageRanking - film2.averageRanking;
  }
   films.sort(sortJSONArrayByAverageRanking);

  return films.length ? (
    <div className="film-list">
      <table>
        <thead>
          <tr>
            <th>Film</th>
            <th>AFI</th>
            <th>Empire</th>
            <th>IMDB</th>
            <th>Hollywood Reporter</th>
            <th>Average Ranking</th>
          </tr>
        </thead>
        <tbody>
        {films.map(film => {
          return ( <FilmDetails film={film} key={film.title} /> );
        })}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="empty">No films to ogle.</div>
  );
}

export default FilmList;
