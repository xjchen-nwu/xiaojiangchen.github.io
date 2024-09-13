// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const counterFile = 'counter.json';

app.use(express.static('public'));

app.get('/increment', (req, res) => {
    fs.readFile(counterFile, (err, data) => {
        if (err) throw err;
        let counter = JSON.parse(data);
        counter.visits += 1;
        fs.writeFile(counterFile, JSON.stringify(counter), (err) => {
            if (err) throw err;
            res.json({ visits: counter.visits });
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
