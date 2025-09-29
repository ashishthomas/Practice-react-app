import React, { useState, useCallback } from "react";

const CallbackHook = () => {
  const [count, setCount] = useState(0);

  // useCallback prevents the function from being recreated on every render
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={increment} />
    </div>
  );
};

import PropTypes from "prop-types";

const Button = React.memo(({ onClick }) => {
  console.log("Button component re-rendered");
  return <button onClick={onClick}>Increment</button>;
});

Button.displayName = "Button";

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CallbackHook;
