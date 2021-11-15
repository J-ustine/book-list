import express from "express";
import mongoose from "mongoose";
import MyListBook from "./model/myListBook.js";
import SuggestionsBook from "./model/SuggestionsBook.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
const connectionUrl =
  "mongodb+srv://J-ustine:firstpassword@cluster0.c1795.mongodb.net/bookDB?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json({ limit: "1mb" }));

mongoose
  .connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(port, () => {
      console.log(`Server started successfully on port ${port}`);
    })
  )
  .catch((error) => console.log(error.message));

// GET REQUESTS
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/myList", (req, res) => {
  MyListBook.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/suggestion", (req, res) => {
  SuggestionsBook.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// POST REQUESTS
app.post("/myList", (req, res) => {
  const myListBookDB = req.body;

  MyListBook.create(myListBookDB, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/suggestion", (req, res) => {
  const suggestionDB = req.body;

  SuggestionsBook.create(suggestionDB, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/add", (req, res) => {
  let itemAdded = req.body;
  MyListBook.create(itemAdded, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
