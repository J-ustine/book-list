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
      <div class="card list-book" key={index}>
        <h5 class="card-header card-title">
          {result.title} - {result.author}
        </h5>
        <div class="card-body">
          <p class="card-text">{rating[resultRating]}</p>
          <p class="card-text">{result.comments}</p>
        </div>
      </div>
    );
  });
}
