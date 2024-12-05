const express = require('express');
const pool = require('./db');
const router = express.Router();

// Route for homepage
router.get('/homepage', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM homepage');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Route for categories
router.get('/categories', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Route for paintings/:category
router.get('/paintings/:category', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        c.cName AS category_name,
        p.pDescription AS painting_description,
        p.pSize AS painting_size,
        i.iImage AS image,
        i.iFirst AS is_first
      FROM 
        paintings p
      JOIN 
        categories c ON p.pCategory = c.cId
      JOIN 
        images i ON p.pId = i.iPainting
      WHERE 
        i.iFirst = true AND
        c.cName = $1;`, [req.params.category]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//route for painting/:category/:id
router.get('/paintings/:category/:id', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        c.cName AS category_name,
        p.pDescription AS painting_description,
        p.pSize AS painting_size,
        i.iImage AS image,
        i.iFirst AS is_first
      FROM 
        paintings p
      JOIN 
        categories c ON p.pCategory = c.cId
      JOIN 
        images i ON p.pId = i.iPainting
      WHERE 
        c.cName = $1 AND
        p.pId = $2;`, [req.params.category, req.params.id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Route for events
router.get('/events', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
