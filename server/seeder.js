import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/admins.js';
import promoProducts from './data/promoProducts.js';
import news from './data/news.js';
import pharmaciesData from './data/phramacies.js';

import User from './models/userModel.js';
import PromoProduct from './models/promoProductModel.js';
import News from './models/newsModel.js';
import Pharmacie from './models/pharmacieModel.js';

import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await PromoProduct.deleteMany();
    await News.deleteMany();
    await Pharmacie.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const samplePromoProducts = promoProducts.map((promoProduct) => {
      return { ...promoProduct, user: adminUser };
    });

    await PromoProduct.insertMany(samplePromoProducts);
    await News.insertMany(news);
    await Pharmacie.insertMany(pharmaciesData);

    console.log('Data imported!');
    process.exit();
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await PromoProduct.deleteMany();
    await News.deleteMany();
    await Pharmacie.deleteMany();

    console.log('Data destroyed!');
    process.exit();
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
