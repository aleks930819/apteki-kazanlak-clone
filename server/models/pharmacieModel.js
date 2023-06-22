import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
});

const pharmacieSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true, image: [imageSchema] },
  address: {
    city: { type: String, required: true },
    street: { type: String, required: true },
  },
  history: {
    type: String,
    required: true,
    image: [imageSchema],
  },
  phone: { type: String, required: true, image: [imageSchema] },
  workingHours: {
    mondayToFriday: { type: String, required: true, image: [imageSchema] },
    saturday: { type: String, required: true, image: [imageSchema] },
    sunday: { type: String, required: true, image: [imageSchema] },
  },
  managerName: { type: String, required: true },
  managerTitle: { type: String, required: true },
  managerDescription: { type: String, required: true, image: [imageSchema] },
});

const Pharmacie = mongoose.model('Pharmacie', pharmacieSchema);

export default Pharmacie;
