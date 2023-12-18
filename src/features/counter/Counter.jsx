import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <span className="value">Count: {count}</span>
      <button
        className="btn"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
