import React from "react";

export default function Listbook(props) {
  const rating = {
    1: `★`,
    2: `★★`,
    3: `★★★`,
    4: `★★★★`,
    5: `★★★★★`,
  };
  return props.result.map(function (result, index) {
    const resultRating = result.rating;
    return (
      <div className="card list-book" key={index}>
        <h5 className="card-header card-title">
          {result.title} - {result.author}
        </h5>
        <div className="card-body">
          <p className="card-text">{rating[resultRating]}</p>
          <p className="card-text">{result.comments}</p>
        </div>
      </div>
    );
  });
}
