const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const taskRoute = require('./routes/taskRoute');
// const connectDB = require('./config/connectDB');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: [process.env.cors_local_URL, process.env.cors_live_URL],
  })
);

app.use('/api/task', taskRoute);

//Routes
app.get('/', (req, res) => {
  res.send('Home Page...');
});
