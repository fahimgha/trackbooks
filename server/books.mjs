import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const uri = "mongodb://localhost:27017";

async function connectToMongo(dbName, collectionName) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connecté à MongoDB");
    return client.db(dbName).collection(collectionName);
  } catch (error) {
    console.error("Erreur de connexion à MongoDB:", error);
    throw error;
  }
}

async function findAllTasks(collection) {
  return collection.find({}).toArray();
}

// Endpoint pour récupérer les livres
app.get("/getLibrary", async (req, res) => {
  try {
    const collection = await connectToMongo("books", "books");
    const books = await findAllTasks(collection);
    res.json(books);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des livres" });
  }
});

// Endpoint pour ajouter un livre
app.post("/newBook", async (req, res) => {
  try {
    const collection = await connectToMongo("books", "books");
    const newDocument = req.body;
    const result = await collection.insertOne(newDocument);
    res.status(201).json(result); // Réponse JSON avec code 201 pour création
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'ajout du livre" });
  }
});

// Endpoint pour supprimer un livre
app.delete("/deleteBook/:id", async (req, res) => {
  const idBook = req.params.id;

  try {
    if (!ObjectId.isValid(idBook)) {
      return res.status(400).json({ message: "ID invalide" });
    }

    const collection = await connectToMongo("books", "books");

    const result = await collection.deleteOne({ _id: new ObjectId(idBook) });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Livre supprimé avec succès!" });
    } else {
      res.status(404).json({ message: "Livre non trouvé!" });
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du livre:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
