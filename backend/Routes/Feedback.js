const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/feedback', async (req, res) => {
  const feedback = new Feedback(req.body);
  try {
    await feedback.save();
    res.status(201).send({ feedback, success: true });
  } catch (e) {
    res.status(400).send({ error: e, success: false });
  }
});

module.exports = router;