import React, { useEffect, useState } from "react";

export default function SearchResult(props) {
  const [book, setBook] = useState({
    author: null,
    title: null,
    comments: null,
    rating: null,
  });

  async function test2(event) {
    console.log(event.target.name);
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
                    name={result.author}
                    title={result.title}
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
