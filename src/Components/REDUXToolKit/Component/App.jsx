import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../CreateSlice/Slice";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        style={{
          marginLeft: "10px",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{
          marginLeft: "10px",
          padding: "10px",
          backgroundColor: "red",
          color: "white",
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(reset())}
        style={{
          marginLeft: "10px",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
