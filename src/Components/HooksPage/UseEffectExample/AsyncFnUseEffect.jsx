import { useState, useEffect } from "react";

function AsyncFnUseEffect() {
  const [data, setData] = useState(null); // Here the Data is Stored from the API

  const [state, setState] = useState(0); // Here it is to set the dependency of the data fetching from the API

  const FetchAPI = async () => {
    // Here the Data is Fetched from the API

    const URL = "https://dummyjson.com/products";
    const Rawdata = await fetch(URL);
    const Infodata = await Rawdata.json();
    setData(Infodata);
  };

  useEffect(() => {
    // Execute the Async Function every time the state changes / UseEffect

    FetchAPI();
    console.log("useEffect fetched");
  }, [state]);

  // Conditional Rendering is done
  return (
    <>
      {data ? (
        <>
          <h1> Welcome to Changing the State</h1>
          <button className="p-5" onClick={() => setState(state + 1)}>
            Changing State
          </button>
          {console.log("fetching data from RETURN Statement ")}
          {console.log(data)}

          {data?.products?.map((item) => {
            // Here the ?. is called the optional chaining operator
            //  It allows you to safely access properties of an object that might be null or undefined, without causing errors.

            return <h3 key={item.id}>{item.title}</h3>;
          })}
        </>
      ) : (
        <>
          {" "}
          <h1> Loading .... </h1>{" "}
        </>
      )}
    </>
  );
}

export default AsyncFnUseEffect;
