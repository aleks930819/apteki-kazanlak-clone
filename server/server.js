import express from 'express';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import promoProductRoutes from './routes/promoProductRoute.js';

dotenv.config();

const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

const app = express();

app.use(bodyParser.json());

// app.get('/api/interesno', (req, res) => {});

// app.get('/api/interesno/:name', (req, res) => {});

// app.get('/api/pharmacies', (req, res) => {
//   res.send('Hello from pharmacies.');
// });

// app.get('/api/pharmacies/:name', (req, res) => {
//   res.send('Hello from pharmacies.');
// });

app.use('/api/promo', promoProductRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
