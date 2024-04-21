const express = require('express');
const router = express.Router();
const Contactus = require('../models/Contactus');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, suggestions } = req.body;
    const newContactus = new Contactus({ name, email, phone, suggestions });
    await newContactus.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
