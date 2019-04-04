import { createStore } from "redux";
import rootReducer from "../reducers";
import types from "../actions/types";
import { loadState, saveState } from "../api/localStorage";
import { SEARCH_RESULTS_URL, SETTINGS_URL } from "../constants";

export default function configureStore(initialState) {
  const mainReducer = (state = {}, action) =>
    action.type === "hydrate" ? action.payload : rootReducer(state, action);
  const persistedState = loadState();
  const store = createStore(mainReducer, {
    ...persistedState,
    ...initialState
  });
  //loacal storage
  store.subscribe(() => {
    saveState({
      mypets: store.getState().mypets
    });
  });

  //handle errors
  function handleErrors(response) {
    if (!response.ok) {
      store.dispatch({
        type: types.DISPLAY_SITE_MESSAGE,
        payload: "Error Fetching Data"
      });
    }
    return response;
  }

  // Hydrate state with API.
  Promise.all([
    fetch(SEARCH_RESULTS_URL)
      .then(handleErrors)
      .then(value => value.json()),
    fetch(SETTINGS_URL)
      .then(handleErrors)
      .then(value => value.json())
  ])
    .then(value => {
      let state = store.getState();
      store.dispatch({
        type: "hydrate",
        payload: {
          ...state,
          ...value[0],
          ...persistedState,
          pets: value[1]
        }
      });
    })
    .catch(err => {
      console.log("we have an error", err);
    });

  return store;
}
