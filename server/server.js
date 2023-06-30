import express from 'express';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import errorHandler from './middleware/errorHandler.js';

import promoProductRoutes from './routes/promoProductRoute.js';
import newsRoute from './routes/newsRoute.js';
import pharmacieRoute from './routes/phramcieRoute.js';
import userRoute from './routes/userRoute.js';
import uploadsRoute from './routes/uploadRoute.js';
import rateLimit from 'express-rate-limit';

dotenv.config();

const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// const limiter = rateLimit({
//   windowMs: 10 * 60 * 4000,
//   max:400,
//   message: 'Too many requests from this IP, please try again later!',
// });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());
// app.use(limiter);

app.use('/api/promo', promoProductRoutes);
app.use('/api/interesting', newsRoute);
app.use('/api/pharmacies', pharmacieRoute);
app.use('/api/auth', userRoute);
app.use('/api/uploads', uploadsRoute);

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
