import React, { useContext } from 'react';
import { ToWatchContext } from '../contexts/ToWatchContext';

const ToWatchDetails = ({ toWatchItem }) => {
  const { dispatchToWatch } = useContext(ToWatchContext);
  return (
    <tr>
    <td onClick={() => dispatchToWatch({ type: 'REMOVE_TOWATCH_ITEM', id: toWatchItem.id })}>
      <div className="rankings">{toWatchItem.rankings}</div>
      <div className="title">{toWatchItem.title}</div>
    </td>
    </tr>
  );
}

export default ToWatchDetails;
