import uuid from 'uuid/v4';

export const ToWatchReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOWATCH_ITEM':
      return [...state, {
        rankings: action.toWatchItem.rankings,
        title: action.toWatchItem.title,
        id: uuid()}
      ]
    case 'REMOVE_TOWATCH_ITEM':
      return state.filter(toWatchItem => toWatchItem.id !== action.id);
    default:
      return state;
  }
}
