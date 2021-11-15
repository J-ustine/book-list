import React, { useEffect, useState } from "react";
import axios from "axios";
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
    <div className="suggestions">
      <header className="App-header">Suggestions for your next readings</header>
      <SearchResult result={suggestions} />
    </div>
  );
}
