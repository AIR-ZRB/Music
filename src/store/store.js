import { createStore, combineReducers } from "redux";

let musicUrl = (state = "12321", action) => {
  switch (action.type) {
    case "musicUrl":
      return (state = action.data);
    default:
      return state;
  }
};

let musicPlay = (state = "pause", action) => {
  switch (action.type) {
    case "musicPlay":
      return (state = action.data);
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    musicUrl,
    musicPlay,
  })
);

store.subscribe(() => {
  console.log("更新");
//   console.log(store.getState());
});
export default store;
