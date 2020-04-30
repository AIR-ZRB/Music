import { createStore, combineReducers } from "redux";

let musicUrl = (state = "", action) => {
  musicUrl = action.musicUrl;
  return null;
};

let musicPlay = (state = "pause", action) => {
  musicPlay = action.musicPlay;
  return null;
};

const store = createStore(
  combineReducers({
    musicUrl,
    musicPlay,
  })
);

export default store;
