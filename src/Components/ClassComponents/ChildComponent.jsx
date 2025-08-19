import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "Hello, Child Here!",
    };

    console.log("Child constructor is executed");
  }

  componentDidMount() {
    console.log("Child ComponentDidMount is executed");
  }

  componentDidUpdate() {
    console.log("Child ComponentDidUpdate is executed");
  }

  componentWillUnmount() {
    console.log("Child ComponentWillUnmount is executed");
  }

  render() {
    console.log("Child render is executed");
    return (
      <div>
        <h2>
          {" "}
          <b> Hello from the Child Class Component </b>
        </h2>
        {/* <h4> State of Child Component : {this.state.count}</h4>
        <h4> Displaying the props: {this.props.name}</h4>
        <h4> Displaying the state : {this.state.text}</h4>

        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {" "}
          Increment{" "}
        </Button> */}
      </div>
    );
  }
}

export default ChildComponent;
