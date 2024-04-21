const mongoose = require('mongoose');

const { Schema } = mongoose;

const ContactusSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneno: {
    type: String,
    required: true
  },
  suggestions: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Contactus', ContactusSchema);
