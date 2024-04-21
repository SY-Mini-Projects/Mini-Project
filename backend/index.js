// backend/index.js
const express = require('express');
const app = express();
const port = 5000;
const cors = require("cors");
const dotenv=require('dotenv');
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
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

dotenv.config();
const port1=process.env.PORT1||5000;
app.listen(port, () => console.log (`Server is running on port ${port1}`));