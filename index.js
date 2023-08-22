const express = require('express');
const app = express();
const fs = require('fs');

const quotesData = fs.readFileSync('motivation.json', 'utf8');
const quotes = JSON.parse(quotesData);

app.get('/randomquote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

const PORT = process.env.PORT || 3636;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
