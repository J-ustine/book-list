import React, { useEffect, useState } from "react";
import ListBook from "./ListBook";
import axios from "axios";

export default function MyList() {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/myList");
      setMyList(req.data);
    }
    fetchData();
  }, []);

  return (
    <div className="my-list">
      <header className="App-header">
        <h3>Welcome to your list of favorite book!</h3>
      </header>
      <ListBook result={myList} />
    </div>
  );
}
