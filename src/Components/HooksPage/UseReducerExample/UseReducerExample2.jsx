import { useReducer } from "react";
import { Button } from "react-bootstrap";

// Initial state
const initialState = { count: 0 };

// Reducer function
const ReducerCounter = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "MULTIPLY":
      return { count: state.count * 5 };
    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
};

// CountwithUseReducer component
function UseReducerExample2() {
  const [state, dispatch] = useReducer(ReducerCounter, initialState);
  console.log(state);

  return (
    <div>
      <p>Count: {state.count}</p>
      <Button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increement
      </Button>
      <Button onClick={() => dispatch({ type: "DECREMENT" })}>
        decreement
      </Button>
      <Button onClick={() => dispatch({ type: "MULTIPLY" })}>x5</Button>
      <Button onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
    </div>
  );
}

export default UseReducerExample2;
