import "./App.css";
import SearchBar from "./SearchBar";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to your book list app!</h3>
        <p>
          Soon you will be able to track your favorite books, adding comments,
          rewiews and rate!
        </p>
        <SearchBar />
      </header>
    </div>
  );
}
