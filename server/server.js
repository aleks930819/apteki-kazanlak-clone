import path from 'path';
import express from 'express';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';


import promoProductRoutes from './routes/promoProductRoute.js';
import interestingRoute from './routes/interestingRoute.js';
import pharmacieRoute from './routes/phramcieRoute.js';
import userRoute from './routes/userRoute.js';
import uploadsRoute from './routes/uploadRoute.js';

dotenv.config();

const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

app.use('/api/promo', promoProductRoutes);
app.use('/api/interesting', interestingRoute);
app.use('/api/pharmacies', pharmacieRoute);
app.use('/api/auth', userRoute);
app.use('/api/uploads', uploadsRoute);

const __dirname = path.resolve();

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
