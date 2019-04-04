import types from "../actions/types";
export function savePet(pet) {
  return {
    type: types.SAVE_PET,
    pet: pet
  };
}

export function removePet(pet) {
  return {
    type: types.REMOVE_PET,
    pet: pet
  };
}
