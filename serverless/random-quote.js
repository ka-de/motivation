const express = require('express');
const serverless = require('serverless-http');
const fs = require('fs');

const app = express();
const router = express.Router();

// Read the motivation.json file (replace with the actual path)
const jsonData = JSON.parse(fs.readFileSync('../motivation.json', 'utf8'));

// Function to select a random object from the JSON
function getRandomObject() {
  const randomIndex = Math.floor(Math.random() * jsonData.length);
  return jsonData[randomIndex];
}

// Define a route for your serverless function
router.get('/random-quote', (req, res) => {
  try {
    const randomData = getRandomObject();
    res.status(200).json(randomData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Use the router for your serverless function
app.use('/.netlify/functions', router);

// Export the app as a serverless function
module.exports = serverless(app);