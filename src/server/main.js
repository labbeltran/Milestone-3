// DEPENDENCIES
import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";


// CONFIGURATION
dotenv.config();
const app = express();
const PORT = process.env.PORT;


// Middleware to parse JSON requests
app.use(express.json());

// ROUTES
// app.get('/', (req, res) => {
//     res.send('Hello, world!');
//   });

//Listen
ViteExpress.listen(app, PORT, () =>
  console.log('Server is listening on port', PORT, '...'),
);

