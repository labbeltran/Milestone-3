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
app.use(express.static('dist'));
app.use(express.urlencoded({ extended: true}));

//Serve Static Files
const __dirname = 'dist/index.html'


// ROUTES
app.use('/api', apisRouter)
app.get('*', (req, res)=>{
  res.sendFile('dist/index.html', {root:__dirname})
})


//Listen
ViteExpress.listen(app, PORT, () =>
  console.log('Server is listening on port', PORT, '...'),
);

