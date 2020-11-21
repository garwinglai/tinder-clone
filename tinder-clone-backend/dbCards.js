import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  name: String,
  photoURL: String
})

const Card = mongoose.model("Card", cardSchema);

export default Card;