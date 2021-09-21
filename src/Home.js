<<<<<<< HEAD
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
        <h3>Welcome to your book list app!</h3>
      </header>
      <SearchBar search={search} keyword={setKeyword} />
      <SearchResult result={result} />
    </div>
=======
import React from "react";

export default function Home() {
  return (
    <header className="App-header">
      <h3>Welcome to your book list app!</h3>
      <p>
        Soon you will be able to track your favorite books, adding comments,
        rewiews and rate!
      </p>
    </header>
>>>>>>> 4b37e6d9... Add React router and routes to the app
  );
}
