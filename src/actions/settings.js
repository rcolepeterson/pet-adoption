import types from "../actions/types";
export function animalPreference(str) {
  return {
    type: types.SET_ANIMAL_PREFERENCE,
    typePreference: str
  };
}

export function setProfile(str) {
  return {
    type: types.SET_PROFILE,
    profile: str
  };
}

export function setAgeRange(ageRange) {
  return {
    type: types.SET_AGE_RANGE,
    ageRange: ageRange
  };
}
