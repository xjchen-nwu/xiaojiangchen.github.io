// netlify/functions/increment.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    const counterFile = path.join(__dirname, 'counter.json');
    let counter;

    try {
        counter = JSON.parse(fs.readFileSync(counterFile, 'utf8'));
    } catch (err) {
        console.error('Error reading counter file:', err);
        counter = { visits: 0 };
    }

    counter.visits += 1;

    try {
        fs.writeFileSync(counterFile, JSON.stringify(counter));
    } catch (err) {
        console.error('Error writing counter file:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to write counter file' })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ visits: counter.visits })
    };
};
