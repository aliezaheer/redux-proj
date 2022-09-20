import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showHide = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseBy5 = () => {
    dispatch(counterActions.increse(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const multiplyHandler = () => {
    dispatch(counterActions.multiply());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showHide && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy5}>Icrease by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={multiplyHandler}>Multiply</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
