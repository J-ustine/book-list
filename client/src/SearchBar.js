import React from "react";

export default function SearchBar(props) {
  return (
    <div className="search-bar">
      <form onSubmit={props.search}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="book, author, themes, etc"
          onChange={(event) => props.keyword(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
