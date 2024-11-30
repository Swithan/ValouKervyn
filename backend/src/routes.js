const express = require('express');
const pool = require('./db');
const router = express.Router();

// Example route for homepage
router.get('/homepage', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM homepage');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add more routes for other tables...

module.exports = router;
