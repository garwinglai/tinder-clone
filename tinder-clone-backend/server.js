import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

// App COnfig
const app = express();
const port = process.env.PORT || 8001;
const mongoConnectionURL = "mongodb+srv://admin:8d0OVGOxZ0umDnNd@cluster0.al8l0.mongodb.net/tinder-clone-db?retryWrites=true&w=majority";

// Middlewares
app.use(express.json()); //This helps recognize incoming JSON code
app.use(Cors());

//DB config
mongoose.connect(mongoConnectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});



// API Endpoints
app.get("/", (req, res) => {
  res.send("hello world");
})

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  console.log(dbCard);

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//Listener
app.listen(port, (req, res) => {
  console.log(`Server is running on localhost: ${port}`);
})