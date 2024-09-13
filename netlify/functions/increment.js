// netlify/functions/visit-count.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    const counterFile = path.join(__dirname, 'counter.json');
    let counter;

    try {
        counter = JSON.parse(fs.readFileSync(counterFile, 'utf8'));
    } catch (err) {
        counter = { visits: 0 };
    }

    if (event.httpMethod === 'POST') {
        counter.visits += 1;

        try {
            fs.writeFileSync(counterFile, JSON.stringify(counter));
        } catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Failed to write counter file' })
            };
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ visits: counter.visits })
    };
};
