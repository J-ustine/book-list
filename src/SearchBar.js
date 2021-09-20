import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  let api_key = "AIzaSyDx3MkIdfeq-zrEHnCWovg-uVk_Hhqr5O4";
  let url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${api_key}`;

  function search(event) {
    event.preventDefault();
    axios.get(url).then(urlResponse);
  }

  function urlResponse(response) {
    console.log(response.data.items);
    response.data.items.map(function (item, index) {
      return setResult((prevResult) => {
        return [
          ...prevResult,
          {
            id: item.id,
            author: item.volumeInfo.authors,
            title: item.volumeInfo.title,
            // image: item.volumeInfo.imageLinks.smallThumbnail,
          },
        ];
      });
    });
  }

  return (
    <div className="search-bar">
      <form onSubmit={search}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="book, author, themes, etc"
          onChange={(event) => setKeyword(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      <SearchResult result={result} />
    </div>
  );
}
