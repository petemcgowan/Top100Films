import React, { Fragment, useState, useEffect, useReducer, useContext } from 'react';
// PETE TODO include these styles back in
//import "./App.css";

import Navbar from './components/Navbar';

import FilmsContextProvider, {FilmsContext}  from './contexts/FilmsContext';
import FilmList from './components/FilmList';
import { FilmsReducer} from './reducers/FilmsReducer';
import { Films } from "./components/Films";


// const FilmsContext = React.createContext({
//   authenticated: false,
//   films: () => {},
// });

function App() {

  const { dispatch } = useContext(FilmsContext);

  // fetch = () =>
  // new Promise(resolve => {
  //   const fakeJson = {};
  //   fakeJson.json = () => Promise.resolve({ username: "test" });
  //   setTimeout(() => resolve(fakeJson), 1000);
  // });

  const initialState = {
    data: false
  };

  // let reducer = (state, action) => {
  //   console.log("reducer, action.type:" + JSON.stringify(action.type));
  //   console.log("reducer, action.payload:" + JSON.stringify(action.payload));
  //   switch (action.type) {
  //     case "unload": {
  //       console.log("reducer, unload");
  //       return initialState;
  //     }
  //     case "profileReady": {
  //       console.log("reducer, profileReady");
  //       return {
  //         data: action.payload.films
  //       };
  //     }
  //     default:
  //       return state;
  //   }
  // };

  const reloadFilmsData = async () => {
    try {
      let filmsData = await fetch("http://localhost:5000/all-filmRankings");
      console.log ("filmsData, json");
      filmsData = await filmsData.json();
      console.log ("filmsData:" + JSON.stringify(filmsData));

      return filmsData;
    } catch (error) {
      console.log(error);
    }
  };


  const profileReady = data => ({
    type: "profileReady",
    payload: data
  });

  // *******************************************
  // context - how do i pass films to my context
  // reducer - can i move the above elements to MY reducer?  running now to see
  //           what exactly is being called...
  // *******************************************

  // const [films, dispatch] = useReducer(FilmsReducer, initialState);

  useEffect( () => {
    async function fetchData() {
      const filmsDataConst = await reloadFilmsData();
      console.log("FilmsContextProvider, filmsDataConst:" + filmsDataConst);
      dispatch({ type: 'INITIAL_LOAD', data: filmsDataConst });
      // return filmsDataConst ? JSON.parse(filmsDataConst) : [];
      return filmsDataConst ? filmsDataConst : [];
    }
    fetchData();
  }, []); // The empty array causes this effect to only run on mount

  return (
      <div>
       <FilmsContextProvider>
         <FilmList />
       </FilmsContextProvider>
    </div>
  );
/*
  Try: Context
           owns films(state).
          Loads films INITIAL STATE (not app).
          Specifies reducer
          useEffect SETS films (no need yet)

  Reducer adds/removes films (nothing else, based on passed state/action).
  App.js

Health: brickwall till 4:45pm (salmon / egg / bread)
Avoid shop!  Germs, etc
Finish at 8:45pm (large meal: egg, sausages, bread, etc)
Sleep 11:15pm

*/
  // return (
  //   <div className="App">
  //     <ToWatchContextProvider>
  //     <FilmsContextProvider>
  //       <Navbar />
  //       <FilmList />
  //       <SearchFilmsForm/>
  //     </FilmsContextProvider>
  //     </ToWatchContextProvider>
  //   </div>
  // );
}

export default App;


/* <Films/> */
//<NewToWatchItemForm />
//<NewFilmForm />
//<ToWatchList />
