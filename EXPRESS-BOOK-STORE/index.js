const express = require("express");
const { error } = require("node:console");
const app = express();
const PORT = 3000;

// in memory book store
let books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
];

// middleware to parse JSON bodies
app.use(express.json());

// routes
app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Id must be of type number" });
  }

  const book = books.find((e) => e.id === id);

  if (!book) {
    return res
      .status(404)
      .json({ error: "Book with id ${id} does not exist!" });
  }
  return res.json(book);
});

app.post("/books", (req, res) => {
  // console.log(req.headers);
  // console.log(req.body);
  const { title, author } = req.body;
  if (!title || title === "") {
    return res.status(400).json({ error: "Title is required" });
  }
  return res.status(501).json({ error: "This route in under development" });
});
// Delete a book by id
app.delete("/books/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
