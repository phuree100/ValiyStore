const express = require('express');
import path from "path";

const app = express();
const port = 3000;

console.log(`yoo`);

// Parse JSON requests
app.use(express.json());

// Rest of your code remains the same
//
app.use(express.static(path.join(__dirname, 'public')));

// Sample data
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// GET endpoint
app.get('/api/items', (req, res) => {
  res.json(data);
});

// POST endpoint
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// Serve Home.html for the '?page=home' route
app.get('/', (req, res) => {
  if (req.query.page === 'home') {
    res.sendFile(path.join(__dirname, 'public', 'Home.html'));
  } else {
    res.json("");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
