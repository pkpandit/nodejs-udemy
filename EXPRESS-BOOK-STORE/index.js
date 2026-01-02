const express = require("express");
const { error } = require("node:console");
const app = express();
const PORT = 3000;

// in memory book store
let books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

// middleware to parse JSON bodies
app.use(express.json());

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  if (isNaN(bookId)) {
    return res.status(400).json({ error: "Book id must be a number" });
  }

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res
      .status(404)
      .json({ error: `The book id ${bookId} does not exist` });
  }
  return res.json(book);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
  };

  books.push(newBook);
  return res.status(201).json(newBook);
});
// Delete a book by id
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  if (isNaN(bookId)) {
    return res.status(400).json({ error: "Book id must be a number" });
  }

  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res
      .status(404)
      .json({ error: `The book id ${bookId} does not exist` });
  }

  books.splice(bookIndex, 1);
  return res.status(200).json({ message: "Book deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
