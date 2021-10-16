import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import axios from "axios";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  let api_key = "AIzaSyDx3MkIdfeq-zrEHnCWovg-uVk_Hhqr5O4";
  let url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${api_key}`;

  function search(event) {
    event.preventDefault();
    axios.get(url).then(urlResponse);
  }

  function urlResponse(response) {
    setResult([]);
    response.data.items.map(function (item, index) {
      return setResult((prevResult) => {
        return [
          ...prevResult,
          {
            id: item.id,
            author: item.volumeInfo.authors,
            title: item.volumeInfo.title,
            image: item.volumeInfo.imageLinks.smallThumbnail,
          },
        ];
      });
    });
  }

  return (
    <div className="home">
      <header className="App-header">
        <h3>Welcome to the Book List app!</h3>
        <h6 className="welcome-txt">
          I invite you to search for a book by keyword, to consult my
          suggestions for your next reading or my favorite reading list.
          <br />
          Good reading!
        </h6>
      </header>
      <SearchBar search={search} keyword={setKeyword} />
      <SearchResult result={result} />
    </div>
  );
}
