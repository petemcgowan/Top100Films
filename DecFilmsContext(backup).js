import React, { createContext, useReducer, useEffect } from 'react';
import { FilmsReducer } from '../reducers/FilmsReducer';
import axios from 'axios';

export const FilmsContext = createContext();


const FilmsContextProvider = (props) => {

  const [films, dispatchFilms] = useReducer(FilmsReducer, [], () => {
    let dbData = null;
    console.log ("in FilmsContextProvider");

    var res = axios.get('http://localhost:3000/all-filmRankings');
    console.log ("just after axios call");
    console.log (res);
    dbData = res.data;
    console.log("dbData:" + JSON.stringify(dbData));
    dispatchFilms({ type: 'ADD_FILMS', films:  dbData });

    //return dbData ? JSON.parse(dbData) : [];
    return dbData;
  })

  useEffect( ()  => {
    console.log ("FilmsContextProvider, useEffect called");
  }, [films]);
  return (
    <FilmsContext.Provider value={{ films, dispatchFilms }}>
      {props.children}
    </FilmsContext.Provider>
  );
}

export default FilmsContextProvider;
