import React, { useEffect, useState } from "react";

export default function AddButton(props) {
  const [book, setBook] = useState({
    author: null,
    title: null,
    comments: null,
    rating: null,
  });

  async function AddRequest(event) {
    event.preventDefault();
    setBook({
      author: event.target.name,
      title: event.target.title,
      comments: prompt("Please let a comment for this book. Did you like it?"),
      rating: prompt("Please rate this book from 1(disapointed) to 5(love it)"),
    });
  }

  useEffect(() => {
    async function post() {
      if (book.title !== null) {
        try {
          const response = fetch("/add", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              author: `${book.author}`,
              title: `${book.title}`,
              comments: `${book.comments}`,
              rating: `${book.rating}`,
            }),
          });
          const body = (await response).json();
          console.log("Completed!", body);
        } catch (err) {
          console.error(`Error: ${err}`);
        }
      }
    }
    post();
  }, [book]);

  return (
    <form action="/add" method="post" className="book">
      <button
        className="btn btn-outline-dark btn-sm"
        onClick={AddRequest}
        name={props.author}
        title={props.title}
      >
        Add to my list
      </button>
    </form>
  );
}
