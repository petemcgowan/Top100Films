import uuid from 'uuid/v4';

export const FilmsReducer = (state, action) => {
  console.log ("FilmsReducer called, action.payload:"  + JSON.stringify(action.payload));
  console.log ("FilmsReducer called, action.type:"  + action.type)
  switch (action.type) {
    case 'ADD_DUMMY_FILM':
      return [...state, {
        rankings: action.film.rankings,
        href: '',
        title: action.film.title,
        trackName: '',
        label: '',
        durationMiSecs: '',
        releaseDate: '',
        albumType: '',
        id: uuid()}
      ]
    case 'ADD_FILMS': {
      action.films.map(film => {
        console.log ("film.title:" + film.title);
        return film.title;
      });
      // Note I actually think you WOULD replace the array, refresh it every time
      return action.films;
      // return [...state, ...action.films];
    }
    case 'REMOVE_FILM': {
      return state.filter(film => film.title !== action.title);
    }
    case "profileReady": {
      console.log("FilmsReducer, profileReady");
      return {
        data: action.payload.films
      };
    }
    case 'INITIAL_LOAD': {
      console.log("Reducer, Initial Load, action.data" + action.data);
      console.log("Reducer, Initial Load, action.films" + action.films);

      return action.data;
    }

    default:
      return state;
  }
}
