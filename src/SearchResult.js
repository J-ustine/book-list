import React from "react";

export default function SearchResult(props) {
  return (
    <div className="row search-result">
      {props.result.map(function (result, index) {
        return (
          <div className="col-3" key={index}>
            <div className="card">
              <img src={result.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title">
                  {result.title} - {result.authors}
                </p>
                <a href="/" className="btn btn-success">
                  Add to my list
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
