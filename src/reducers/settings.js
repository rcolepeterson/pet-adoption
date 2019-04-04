import types from "../actions/types";
export function typePreference(state = "cat", action) {
  switch (action.type) {
    case types.SET_ANIMAL_PREFERENCE:
      return action.typePreference;

    default:
      return state;
  }
}

export function profile(state = "", action) {
  switch (action.type) {
    case types.SET_PROFILE:
      return action.profile;

    default:
      return state;
  }
}

export function ageRange(state = {}, action) {
  switch (action.type) {
    case types.SET_AGE_RANGE:
      return Object.assign({}, state, {
        min: action.ageRange.min,
        max: action.ageRange.max
      });

    default:
      return state;
  }
}
