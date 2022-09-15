import { legacy_createStore } from "redux";

const initialValue = { counter: 0, showCounter: true };

const counterReducer = (state = initialValue, action) => {
  if (action.type === "INCR") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "INCR_BY_5") {
    return { counter: state.counter + action.payload };
  }

  if (action.type === "DECR") {
    return { counter: state.counter - 1 };
  }

  if (action.type === "TOGGLE") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }

  return state;
};

const store = legacy_createStore(counterReducer);

export default store;
