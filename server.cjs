const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'oxy-technologies'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create contacts table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    company VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

db.query(createTableQuery, (err, result) => {
  if (err) {
    console.error('Error creating contacts table:', err);
  } else {
    console.log('Contacts table ready');
  }
});

// POST route to handle contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name, email, phone, and message are required fields' 
    });
  }

  const insertQuery = 'INSERT INTO contacts (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)';
  const values = [name, email, phone, company, message];

  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error inserting contact:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to save contact information' 
      });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Contact information saved successfully',
      id: result.insertId 
    });
  });
});

// GET route to retrieve all contacts (optional, for admin purposes)
app.get('/api/contacts', (req, res) => {
  const selectQuery = 'SELECT * FROM contacts ORDER BY created_at DESC';

  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Error fetching contacts:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to retrieve contacts' 
      });
    }

    res.status(200).json({ 
      success: true, 
      data: results 
    });
  });
});

// Serve static files from the frontend build
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});