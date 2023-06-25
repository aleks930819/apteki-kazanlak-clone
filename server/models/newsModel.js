import mongoose from 'mongoose';
import slugify from 'slugify';

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
      publicId: {
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

const News = mongoose.model('News', newsSchema);

export default News;
