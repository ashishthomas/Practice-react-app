import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import "./style/debounce.css";

const DebounceExample = () => {
  const [search, setSearch] = useState("");

  // Debounce the API call
  const handleSearch = useCallback(
    debounce((query) => {
      console.log("Fetching data for:", query);
      // Call API here
    }, 500),
    []
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <h2>Debounce Example</h2>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default DebounceExample;
