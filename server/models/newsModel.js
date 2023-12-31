import mongoose from 'mongoose';
import slugify from 'slugify';
import path from 'path';
import fs from 'fs';

const newsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
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
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

newsSchema.pre('save', function (next) {
  if (this.isModified('title') || this.slug === null) {
    this.slug = slugify(this.title, { lower: true, replacement: '-' });
  }
  next();
});

newsSchema.pre('deleteOne', function (next) {
  const image = this.image;

  console.log(image);

  if (image && image.filename) {
    const filePath = path.join('images/', image.filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log('deleted');
    }
  }

  next();
});

const News = mongoose.model('News', newsSchema);

export default News;
