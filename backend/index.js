// backend/index.js
const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // Import mongoose

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const mongoDB = require('./db');
mongoDB();

app.use(express.json());
app.use(cors());

// Corrected the route for Contactus
const ContactusRouter = require('./Routes/Contactus'); // Corrected the import
app.use('/api', ContactusRouter); // No need for '.js' extension

mongoose.connect("mongodb://127.0.0.1:27017/feedback", { useNewUrlParser: true, useUnifiedTopology: true }) // Added options for useNewUrlParser and useUnifiedTopology
  .then(() => {
    console.log("Connected to MongoDB");
    const port = process.env.PORT || 3001; // Changed the variable name to 'port'
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

dotenv.config();
const port = process.env.PORT || 5000; // Use 'port' for consistency
app.listen(port, () => console.log (`Example app listening on port ${port}`));
