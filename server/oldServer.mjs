import { addBook, removeBook, editBook } from "./index.js";
import { nanoid } from "nanoid";
import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

function loggingMiddle(req, res, nextMiddleware) {
  console.log("nouvelle request ", req.host);
  nextMiddleware();
}
app.use(loggingMiddle);
app.use(express.json());
app.use(cors());

app.get("/getLibrary", (req, res) => {
  // res.send("test");
  console.log(data);
  return res.json(data);
});

app.get("/getLibrary", (req, res) => {
  // res.send("test");
  console.log(data);
  return res.json(data);
});
app.get("/getLibrary/:id", (req, res) => {
  const id = req.params.id;

  const book = data.find((b) => b.idBook === id);

  if (book) {
    return res.json(book);
  } else {
    return res.status(404).json({ message: "Book not found" });
  }
  // console.log(data);
});
app.get("/getLibrary", (req, res) => {
  const idBook = req.query.idBook;

  return res.json(data[idBook]);
  // console.log(data);
});

// app.post("/newBook", (req, res) => {
//   addBook;
//   let name = req.body.name;
//   let status = req.body.status;
//   let author = req.body.author;
//   let id = nanoid();

//   data = addBook(data, { id, name, author, status });
//   res.json({ message: "Livre ajouté" });
// });

app.delete("/deleteBook/:id", (req, res) => {
  const idBook = req.params.id;

  data = removeBook(data, idBook);
  res.json({ message: "Livre supprimé" });
});

app.put("/editBook/:id", (req, res) => {
  const idBook = req.params.id;
  const { name, author, description } = req.body;
  if (!name || !author || !description) {
    return res.status(400).json({ message: "Données manquantes" });
  }
  data = editBook(data, idBook, { name, author, description });
  res.json({ message: "Livre edité" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
