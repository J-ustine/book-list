import React, { useState } from "react";
import SearchResult from "./SearchResult";

export default function Suggestions() {
  const [suggestion, setSuggestion] = useState([
    {
      id: "",
      author: "Justine",
      title: "blabla",
      image: "",
    },
    {
      id: "",
      author: "Josu",
      title: "blablablu",
      image: "",
    },
  ]);
  return (
    <div className="suggestion">
      <header className="App-header">
        <h3>Welcome to your list of suggestion book!</h3>
        <p>Soon, you will have a personalized suggestion list.</p>
      </header>
      <SearchResult result={suggestion} />
    </div>
  );
}
