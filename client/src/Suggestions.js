import React, { useEffect, useState } from "react";
import axios from "./axios";
import SearchResult from "./SearchResult";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/suggestion");
      setSuggestions(req.data);
    }
    fetchData();
  }, []);

  return (
    <header className="App-header">
      <h3>Welcome to your list of suggested book!</h3>
      <SearchResult result={suggestions} />
    </header>
  );
}
