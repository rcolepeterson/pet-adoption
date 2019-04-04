import types from "../actions/types";
export function message(state = "", action) {
  switch (action.type) {
    case types.DISPLAY_SITE_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
