import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const color = useSelector((state) => state.theme.color);
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
      <span className="value" style={{ color: color }}>
        Count: {count}
      </span>
      <button
        className="btn"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        Increment by 10
      </button>
    </div>
  );
};

export default Counter;
