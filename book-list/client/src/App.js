import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import MyListPage from "./components/MyListPage";
import SuggestionsPage from "./components/SuggestionsPage";
import HomePage from "./components/HomePage";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/my-list" element={<MyListPage />} />
          <Route exact path="/suggestions" element={<SuggestionsPage />} />
        </Routes>
      </div>
    </div>
  );
}
