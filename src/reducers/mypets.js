import types from "../actions/types";
export function mypets(state = [], action) {
  switch (action.type) {
    case types.SAVE_PET:
      return [...state, action.payload];
    case types.REMOVE_PET:
      return state.filter(a => a.id !== action.payload.id);
    default:
      return state;
  }
}
