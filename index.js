import express from 'express';
import mongoose from 'mongoose';
import routuser from './routes/postroiute.js';  // Ensure correct filename

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the route for user
app.use('/user', routuser);

// Connect to MongoDB
const mongooseurl = "mongodb://localhost:27017/product";  // Remove the trailing space
mongoose.connect(mongooseurl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const port = 3008;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
