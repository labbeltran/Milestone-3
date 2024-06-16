// DEPENDENCIES
import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import apisRouter from './routes/api.js'
import path from 'path';
import { fileURLToPath } from "url";

// CONFIGURATION
dotenv.config();
const app = express();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distPath = path.join(__dirname, '../../dist')

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Serve Static Files
app.use(express.static(distPath));


// ROUTES
app.use('/api', apisRouter)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});


//Listen
ViteExpress.listen(app, PORT, () =>
  console.log('Server is listening on port', PORT, '...'),
);

