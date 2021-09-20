import "./App.css";

export default function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Booklist
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  My list
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sugestions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="App-header">
        <h3>Welcome to your book list app!</h3>
        <p>
          Soon you will be able to track your favorite books, adding comments,
          rewiews and rate!
        </p>
      </header>
    </div>
  );
}
