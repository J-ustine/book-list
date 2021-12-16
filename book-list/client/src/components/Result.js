import React from "react";
import AddButton from "./AddButton";

export default function SearchResult(props) {
  return (
    <div className="row search-result">
      {props.result.map(function (result, index) {
        return (
          <div className="col-2" key={index}>
            <div className="card">
              <img
                src={result.image}
                className="card-img-top"
                alt={result.title}
              />
              <div className="card-body d-grid gap-2">
                <p className="card-title">
                  <strong>{result.title}</strong>{" "}
                  <small>from {result.author}</small>
                </p>
                <AddButton title={result.title} author={result.author} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
