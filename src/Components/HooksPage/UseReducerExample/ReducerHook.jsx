import React from "react";
import { useReducer } from "react";
import { Button, Form } from "react-bootstrap";
import { utilFunctiondata } from "./utils/FunctionUtils";

function ReducerHook() {
  const [data, dispatch] = useReducer(utilFunctiondata, {
    name: "",
    gmail: "",
    count: 0,
  });
  return (
    <div className="mt-3 container text-center w-50 mx-auto border border-primary p-5 rounded-5 shadow-lg shadow-primary">
      <h1 className="p-3">{data.count}</h1>
      <div>
        <Button
          className="m-2"
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          Increment
        </Button>
        <Button
          className="m-2"
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          Decrement
        </Button>
        <Button
          className="m-2"
          onClick={() => {
            dispatch({ type: "multiply" });
          }}
        >
          Multiplication
        </Button>
        <Button
          className="m-2"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </Button>
      </div>
      <div className="mt-3 p-5">
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className="text-primary fw-bold "> NAME </Form.Label>
            <Form.Control
              type="text"
              value={data.name}
              onChange={(event) => {
                dispatch({ type: "name", value: event.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGmail">
            <Form.Label className="text-primary fw-bold"> GMAIL </Form.Label>
            <Form.Control
              type="email"
              value={data.gmail}
              onChange={(event) => {
                dispatch({ type: "gmail", value: event.target.value });
              }}
            />
          </Form.Group>
        </Form>
      </div>
      {console.log(data, "data" + data.count)}
    </div>
  );
}

export default ReducerHook;
