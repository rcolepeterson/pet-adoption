import React from "react";
import { render } from "react-dom";
import App from "./App";
import configureStore from "./store/configureStore";
const initialState = {
  ageRange: {},
  mypets: [],
  pets: [],
  id: 0,
  profile: "",
  typePreference: ""
};
const store = configureStore(initialState);
render(<App store={store} />, document.getElementById("root"));
