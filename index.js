const express = require('express');
const app = express();
const fs = require('fs');

const jsonFilePath = '/var/www/motivation/motivation.json';

app.get('/motivation', (req, res) => {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const quotes = JSON.parse(data);

        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        res.json(randomQuote);
    });
});

const PORT = process.env.PORT || 3636;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
