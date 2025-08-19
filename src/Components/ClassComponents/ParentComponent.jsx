import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ChildComponent from "./ChildComponent";
import Child2Component from "./Child2Component";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "Thomas",
    };

    console.log("Parent constructor is executed");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount is executed");
  }

  componentDidUpdate() {
    console.log("Parent ComponentDidUpdate method is executed");
  }

  componentWillUnmount() {
    console.log("Parent ComponentWillUnmount is executed");
  }

  render() {
    console.log("Parent render is executed");
    return (
      <div>
        <h2>
          {" "}
          <b> Hello from the Parent Class Component </b>
        </h2>

        <h4> State of Parent Component : {this.state.count}</h4>

        <h4> Displaying the props: {this.props.name}</h4>
        <h4> Displaying the state : {this.state.name}</h4>

        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </Button>

        <ChildComponent name={this.state.name} />
        <Child2Component name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
