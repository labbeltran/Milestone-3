// DEPENDENCIES
import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import apisRouter from './routes/api.js'

// CONFIGURATION
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON requests
app.use(express.json());

// ROUTES
app.use('/api', apisRouter)

//Listen
ViteExpress.listen(app, PORT, () =>
  console.log('Server is listening on port', PORT, '...'),
);

