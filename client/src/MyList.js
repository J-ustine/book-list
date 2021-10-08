<<<<<<< HEAD
import React, { useState } from "react";
import ListBook from "./ListBook";

export default function MyList() {
  const [myList, setMyList] = useState([
    {
      id: "99999",
      author: "Justine",
      title: "Title from myList",
      comments: "Amazing!",
      rating: 5,
    },
    {
      id: "99999",
      author: "Justine",
      title: "Title from myList",
      comments: "Everybody should read this! OMG",
      rating: 5,
    },
    {
      id: "99999",
      author: "Justine",
      title: "Title from myList",
      comments: "Quite good but intense",
      rating: 4,
    },
  ]);
  return (
    <div className="my-list">
      <header className="App-header">
        <h3>Welcome to your list of favorite book!</h3>
      </header>
      <ListBook result={myList} />
    </div>
=======
import React from "react";

export default function MyList() {
  return (
    <header className="App-header">
      <h3>Welcome to your list of favorite book!</h3>
      <p>Soon you will have your favorite list saved here.</p>
    </header>
>>>>>>> my-list
  );
}
