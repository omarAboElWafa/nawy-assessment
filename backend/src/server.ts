import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import logger from './libraries/logger/src';
import apartmentRoutes from './apps/apartments/entry-points/api/apartments.routes';

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();
app.use(express.json());

// API Versioning
const apiVersion = config.get('server.apiVersion');
app.use(`/api/${apiVersion}/products`, apartmentRoutes);

// Start Server
const PORT = config.get('server.port');
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
