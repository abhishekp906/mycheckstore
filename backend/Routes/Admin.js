const express = require('express');
const router = express.Router();
const User = require('../Models/User');

// Get all sellers (admin only)
router.get('/sellers', async (req, res) => {
  try {
    const sellers = await User.find({ role: 'seller' });
    res.json(sellers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;