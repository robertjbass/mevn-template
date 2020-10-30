// Importing required modules
import cors from 'cors';
import express from 'express';

// parse env variables
if (process.env.NODE_ENV !== 'production') {
  console.log("Development Server")
}

import * as dotenv from 'dotenv';

console.log(dotenv.config)

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());

app.set('view engine', 'html');

// // Static folder
// app.use(express.static(__dirname + '/views/'));

// // Defining route middleware
// app.use('/api', require('./routes/api'));

// Listening to port
app.listen(port);
// console.log(`Listening On http://localhost:${port}/api`);
console.log(`Listening On http://localhost:${port}`);

module.exports = app;
