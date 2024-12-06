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

// Route for contact event
router.get('/contact', async (req, res) => {
  try {
    const result = await pool.query(`
        WITH ongoing_event AS (
            SELECT 
                eid, ename, TO_CHAR(ebegin, 'DD/MM/YYYY') AS ebegin, TO_CHAR(eend, 'DD/MM/YYYY') AS eend, eplace, edescription, eimage
            FROM 
                events
            WHERE 
                CURRENT_DATE BETWEEN ebegin AND eend
            LIMIT 1
        ), next_event AS (
            SELECT 
                eid, ename, TO_CHAR(ebegin, 'DD/MM/YYYY') AS ebegin, TO_CHAR(eend, 'DD/MM/YYYY') AS eend, eplace, edescription, eimage
            FROM 
                events
            WHERE 
                ebegin > CURRENT_DATE
            ORDER BY 
                ebegin
            LIMIT 1
        ), last_event AS (
            SELECT 
                eid, ename, TO_CHAR(ebegin, 'DD/MM/YYYY') AS ebegin, TO_CHAR(eend, 'DD/MM/YYYY') AS eend, eplace, edescription, eimage
            FROM 
                events
            WHERE 
                eend < CURRENT_DATE
            ORDER BY 
                eend DESC
            LIMIT 1
        )
        SELECT * FROM ongoing_event
        UNION ALL
        SELECT * FROM next_event
        WHERE NOT EXISTS (SELECT 1 FROM ongoing_event)
        UNION ALL
        SELECT * FROM last_event
        WHERE NOT EXISTS (SELECT 1 FROM ongoing_event) AND NOT EXISTS (SELECT 1 FROM next_event);
      `);
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;
