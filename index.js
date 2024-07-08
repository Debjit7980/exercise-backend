// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());






// Route to handle form submission
app.post('/form', (req, res) => {
  const { name, email, date } = req.body;
  console.log('Received form data:', { name, email, date });

  // You can perform any further processing here, such as saving the data to a database

  res.status(200).json({ message: 'Form data received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
