import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    multiply(state) {
      state.counter = state.counter * 2;
    },
    increse(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.counter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialValue, action) => {
//   if (action.type === "INCR") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "INCR_BY_5") {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "DECR") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "TOGGLE") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }

//   return state;
// };

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
