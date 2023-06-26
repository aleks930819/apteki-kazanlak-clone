import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';

const promoProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    newPrice: {
      type: Number,
      required: true,
    },
    image: {
      url: {
        type: String,
      },
      filename: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

promoProductSchema.pre('findOneAndDelete', async function (next) {
  const doc = await this.model.findOne(this.getQuery());
  const image = doc.image;

  if (image && image.filename) {
    const filePath = path.join('images/', image.filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  next();
});

const PromoProduct = mongoose.model('PromoProduct', promoProductSchema);

export default PromoProduct;
