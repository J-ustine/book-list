import React, { useState } from "react";

export default function SearchResult(props) {
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState(null);
  const [rating, setRating] = useState(null);

  async function test2(event) {
    event.preventDefault();
    // await addSuggestion(event).then(() => {
    try {
      const response = fetch("/add", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: "Justine",
          title: "Hello from title",
          comments: "comments",
          rating: 5,
        }),
      });
      const body = (await response).json();
      console.log("Completed!", body);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
    // });
  }

  function addSuggestion(event) {
    return new Promise(() => {
      event.preventDefault();
      setTitle(event.target.title);
      setAuthor(event.target.author);
      // setComments(prompt("Please add a comment to this book"));
      // setRating(
      //   prompt("Please rate this book from 1(disapointed) to 5(love it)")
      // );
    });
  }

  return (
    <div className="row search-result">
      {props.result.map(function (result, index) {
        return (
          <div className="col-3" key={index}>
            <div className="card">
              <img src={result.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title">
                  <em>{result.title}</em> <small>{result.author}</small>
                </p>
                <form action="/add" method="post" className="book">
                  <button
                    className="btn btn-success"
                    onClick={test2}
                    name="add"
                  >
                    Add to my list
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
