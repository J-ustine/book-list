import React, { useEffect, useState } from "react";

export default function DeleteButton(props) {
  const [book, setBook] = useState({
    author: null,
    title: null,
  });

  async function DeletionRequest(event) {
    event.preventDefault();
    setBook({
      author: event.target.name,
      title: event.target.title,
    });
  }

  useEffect(() => {
    async function post() {
      if (book.title !== null) {
        try {
          const response = fetch("/delete", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              author: `${book.author}`,
              title: `${book.title}`,
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
    <form action="/delete" method="post">
      <button
        className="btn btn-outline-danger"
        onClick={DeletionRequest}
        name={props.author}
        title={props.title}
      >
        Delete
      </button>
    </form>
  );
}
