import React from "react";

export default function SearchResult(props) {
  console.log(props.result);
  return (
    <div className="row search-result">
      {props.result.map(function (result, index) {
        return (
          <div className="col-3">
            <div className="card">
              <img
                src="http://books.google.com/books/content?id=p3QQjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title">{result.title}</p>
                <p className="card-text">{result.authors}</p>
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
