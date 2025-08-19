import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class Child2Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "Hello, Child2 Here!",
    };

    console.log("Child2 constructor is executed");
  }

  componentDidMount() {
    console.log("Child2 ComponentDidMount is executed");
  }

  componentDidUpdate() {
    console.log("Child2 ComponentDidUpdate is executed");
  }

  componentWillUnmount() {
    console.log("Child2 ComponentWillUnmount is executed");
  }

  render() {
    console.log("Child2 render is executed");
    return (
      <div>
        <h2>
          {" "}
          <b> Hello from the Child2 Class Component </b>
        </h2>

        {/* <h4> State of Child2 Component : {this.state.count}</h4>
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

export default Child2Component;
