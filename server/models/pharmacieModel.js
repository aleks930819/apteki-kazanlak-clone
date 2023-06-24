import mongoose from 'mongoose';
import slugify from 'slugify';

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
});

const pharmacieSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  address: {
    city: { type: String, required: true },
    street: { type: String, required: true },
  },
  history: {
    type: String,
    required: true,
  },
  phone: { type: String, required: true },
  workingHours: {
    mondayToFriday: [{ type: String, required: true }],
    saturday: [{ type: String }],
    sunday: [{ type: String }],
  },
  managerName: { type: String, required: true },
  managerTitle: { type: String, required: true },
  managerDescription: { type: String, required: true },
  slug: { type: String, unique: true },
});

pharmacieSchema.pre('save', function (next) {
  if (this.isModified('name') || this.slug === null) {
    this.slug = slugify(this.name, { lower: true, replacement: '-' });
  }
  next();
});

const Pharmacie = mongoose.model('Pharmacie', pharmacieSchema);

export default Pharmacie;
