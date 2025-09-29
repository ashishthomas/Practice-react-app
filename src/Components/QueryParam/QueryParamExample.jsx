import { useLocation } from "react-router-dom";

const QueryParamExample = () => {
  const location = useLocation();

  // Function to get query parameters
  const getQueryParams = () => {
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get("name");
    const age = queryParams.get("age");
    return { name, age };
  };

  const { name, age } = getQueryParams();

  return (
    <div>
      <h2>Query Parameters Example</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default QueryParamExample;
