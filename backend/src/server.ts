import express from 'express';
import dotenv from 'dotenv';
import config from './config';
// import logger from './libraries/logger/src';
import apartmentRoutes from './apps/apartments/entry-points/api/apartments.routes';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();
app.use(express.json());

// API Versioning
const apiVersion = config.get('server.apiVersion');
app.use(`/api/${apiVersion}/apartments`, apartmentRoutes);

// Start Server
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      directConnection: true,
    });
    console.log('Connected to MongoDB');

    // Start Server
    const PORT = config.get('server.port');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

connectToDatabase();
