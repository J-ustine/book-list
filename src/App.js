import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyList from "./MyList";
import Suggestions from "./Suggestions";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Booklist
            </Link>
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
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/my-list">My List</Link>
                </li>
                <li className="nav-item">
                  <Link to="/suggestions">Suggestions</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          <Switch>
            <Route exact path="/my-list">
              <MyList />
            </Route>
            <Route exact path="/suggestions">
              <Suggestions />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
