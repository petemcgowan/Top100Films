import React, { createContext, useReducer, useEffect } from 'react';
import { ToWatchReducer } from '../reducers/ToWatchReducer';

export const ToWatchContext = createContext();

const ToWatchContextProvider = (props) => {

  const [toWatchItems, dispatchToWatch] = useReducer(ToWatchReducer, [], () => {
    const localData = localStorage.getItem('toWatchItems');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('toWatchItems', JSON.stringify(toWatchItems));
  }, [toWatchItems]);
  return (
    <ToWatchContext.Provider value={{ toWatchItems, dispatchToWatch }}>
      {props.children}
    </ToWatchContext.Provider>
  );
}

export default ToWatchContextProvider;
