import React, { useEffect, useState } from "react";
import SavedListBook from "./SavedListBook";
import axios from "axios";

export default function MyList() {
  const [mySavedList, setMySavedList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/myList");
      setMySavedList(req.data);
    }
    fetchData();
  }, []);

  return (
    <div className="my-list">
      <header className="App-header">
        <h3>My reading list, comments and ratings</h3>
      </header>
      <SavedListBook result={mySavedList} />
    </div>
  );
}
