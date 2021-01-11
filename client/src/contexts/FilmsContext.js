import React, { createContext, useReducer} from 'react';
import { FilmsReducer } from '../reducers/FilmsReducer';

export const FilmsContext = createContext();


const FilmsContextProvider = (props) => {

  const [films, dispatch] = useReducer(FilmsReducer, []);

  return (
      <FilmsContext.Provider value={{ films, dispatch }}>
        {props.children}
      </FilmsContext.Provider>
    );
  }

export default FilmsContextProvider;
