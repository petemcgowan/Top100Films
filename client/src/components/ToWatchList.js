import React, { useContext } from 'react';
import ToWatchDetails from './ToWatchDetails';
import { ToWatchContext } from '../contexts/ToWatchContext';

const ToWatchList = () => {
  const { toWatchItems } = useContext(ToWatchContext);
  return toWatchItems.length ? (
    <div className="toWatch-list">
      <table>
        <thead>
          <tr>
            <th>Film</th>
          </tr>
        </thead>
        <tbody>
          {toWatchItems.map(toWatchItem => {
            return ( <ToWatchDetails toWatchItem={toWatchItem} key={toWatchItem.id} /> );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="empty">No to watch Items to ogle over.</div>
  );
}

export default ToWatchList;
