const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Could not connect to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL!');
});

// Simple route to test
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Backend is listening at http://localhost:${port}`);
});

