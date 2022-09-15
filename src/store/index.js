import { legacy_createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialValue = { counter: 0, showCounter: true };

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increse(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter() {
      state.counter = !state.showcounter;
    },
  },
});

const counterReducer = (state = initialValue, action) => {
  if (action.type === "INCR") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  if (action.type === "INCR_BY_5") {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "DECR") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === "TOGGLE") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }

  return state;
};

const store = legacy_createStore(counterReducer);

export default store;
