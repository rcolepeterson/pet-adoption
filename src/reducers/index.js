import { combineReducers } from "redux";
import { typePreference, ageRange, profile } from "./settings";
import { mypets } from "./mypets";
import { message } from "./message";
export default combineReducers({
  typePreference,
  ageRange,
  profile,
  mypets,
  message,
  pets: (state = []) => state,
  id: (state = 0) => state
});
