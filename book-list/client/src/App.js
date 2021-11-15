import "./style/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import MyList from "./components/MyList";
import Suggestions from "./components/Suggestions";
import Home from "./components/Home";

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
                  <NavLink to="/" activeClassName="current" exact>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/my-list" activeClassName="current">
                    My List
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/suggestions" activeClassName="current">
                    Suggestions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/my-list" component={MyList} />
            <Route exact path="/suggestions" component={Suggestions} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
