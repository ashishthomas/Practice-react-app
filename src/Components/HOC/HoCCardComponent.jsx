// Writing the HOC Component for the Card Component

import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HoCCardComponent({ title, description, navigation }) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "28rem" }}>
      <Card.Body>
        <Card.Title>
          <h2> {title} </h2>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          onClick={() => {
            navigate(navigation);
          }}
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export const WithHeader = (HoCCardComponent) => {
  return (props) => {
    return (
      <div>
        <h1> Odd Number Card </h1>
        <HoCCardComponent {...props} />
      </div>
    );
  };
};

export default HoCCardComponent;
