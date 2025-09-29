import { useState, useEffect } from "react";
import { sampledata } from "../utils/Data";

function LazyLoading() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(sampledata); // Load data before rendering
      setLoading(false);
    }, 1000); // Simulating a delay
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img
              width="20%"
              height="40%"
              src={item.images[0]}
              alt="Image not found"
              loading="lazy" // Enables lazy loading
            />
          </div>
        ))
      )}
    </div>
  );
}

export default LazyLoading;
